import datetime

from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np # np is general convention

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

@app.route('/data/<int:length>')
def getRandomData(length):
    data = np.random.uniform(0, 1, length).tolist()
    # data type dict is automatically converted to JSON
    return {
        "length": length,
        "lastmod": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "data": data
    }
