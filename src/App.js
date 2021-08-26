// eslint-disable-next-line
import "./App.css";
// import About from "./MyComponents/About";
import Header from "./MyComponents/Header";
import TextForm from "./MyComponents/TextForm";
import React, { useState } from "react";
import Alerts from "./MyComponents/Alerts";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toogleDarkMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled ", "success");
    } else if (mode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode enabled ", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Header
        title="PK Limited"
        searchBar={true}
        mode={mode}
        toogleDarkMode={toogleDarkMode}
      />
      <Alerts alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          heading="Enter the Text here to analyze"
          showAlert={showAlert}
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
