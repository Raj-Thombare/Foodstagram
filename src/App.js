import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  "🍕": "Pizza",
  "🍔": "Hamburger",
  "🍩": "Doughnut",
  "🍫": " Chocolate Bar",
  "🍭": "Lollipop"
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
      <h1 style={{ color: "orangered" }}>Welcome to Foodstagram</h1>
      <input onChange={userInputHandler} />
      <h3 style={{ color: "green" }}>{foodMeaning}</h3>
      <h4 style={{ color: "grey" }}>Food We have </h4>
      <ul>
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
