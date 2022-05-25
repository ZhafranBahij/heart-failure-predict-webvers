# # from crypt import methods
import flask

# # Editing app.py to load the model
# import numpy as np
# import pickle


# # Untuk nyari template
# app = flask.Flask(__name__, template_folder='templates')

# # Rute
# @app.route('/')
# def main():
#   return(flask.render_template('main.html'))
# if __name__ == '__main__':
#   app.run(debug=True)


# model = pickle.load(open('./model/linear_regression.pkl', 'rb'))

# # Redirecting the API to predict the result 
# @app.route('/predict',methods=['POST'])
# def predict():
#   '''
#   For rendering results on HTML GUI
#   '''
  
#   try:
#     float_features = [float(x) for x in flask.request.form.values()]
#   except:
#     return flask.render_template('main.html',
#       alert_message='Inputnya harus angka'
#     )

#   final_features = [np.array(float_features)]
#   prediction = model.predict(final_features)
#   cab_type = ['Lyft', 'Uber']

#   return flask.render_template('main.html',
#     prediction_text=prediction[0],
#     distance=float_features[0],
#     surge=float_features[1],
#     cab=cab_type[int(float_features[2])],
#     visibility=float_features[3],
#     windbearing=float_features[4],
#     moonphase=float_features[5],
#     windgust=float_features[6]
#   )

from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from HelloApiHandler import HelloApiHandler
import numpy as np
import pickle

model = pickle.load(open('./model/linear_regression.pkl', 'rb'))
app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/predict", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(HelloApiHandler, '/flask/hello')