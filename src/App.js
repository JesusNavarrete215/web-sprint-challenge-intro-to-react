import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Characters from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chara, setChara] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setChara(res.data);
        //console.log(chara);chara[0].name the array has 6 objects
      })
      .catch((err) => console.log(err));
  }, []);

  // chara.map((jedi) => console.log(jedi.name));

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {chara.map((jedi) => (
        <Characters key={jedi.weight} actor={jedi} />
      ))}
    </div>
  );
};

export default App;
