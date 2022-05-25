import "../App.css";
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Thelink(props) {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <Link
          to="/predict"
          className="hover:animate-pulse  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-300 hover:text-red-900 bg-red-800 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
        >
          PREDICT NOW
        </Link>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <Link
          to={props.link}
          className="hover:animate-pulse w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-900 hover:text-red-300 bg-red-300 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
        >
          {props.name}
        </Link>
      </div>
    </div>
  );
}
