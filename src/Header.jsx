import React from "react";
import "./assets/css/index.css";
import { useState, useEffect } from "react";
import BackgroundImage from "./assets/image/Bitmap.jpg";
import ListSection from "./ListSection";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); 

  // Add List
  function AddData() {
    if (inputValue.trim() !== "") {
      setData([...data, inputValue]);
      setInputValue("");
    }
  }
  // Input value
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      AddData();
    }
  }

  useEffect(() => {
    if (inputValue === undefined) {
      setInputValue("");
    }
    if (data.length > 0) {
      document.querySelector(".list-item1").style.display = "block";
    } else {
      document.querySelector(".list-item1").style.display = "none";
    }
  }, [inputValue, data]);


  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div className="header-container">
        <div className="lightBackground">
          <div className="toDo-title">
            <p className="todo-text">TO DO</p>
            <i className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}  onClick={toggleDarkMode}></i>
          </div>
        </div>


        <div className="header-input--div">
          <input type="checkbox" className="todo-checkbox active-checkbox" />
          <input
            type="text"
            placeholder="Create a new todo…"
            className="header-input"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
      <ListSection data={data} setData={setData} />
    </>
  );
}

export default Header;
