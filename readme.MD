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

You can then follow the basic example given here: <https://reactrouter.com/web/example/basic> to familiarize yourself with the components used for navigation to work. In this application, we have three routes, one for login, another for registration and finally one for a dummy dashboard.

### Folder Structure
The Create React App tool doesn't specify any specific folder structure to follow. In this application, I've created a components folder within the src folder where I will include files for my components as required. It doesn't really matter in this application because of its size, however if your application is complex, deciding on a good folder structure before starting is recommended.

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

### Adding database functionality using tinydb
