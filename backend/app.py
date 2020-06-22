from flask import Flask, jsonify
from flask_cors import CORS

# configuration

# instantiate the app
# app:app is a default name that would be autodiscovered by flask run
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


# sanity check route
# by default, a route only answers to GET requests
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')
