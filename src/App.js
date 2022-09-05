import React from "react";
import "./styles.css";
import list from "../public/list.png";

const data = [
  {
    id: 0,
    name: "Set sports",
    sports: [
      { id: 0, name: "Tennis", category: 0 },
      { id: 1, name: "Squash", category: 0 }
    ]
  },
  {
    id: 1,
    name: "Competition sports",
    sports: [
      { id: 2, name: "Golf", category: 1 },
      { id: 3, name: "Formula 1", category: 1 }
    ]
  },
  {
    id: 2,
    name: "Other",
    sports: [
      { id: 4, name: "Soccer", category: 2 },
      { id: 5, name: "Hockey", category: 2 }
    ]
  }
];

const listOfItems = data.map((item) => (
  <ul>
    <li key={item.name}>
      {item.name}
      {item.sports.map((sport) => (
        <ul>
          <li key={sport.name}>{sport.name}</li>
        </ul>
      ))}
    </li>
  </ul>
));

export default function App() {
  return (
    <div className="App">
      <h1>TEST 4 - React (part 1)</h1>

      <div>
        Create a list like this one using the data object declared above
      </div>

      <div>
        <img src={list} width="250px" alt="list" />
      </div>

      <div>{listOfItems}</div>
    </div>
  );
}
