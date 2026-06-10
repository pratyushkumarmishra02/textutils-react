import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Darkmode");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState(null)

  const btnClr = {
    color:"white",
    backgroundColor:"red"
  }

  const removeCls = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");

  };

  const handleToggleMode = (cls) => {
    removeCls();
    document.body.classList.add("bg-" + cls);
    if(document.body.classList.contains("bg-primary")) {
      setBtnColor(btnClr);
    }else {
    setBtnColor({
      color: "white",
      backgroundColor: "#0d6efd",
    });
  }
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setText("Disable Darkmode");
      showAlert("Darkmode Enabled", "success");
      // document.title = "TextUtils - Darkmode Enabled";
      // setInterval(() =>{
      //   document.title="TextUtils is an amazing app"
      // },2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setText("Enable Darkmode");
      showAlert("Darkmode Disabled", "success");
      // document.title = "TextUtils - Darkmode Disabled";
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
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="Try TextUtils - word counter,character counter,reading time,lowercase to uppercase,uppercase to lowercase,copy text"
              mode={mode}
              showAlert={showAlert}
              btnColor={btnColor}
            />
          }
        />
        <Route
          path="/about"
          element={<div className="container">{<About mode={mode} />}</div>}
        />
      </Routes>
    </>
  );
}

export default App;
