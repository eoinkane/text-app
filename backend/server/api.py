#!/usr/bin/env python
import os
import requests
from flask import Flask, abort, request, jsonify, g
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth
from passlib.apps import custom_app_context as pwd_context

SQLALCHEMY_DATABASE_URI=os.environ.get("SQLALCHEMY_DATABASE_URI")
SECRET_KEY=os.environ.get("SECRET_KEY")

ADMIN_DB_USER_NAME=os.environ.get("ADMIN_DB_USER_NAME")
ADMIN_DB_USER_PASSWORD=os.environ.get("ADMIN_DB_USER_PASSWORD")

DB_HOSTNAME=os.environ.get("DB_HOSTNAME")

# initialization
app = Flask(__name__)
app.config['SECRET_KEY'] = SECRET_KEY
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

# extensions
db = SQLAlchemy(app)
auth = HTTPBasicAuth()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), index=True)
    first_name = db.Column(db.String(32))
    last_name = db.Column(db.String(32))
    password_hash = db.Column(db.String(64))

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)

@auth.verify_password
def verify_password(username, password):
    user = User.query.filter_by(username = username).first()
    if not user or not user.verify_password(password):
        return False
    g.user = user
    return True

@app.route("/verify_user", methods=['GET'])
@auth.login_required
def verify_user():
    return jsonify({}), 200

@app.route('/api/users', methods = ['POST'])
def new_user():
    username = request.json.get('username')
    password = request.json.get('password')
    first_name = request.json.get('firstName')
    last_name = request.json.get('lastName')

    if username is None or password is None or first_name is None or last_name is None:
        abort(400) # missing arguments
    if User.query.filter_by(username = username).first() is not None:
        abort(400) # existing user
    user = User(username = username, first_name = first_name, last_name = last_name)
    existing_user_request = requests.get(f"{DB_HOSTNAME}/users?userName={username}", auth=(str(ADMIN_DB_USER_NAME), str(ADMIN_DB_USER_PASSWORD)))
    if len((existing_user_request.json())) != 0:
        abort(400)

    # save user model to json db
    save_user_json_db_request = requests.post(f"{DB_HOSTNAME}/users", data={
        "userName": user.username,
        "firstName": user.first_name,
        "lastName": user.last_name
    }, auth=(ADMIN_DB_USER_NAME, ADMIN_DB_USER_PASSWORD))

    if save_user_json_db_request.status_code != 201:
        abort(502)

    user.hash_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({ 'username': user.username }), 201


if __name__ == '__main__':
    if not os.path.exists('db.sqlite'):
        db.create_all()
        user = User(username = ADMIN_DB_USER_NAME, first_name = "Admin", last_name = "User")
        user.hash_password(ADMIN_DB_USER_PASSWORD)
        db.session.add(user)
        db.session.commit()
    app.run(debug=False)
