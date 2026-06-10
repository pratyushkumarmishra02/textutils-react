import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClrclick = () => {
    setText("");
    props.showAlert("All cleared!", "success");
  };
  const handleRmvExtWsclick = () => {
    const cleanText = text
      .split("\n")
      .map((line) => line.trim().replace(/\s+/g, " "))
      .filter((line) => line.length > 0) // remove empty lines
      .join("\n");
    setText(cleanText);
    props.showAlert("Removed Extra whitespaces!", "success");
  };
  const handleCopy = async () => {
    try {
      let textArea = document.querySelector("#myBox");
      textArea.select();
      await navigator.clipboard.writeText(textArea.value);
      window.getSelection().removeAllRanges();
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleOnChange = (evt) => {
    setText(evt.target.value);
  };
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a text here"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>
          Convert to LowerCase
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleRmvExtWsclick}
        >
          Remove Extra Whitespace
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy All
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClrclick}>
          Clear All
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="textSummary">Your Text Summary</h1>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * wordCount} minuts read</p>
        <h2>Preview</h2>
        <p placeholder="Enter any text to preview that text here">
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
