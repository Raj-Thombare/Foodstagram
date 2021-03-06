import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  "π": "Pizza",
  "π": "Hamburger",
  "π©": "Doughnut",
  "π«": "Chocolate Bar",
  "π": "Poultry Leg",
  "π₯": "Pancakes",
  "π­": "Hot Dog",
  "π": "French Fries",
  "π₯ͺ": "Sandwich",
  "π­": "Lollipop"
};

var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [foodMeaning, setFoodmeaning] = useState(
    "translation will appear here...."
  );

  function userInputHandler(event) {
    var userInput = event.target.value;
    var foodMeaning = foodDictionary[userInput];

    if (foodMeaning === undefined) {
      foodMeaning = "we do not have this in our database!";
    }
    setFoodmeaning(foodMeaning);
  }

  function onClickHandler(item) {
    var foodMeaning = foodDictionary[item];
    setFoodmeaning(foodMeaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#89fffd" }}>Foodstagramπ</h1>
      <input
        onChange={userInputHandler}
        placeholder="Search your emoji here..."
      />
      <h2 style={{ color: "#f85032" }}>{foodMeaning}</h2>
      <h4 style={{ color: "#4ecdc4" }}>Food We have </h4>
      <ul style={{ padding: "0px" }}>
        {foodWeKnow.map((item) => {
          return (
            <span
              key={item}
              style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
              onClick={() => onClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
