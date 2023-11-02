import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase is invoked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase is invoked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows={8}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>
          Remove Spaces
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <p>Preview</p>
        <h2>{text}</h2>
      </div>
    </>
  );
}
