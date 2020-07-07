from flask import Blueprint , jsonify
from . import db
# from .models import

@main.route('/singin', methods =['POST'])
def singin():
    return "Done", 201