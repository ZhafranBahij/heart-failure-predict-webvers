import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState } from "react";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";
import InputText from "../component/InputText";
import InputSelect from "../component/InputSelect";

export default function Predict() {
  const [getMessage, setGetMessage] = useState("Let's Predict");

  const alertClass = {
    alive:
      "w-1/2 font-title font-bold p-4  text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800",
    death:
      "w-1/2 font-title font-bold p-4  text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800",
  };

  // ini data yang akan diubah di form
  const [data, setData] = useState({
    age: 30,
    anaemia: 0,
    creatine_phosphokinase: 92,
    diabetes: 0,
    ejection_fraction: 60,
    high_blood_pressure: 0,
    platelets: 317000,
    serum_creatinine: 0.8,
    serum_sodium: 140,
    are_you_male: 0,
    smoking: 0,
    time: 74,
  });

  const labels = [
    "age",
    "anaemia",
    "creatine_phosphokinase",
    "diabetes",
    "ejection_fraction",
    "high_blood_pressure",
    "platelets",
    "serum_creatinine",
    "serum_sodium",
    "are_you_male",
    "smoking",
    "time",
  ];
  // Ini berguna untuk mendapatkan data json dari app.py yang routenya get dan method get
  useEffect(() => {
    axios
      // .get("http://localhost:5000/flask/get")
      .get("https://heart-failure-prediction-g2.herokuapp.com/flask/get")
      .then((response) => {
        console.log("SUCCESS", response);
        setGetMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // If a form was typed
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // If clicked a submit
  // Saat submit, data di post ke route predicition sesuai dengan yang di app.py method post
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      // url: "http://localhost:5000/flask/prediction",
      url: "https://heart-failure-prediction-g2.herokuapp.com/flask/prediction",
      data: data,
    })
      .then((response) => {
        console.log("SUCCESS", response);
        setGetMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(JSON.stringify(data));
  };
  return (
    <Template>
      <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-title animate-pulse">
        <span className="block xl:inline text-red-600">Prediction</span> <br />
      </h1>
      <small className="text-red-300">No = 0, Yes = 1</small>

      <form onSubmit={handleSubmit} className="mt-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labels.map((name) => (
            <InputText name={name} handleChange={handleChange} data={data} />
          ))}
        </div>
        <div class="flex sm:flex-row flex-col gap-4 mt-8">
          <button
            type="submit"
            className="text-red-300 hover:text-red-900 bg-red-800 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <div
            className={
              getMessage == "Will Alive" ? alertClass.alive : alertClass.death
            }
            role="alert"
          >
            {getMessage}
          </div>
        </div>
      </form>
    </Template>
  );
}
