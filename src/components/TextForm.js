import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into the Uppercase", "success");
  };
  const handleloclick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into the Lowercase", "success");
  };
  const handleclearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been clear", "success");
  };
  const handleReplace = ()=>{
    let replace = prompt("Which word You Want To Replace?");
    let replaceWith = prompt("Replace With?");
    let newText = text.replaceAll(replace, replaceWith);
    setText(newText)
} 
const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
     const handleCopy = ()=>{
      console.log("I am copy");
      var text = document.getElementById("MyBox");
      text.select();
      text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard","success");

     }
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='white'? 'grey ':'dark'}}
            id="MyBox"
            rows="8" 
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>
          Convert the upparcase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert the lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearText}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReplace}>
          ReplaceButton
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="conatiner" my-3>
        <h2>Your Text Summary</h2>
        <b>
          {text.split(" ").length}word, {text.length}character
        </b>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
    </>
  );
}
