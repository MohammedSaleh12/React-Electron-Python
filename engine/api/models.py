from api import db

class User(db.Model):
    id = db.Column(db.Integer , primary_key=True )
    public_id= db.Column(db.String())
    name= db.Column(db.String())
    role=db.Column(db.String())
    password = db.Column(db.String())
    admin = db.Column(db.Boolean)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(50))
    complete = db.Column(db.Boolean)
    user_id = db.Column(db.Integer)

class Tables(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    no = db.Column(db.Integer)
    

class Items(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String())
    price= db.Column(db.Integer)
    category = db.Column(db.String())
    isactive = db.Column(db.Boolean)

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String())
    price= db.Column(db.Integer)
    category = db.Column(db.String())
    tables_id = db.Column(db.Integer)
    
  