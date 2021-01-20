import bcrypt
import jwt

from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

from tinydb import TinyDB, Query
db = TinyDB('db.json')
User = Query()

@app.route('/', methods=['GET'])
def index():
    return 'You\'re looking at an API! Login and Register by POSTing on the /login and /register routes respectively.'

@app.route('/login', methods=['POST'])
def login():
    if request.authorization is None:
        return 'Please provide username and password!', 400
    
    email = request.authorization.username
    password = request.authorization.password

    users = db.search(User.email == email)

    if len(users) != 1 or not bcrypt.checkpw(password.encode('utf-8'), users[0]['password'].encode('utf-8')):
        return 'Incorrect username / password!', 400
    
    return jwt.encode({ 'email': users[0]['email'], 'name': users[0]['name'] }, 'random-secret', algorithm='HS256')

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    
    if len(db.search(User.email == data['email'])) > 0:
        return 'An account with this email already exists!', 400

    hashedPassword = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    db.insert({'name': data['name'], 'email': data['email'], 'password': hashedPassword.decode('ascii')})

    return jwt.encode({ 'email': data['email'], 'name': data['name'] }, 'random-secret', algorithm='HS256')