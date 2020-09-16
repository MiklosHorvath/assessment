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

  const generateSolutionAtPlaceOne = (number) => {
    const numbersFromToNine = [
      "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ];
    const inputNumberAsString = number.toString();
    const lastNumber = parseInt(inputNumberAsString[number.length - 1]);
    return numbersFromToNine[lastNumber];
  }

  const generateSolutionAtPlaceTwo = (number) => {
    const roundNumbersBelowOneHundreed = [
      "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
    const inputNumberAsString = number.toString();
    const lastNumber = parseInt(inputNumberAsString[number.length - 2]);
    return roundNumbersBelowOneHundreed[lastNumber];
  }

  const generateDash = (number) => {
    if(!(number%10===0)){
      return "-";
    }
    else{
      return "";
    }      
  }

  const handleSubmit = () => {
    if(parseInt(numInput)<20){
      const numbersFromZeroToNineTeen = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
      setSolution(numbersFromZeroToNineTeen[numInput]);
    }
    else{
      setSolution(generateSolutionAtPlaceTwo(numInput)+generateDash(numInput)+generateSolutionAtPlaceOne(numInput));
    }
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
