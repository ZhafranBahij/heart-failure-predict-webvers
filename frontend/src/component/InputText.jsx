import "../App.css";
import React from "react";
import "../index.css";

function App(props) {
  return (
    <>
      <div>
        <label
          htmlFor={props.name}
          className="block mb-2 text-md font-medium text-red-300"
        >
          {props.name}
        </label>
        <input
          type="text"
          id={props.name}
          name={props.name}
          value={props.data[props.name]}
          onChange={props.handleChange}
          className="bg-transparent border border-red-800 text-red-300 text-sm rounded-lg focus:ring-red-300 focus:border-red-500 block w-full p-2.5 "
          required
        />
      </div>
    </>
  );
}

export default App;
