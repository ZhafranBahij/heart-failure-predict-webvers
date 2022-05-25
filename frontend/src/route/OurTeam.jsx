import logo from "../logo.svg";
import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Template from "../component/Template";
import Thelink from "../component/Thelink";

export default function Our() {
  return (
    <Template>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-title animate-pulse">
          <span className="block xl:inline text-red-600">
            Member of Group 2 :
          </span>{" "}
          <br />
        </h1>
        <h2 className="text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl font-title  ">
          <span className="block xl:inline text-red-800">
            1. M. Ihwanul Iqbal
          </span>{" "}
          <br />
          <span className="block xl:inline text-red-800">
            2. M. Zhafran Bahij
          </span>{" "}
          <br />
        </h2>
        <Thelink link="/" name="Back to home" />
      </div>
    </Template>
  );
}
