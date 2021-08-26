// eslint-disable-next-line
import React, { useState } from "react";

function TextForm(props) {
  const handleupCick = () => {
    // console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success")

  };

  const handleONChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handlelowerCaseCick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lower case","success")
  }

  const handleclearText = () =>{
    setText("")
    props.showAlert("text cleared","success")
  }

  const handleReveseString = () =>{
    let splitString = text.split("")
    let reveseString = splitString.reverse();
    let joinString = reveseString.join("");
    setText(joinString);
  }

  const handleSpace = () =>{
    const newtext = text.replace(/\s+/g,' ');
    setText(newtext);
    props.showAlert("Extra space removed","success")

  }

  const handleCopy = () =>{
    text.SelectAll()
    navigator.clipboard.writeText(text)

  }

  const [text, setText] = useState("");
  return (
    <>
  
      <div className={`container text-${props.mode ==='light'?'dark':'light'}}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            name=""
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleONChange}
            placeholder="Enter the Text Here"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupCick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlelowerCaseCick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearText}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleReveseString}>Reverse</button>
        <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
      </div>

      <div className={`container my-3 text-${props.mode ==='light'?'dark':'white'}}`}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Read time</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter the text to preview..."}</p>
      </div>
      
    </>
  );
}

export default TextForm;
