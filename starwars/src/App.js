import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import StarWarsCard from "./components/StarWarsCard"
import "./components/StarWars.css"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setCharacterData(response.data.results);
      })
      .catch(error => {
        console.log("Data not found", error);
      });
    }, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characterData.map(item => {
        return <StarWarsCard character={item} />;
      })}
      
      

      
    </div>
)}


export default App;
