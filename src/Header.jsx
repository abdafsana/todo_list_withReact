import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import BackgroundImage from "./assets/image/Bitmap.jpg";
import ListSection from "./ListSection";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  // Add List
  function AddData() {
    if (!inputValue == "") {
      setData([...data, inputValue]);
      setInputValue("");
    }
  }
  // Input value
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      AddData();
    }
  };

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

  return (
    <>
      <div className="header-container">
        <div className="lightBackground">
          <img src={BackgroundImage} alt="light mood background image" />
          <div className="toDo-title">
            <p className="todo-text">TO DO</p>
            <i className="fa-solid fa-moon"></i>
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
