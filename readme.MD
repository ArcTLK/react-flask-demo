# Basic Authentication using React + Flask
This is not a complete tutorial on either React or Flask but simply a detailed example on how they can be used together.

## Documentation (React)
### How to start?
When starting a new React application, the recommended way is to use the Create React App CLI tool. Of course, you'll be expected to have the latest versions of Node and Npm (which is included by default in the Node installer for Windows) from <https://nodejs.org/en/>.

To use the Create React App CLI, you can run the following command: `npx create-react-app react-demo`
Here, `react-demo` is the name of our application.

This operation creates a folder called `react-demo` wherever you ran this command. It also automatically runs `npm install` along with the required packages. Finally, it creates some other basic files so that you can directly try running the application and see if it works!

To run the application, first navigate to the new folder using: `cd react-demo`
Then, run: `npm start`

To start designing your application, you can wipe the content present in `./src/App.css` and `./src/App.js` and write your own code!

### Adding Bootstrap
To use Bootstrap, you'll need to first install jquery by running: `npm install jquery`.
You can add Bootstrap to your application by running `npm install bootstrap` and then adding the following to the start of the `index.js` file:
```javascript
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
```

### Adding Routing / Navigation
The Create React App tool doesn't come with the React Router package by default. To add it, run:
`npm install react-router-dom`

You can then follow the basic example given here: <https://reactrouter.com/web/example/basic> to familiarize yourself with the components used for navigation to work. In this application, we have four routes, two for login / logout, another for registration and finally one for a dummy dashboard.

### Folder Structure
The Create React App tool doesn't specify any specific folder structure to follow. In this application, I've created a components folder within the src folder where I will include files for my components as required. It doesn't really matter in this application because of its size, however if your application is complex, deciding on a good folder structure before starting is recommended.

### HTTP AJAX requests using Axios
Vanilla JavaScript provides us with two ways to make HTTP requests - the XMLHttpRequestObject and the Fetch API. Both however, are lower level ways to do AJAX requests and are meant to be abstracted using a custom function anyway. So we'll be using a library called Axios that does just this and much more. To install axios, run `npm install axios`.

### Feedback using toasters
Since AJAX requests don't give any feedback to the user whether they succeeded or failed automatically, it is upto the developer to do so. You can use `react-toastify` for this. To install it, run `npm install react-toastify`. You can learn how to use it at <https://fkhadra.github.io/react-toastify/introduction/>.

### Route guards using react-router-guards
We can add route guards using `react-router-guards` to ensure that only logged-in users can access pages that require authorization. You can install it using `npm install react-router-guards` and find its documentation at <https://www.npmjs.com/package/react-router-guards>.

## Documentation (Flask)
### How to start?
As Flask is a microframework, using it is very straightforward. Simply make sure that you have the latest version of Python 3 installed from <https://www.python.org/> and follow these steps:
1. Create a folder named `flask-demo`.
2. Create a virtual environment using: `python -m venv venv`.
3. On Windows, run `venv\Scripts\activate` to enter the virtual environment. (This step is required everytime you want to run your application).
4. Install Flask using `pip install Flask`.
5. Create a file named `app.py` in the `flask-demo` folder.
6. Add the following minimal code in it:
```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
```
7. Finally, run `flask run` to run your flask application!

### A Note on CORS
CORS would be an issue for us since our client and API applications are running on different hostnames. To bypass this issue, we can use the `flask-cors` package by running `pip install flask-cors` and including it in our application. To do so, you can follow the example on their package web page at <https://pypi.org/project/Flask-Cors/>.

### Adding database functionality using tinydb
As quoted from the Tinydb package page at <https://pypi.org/project/tinydb/>:
> TinyDB is a lightweight document oriented database optimized for your happiness :) It’s written in pure Python and has no external dependencies. The target are small apps that would be blown away by a SQL-DB or an external database server.

**_Important Note_**: **Tinydb is not meant to be used for a HTTP server as it does not provide ACID guarantees. It is only being used here for example purposes!**

To install tinydb, first make sure that your virtual environment is running, then run: `pip install tinydb`. After that, you should be able to use tinydb as usual in your `app.py` file.

You can find the documentation for tinydb at <https://tinydb.readthedocs.io/en/latest/>.

### Password hashing using bcrypt
Using the bcrypt library, we can safely store our passwords in our database. To install bcrypt, run `pip install bcrypt`.

### JWT Authentication using PyJWT
To install python-jwt, run: `pip install PyJWT`. You can look up its usage at <https://github.com/jpadilla/pyjwt>.