from . import db

class user(db.Model):
    # __tablename__ = 'user'
    id = db.Column(db.Integer , primary_key=True )
    public_id= db.Column(db.String())
    name= db.Column(db.String())
    role=db.Column(db.String())
    password = db.Column(db.String())
    authenticated = db.Column(db.Boolean, default=False)
    