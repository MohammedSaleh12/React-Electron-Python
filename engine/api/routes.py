from flask import jsonify ,request , make_response
import uuid
from werkzeug.security import generate_password_hash , check_password_hash
import jwt
import datetime
from api import app ,db
from api.models import User, Todo, Tables, Items , Cart
from api.auth import token_required

 
@app.route('/user', methods=['GET'])

def get_all_users():

   
     # if not current_user.admin:
    #     return jsonify({'message' : 'Cannot perform that function!'})
    users = User.query.all()

    output = []

    for user in users:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['name'] = user.name
        user_data['password'] = user.password
        user_data['admin'] = user.admin
        output.append(user_data)

    return jsonify({'users' : output})

@app.route('/user/<public_id>', methods=['GET'])
@token_required
def get_one_user(current_user, public_id):

    if not current_user.admin:
        return jsonify({'message' : 'Cannot perform that function!'})

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message' : 'No user found!'})

    user_data = {}
    user_data['public_id'] = user.public_id
    user_data['name'] = user.name
    user_data['password'] = user.password
    user_data['admin'] = user.admin

 

@app.route('/user', methods =['POST'])

def create_user():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method ='sha256')
    new_user = User(public_id=str(uuid.uuid4()), name=data['name'],role=data['role'], password=hashed_password, admin=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'massage' : 'new user created'})


@app.route('/user/<public_id>', methods=['PUT'])
@token_required
def promote_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message' : 'Cannot perform that function!'})

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message' : 'No user found!'})

    user.admin = True
    db.session.commit()

    return jsonify({'message' : 'The user has been promoted!'})

@app.route('/user/<public_id>', methods=['DELETE'])
@token_required
def delete_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message' : 'Cannot perform that function!'})

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message' : 'No user found!'})

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message' : 'The user has been deleted!'})

@app.route('/login')
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})

    user = User.query.filter_by(name=auth.username).first()

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})

    if check_password_hash(user.password, auth.password):
        token = jwt.encode({'public_id' : user.public_id, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=180)}, app.config['SECRET_KEY'])
        username = user.name
        role = user.role
        isadmin = user.admin
        return jsonify({'token' : token.decode('UTF-8'), 'name': username , 'role': role , 'isadmin' : isadmin})

    return make_response('Could not verify', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})

@app.route('/todo', methods=['GET'])
@token_required
def get_all_todos(current_user):
    todos = Todo.query.filter_by(user_id=current_user.id).all()

    output = []

    for todo in todos:
        todo_data = {}
        todo_data['id'] = todo.id
        todo_data['text'] = todo.text
        todo_data['complete'] = todo.complete
        output.append(todo_data)

    return jsonify({'todos' : output})

@app.route('/todo/<todo_id>', methods=['GET'])
@token_required
def get_one_todo(current_user, todo_id):
    todo = Todo.query.filter_by(id=todo_id, user_id=current_user.id).first()

    if not todo:
        return jsonify({'message' : 'No todo found!'})

    todo_data = {}
    todo_data['id'] = todo.id
    todo_data['text'] = todo.text
    todo_data['complete'] = todo.complete

    return jsonify(todo_data)

@app.route('/todo', methods=['POST'])
@token_required
def create_todo(current_user):
    data = request.get_json()

    new_todo = Todo(text=data['text'], complete=False, user_id=current_user.id)
    db.session.add(new_todo)
    db.session.commit()

    return jsonify({'message' : "Todo created!"})

@app.route('/todo/<todo_id>', methods=['PUT'])
@token_required
def complete_todo(current_user, todo_id):
    todo = Todo.query.filter_by(id=todo_id, user_id=current_user.id).first()

    if not todo:
        return jsonify({'message' : 'No todo found!'})

    todo.complete = True
    db.session.commit()

    return jsonify({'message' : 'Todo item has been completed!'})

@app.route('/todo/<todo_id>', methods=['DELETE'])
@token_required
def delete_todo(current_user, todo_id):
    todo = Todo.query.filter_by(id=todo_id, user_id=current_user.id).first()

    if not todo:
        return jsonify({'message' : 'No todo found!'})

    db.session.delete(todo)
    db.session.commit()

    return jsonify({'message' : 'Todo item deleted!'})

@app.route('/table', methods=['POST'])    
@token_required
def create_table(current_user):
    data = request.get_json()

    new_table = Tables(no=data['no'])
    db.session.add(new_table)
    db.session.commit()

    return jsonify({'message' : "Table created!"})

@app.route('/table', methods=['GET'])
@token_required
def get_all_tables(current_user):
    tables = Tables.query.all()

    output = []

    for table in tables:
        table_data = {}
        table_data['id'] = table.id
        table_data['no'] = table.no
        
        output.append(table_data)

    return jsonify({'tables' : output})

@app.route('/item', methods=['POST'])    
@token_required
def create_item(current_user):
    data = request.get_json()

    new_item = Items(name=data['name'], price=data['price'], category=data['category'] )
    db.session.add(new_item)
    db.session.commit()

    return jsonify({'message' : "Item Created!"})

@app.route('/item', methods=['GET'])
@token_required
def get_all_item(current_user):
    items = Items.query.all()

    output = []

    for item in items:
        item_data = {}
        item_data['id'] = item.id
        item_data['name'] = item.name
        item_data['price'] = item.price
        item_data['category'] = item.category
        
        
        output.append(item_data)

    return jsonify({'items' : output})