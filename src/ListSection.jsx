import React, { useState } from "react";
import "./assets/css/index.css";

function ListSection({ data, setData }) {
  const [isCheckedList, setIsCheckedList] = useState([]);

  function toggleCompletion(index) {
    const updatedList = [...isCheckedList];
    if (updatedList.includes(index)) {
      updatedList.splice(updatedList.indexOf(index), 1);
    } else {
      updatedList.push(index);
    }
    setIsCheckedList(updatedList);
  }

  // rome list item
  function removeData(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  // {} items left
  function countActiveItems() {
    return data.filter(
      (item, index) => !isCheckedList.includes(index) && !item.completed
    ).length;
  }

  // Clear Completed
  function handleClearCompleted() {
    const newData = data.filter(
      (item, index) => !isCheckedList.includes(index) || item.completed
    );
    setData(newData);
    setIsCheckedList([]);
  }

  const [filter, setFilter] = useState(true);
  // Filter item
  const filteredData =data.filter((item,index) => {
    // setFilter(data);
    if (filter === "All") {
      return data;
    }
    if (filter === "Active") {
      return !isCheckedList.includes(index) && !item.checked;
    }
    if (filter === "Completed") {
      return isCheckedList.includes(index) || item.checked;
    }
    return true;
  });

  return (
    <div className="list-container">
      <ul className="lists">
        {filteredData?.map((item, index) => (
          <li className="list-item" key={index}>
            <div className="list-input--div">
              <input
                type="checkbox"
                className="todo-checkbox active-checkbox"
                checked={isCheckedList.includes(index)}
                onChange={() => toggleCompletion(index)}
              />
              <p
                className={
                  isCheckedList.includes(index) || item.completed
                    ? "text completed"
                    : "text"
                }
              >
                {item}
              </p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => removeData(index)}
              ></i>
            </div>
          </li>
        ))}
        <li className="list-item1">
          <ul className="list-footer">
            <li className="list-footer--item">
              <p>{countActiveItems()} items left</p>
            </li>
            <li className="list-footer--item">
              <ul className="mini-footer--list">
                <li className="mini-footer--item">
                  <p onClick={() => setFilter("All")}>All</p>
                </li>
                <li className="mini-footer--item">
                  <p onClick={() => setFilter("Active")}>Active</p>
                </li>
                <li className="mini-footer--item">
                  <p onClick={() => setFilter("Completed")}>Completed</p>
                </li>
              </ul>
            </li>
            <li className="list-footer--item" onClick={handleClearCompleted}>
              <p className="list-footer--item__p">Clear Completed</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ListSection;
