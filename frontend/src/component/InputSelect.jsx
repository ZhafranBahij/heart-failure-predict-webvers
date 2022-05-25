import "../App.css";
import React from "react";
import "../index.css";

function App(props) {
  return (
    <>
      <label
        htmlFor={props.name}
        className="block mb-2 text-md font-medium text-red-300"
      >
        {props.name}
      </label>
      <select
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        className="bg-transparent border border-red-800 text-red-300 text-sm rounded-lg focus:ring-red-300 focus:border-red-500 block w-full p-2.5 "
        required
      >
        <option selected="" value="0">
          No
        </option>
        <option value="1">Yes</option>
      </select>
    </>
  );
}

export default App;
