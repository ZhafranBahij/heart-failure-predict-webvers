import "../App.css";
import React, { useEffect, useState } from "react";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";

export default function App() {
  return (
    <Template>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-title animate-pulse">
          <span className="block xl:inline text-red-400 ">
            Heart Failure Prediction
          </span>{" "}
          <br />
        </h1>
        <h2 className="text-1xl tracking-tight text-gray-900 sm:text-2xl md:text-3xl font-glitch">
          <span className="block xl:inline text-red-600">
            {" "}
            Not 100% Accurate
          </span>
        </h2>
        <p className="mt-3 text-base text-red-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Predict your heart now before it's too late.
        </p>
        <Thelink link="/about" name="What is it?" />
      </div>
    </Template>
  );
}
