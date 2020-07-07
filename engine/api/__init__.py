from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def creat_app():
    app = Flask(__name__)
    app.config['SECRET_KEY']= 'thisiskey'
    app.config['SQLALCHEMY_DATABASE_URI']='sqllite:///database.db'
    db.init_app(app)
    from .views import main
    app.register_blueprint(main)
    return app