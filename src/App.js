//import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import { Routes, Route } from "react-router";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Darkmode");
  const [alert, setAlert] = useState(null);

  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setText("Disable Darkmode");
      showAlert("Darkmode Enabled", "success");
      document.title = "TextUtils - Darkmode Enabled";
      // setInterval(() =>{
      //   document.title="TextUtils is an amazing app"
      // },2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setText("Enable Darkmode");
      showAlert("Darkmode Disabled", "success");
      document.title = "TextUtils - Darkmode Disabled";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
    <Navbar
          title="TextUtils"
          aboutText="About"
          toggleMode={handleToggleMode}
          mode={mode}
          text={text}
        />
        <Alert alert={alert} />
      {/* <Routes>
        <Route
          path="/"
          element={ */}
            <TextForm
              heading="Enter the text to analyze below"
              mode={mode}
              showAlert={showAlert}
            />
          {/* }
        />
        <Route
          path="/about"
          element={<div className="container">{<About />}</div>}
        />
      </Routes> */}
    </>
  );
}

export default App;
