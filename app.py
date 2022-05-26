# Starter pack
from flask import Flask, send_from_directory, render_template
from flask_restful import Api, Resource, reqparse
# from flask_cors import CORS #comment this on deployment
import numpy as np
import joblib
from flask import jsonify
from flask import request

# app = Flask(__name__, static_url_path='', static_folder='frontend/build')
app = Flask(__name__, static_url_path='', static_folder='frontend/dist')
# CORS(app) #comment this on deployment
api = Api(app)

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()

"""
Jika tidak ada definisi methods, berarti methods=['GET']
Agar bisa diterima oleh axios, dikirim dengan jsonify()
"""
@app.route("/flask/get")
def users_api():
    message = "I hope you safe"
    return jsonify(message = message)

model = joblib.load(open('./model/random_forest.joblib', 'rb'))

"""
Ini saat form yang telah diisi di POST melalui axios
data dikirim ke route prediction
data form dari axios diambil dengan request.json
yahh sisanya sama seperti projek sebelumnya.
"""
@app.route("/flask/prediction", methods=['POST'])
def jet():
    try:
        dicto = dict(request.json)
        print(dicto.items())
        float_features = [float(value) for key,value in dicto.items()]
    except:
        return jsonify(
            message="Please, just input number!",
        )

    final_features = [np.array(float_features)]
    prediction = model.predict(final_features)
    death_event = ['Will Alive', 'Please, check to Doctor, NOW!']

    return jsonify(
        message=death_event[int(prediction[0])],
    )

@app.errorhandler(404)
def not_found(e):
    return render_template('index.html')

#* nama def di bawah route itu bisa diubah sesuka kita
#* nama url route bisa diubah asalkan entar disesuaikan lagi dengan axios.