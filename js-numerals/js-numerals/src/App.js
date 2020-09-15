import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App() {
  const [solution, setSolution] = useState("");
  const [numInput, setNumInput] = useState(0);

  const handleInputNumberChange = (e) => {
    setNumInput(e.target.value);
  }

  const handleSubmit = () => {
    var numbersFromZeroToNineTeen = [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
      "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    setSolution(numbersFromZeroToNineTeen[numInput]);
  }
  return (
    <div className="App">
      <input data-testid="numeric-input" id="number" type="number" onChange={handleInputNumberChange}></input>
      <Button data-testid="submit-button" type="primary" onClick={handleSubmit}>Convert to english text</Button>
      <br/>
      <b>in english</b><div data-testid="solution">{solution}</div>
    </div>

  );
}

export default App;
