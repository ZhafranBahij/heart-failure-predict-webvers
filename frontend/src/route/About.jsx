import logo from "../logo.svg";
import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";

export default function App() {
  return (
    <Template>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-title animate-pulse ">
          <span className="block xl:inline text-red-600">About</span> <br />
        </h1>
        <p className="mt-3 text-base text-red-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          The purpose of this app is to predict your heart. You can click
          "prediction" or "PREDICT NOW" and then do prediction. Thanks to mentor
          for guide our team to create fabulous app. The source for learning the
          model is{" "}
          <a
            href="https://www.kaggle.com/datasets/andrewmvd/heart-failure-clinical-data?resource=download"
            className="hover:text-red-300"
          >
            HERE
          </a>{" "}
          . Thank you for reading this section. I hope, you understand what the
          purpose of this web.
        </p>
        <Thelink link="/" name="Back to home" />
      </div>
    </Template>
  );
}
