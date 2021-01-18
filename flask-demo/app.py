from flask import Flask
app = Flask(__name__)

from tinydb import TinyDB
db = TinyDB('db.json')

@app.route('/', methods=['GET'])
def index():
    return 'You\'re looking at an API! Login and Register by POSTing on the /login and /register routes respectively.'

@app.route('/login', methods=['POST'])
def login():
    pass

@app.route('/register', methods=['POST'])
def register():
    pass