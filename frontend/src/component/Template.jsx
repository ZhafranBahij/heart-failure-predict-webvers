import "../App.css";
import React from "react";
import "../index.css";
import HeartImage from "../img/heart.jpg";
import Navbar from "./Navbar";

function App(props) {
  return (
    <>
      <div className="relative bg-black overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            {/* <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg> */}

            <Navbar />

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              {props.children}
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={HeartImage}
            alt="Heart Image"
          />
        </div>
      </div>
    </>
  );
}

export default App;
