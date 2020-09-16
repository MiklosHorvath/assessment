import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App() {
  const [solution, setSolution] = useState("");
  const [numInput, setNumInput] = useState(0);

  const numbersFromToNine = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
  ];

  const hundreds = [
    "", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred",
    "six hundred", "seven hundred", "eight hundred", "nine hundred"
  ];

  const roundNumbersBelowOneHundreed = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  const numbersFromZeroToNineTeen = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  const handleInputNumberChange = (e) => {
    setNumInput(e.target.value);
  }

  const generateSolutionAtPlaceOne = (number) => {
    const inputNumberAsString = number.toString();
    const numAtPlace = parseInt(inputNumberAsString[inputNumberAsString.length - 1]);
    return numbersFromToNine[numAtPlace];
  }

  const generateSolutionAtPlaceTwo = (number) => {
    const inputNumberAsString = number.toString(); 
    const numAtPlace = parseInt(inputNumberAsString[inputNumberAsString.length - 2]);
    if(numAtPlace===0){
      return "";
    }
    return roundNumbersBelowOneHundreed[numAtPlace];
  }

  const generateSolutionAtPlaceThree = (number) => {
    const inputNumberAsString = number.toString();
    const numAtPlace = parseInt(inputNumberAsString[inputNumberAsString.length - 3]);
    let solution = hundreds[numAtPlace];
    if(!(number%100===0)){
      solution += " and "
    }
    return solution;
  }

  const generateDash = (number) => {
    if(!(number%10===0)){
      return "-";
    }
    else{
      return "";
    }      
  }

  const generateSolutionAtFirstTwoPlace = (number) => {
    if(number%100===0){
      return "";
    }
    const inputNumberAsString = number.toString();
    const numberOfLastTwoPlace = parseInt(inputNumberAsString.slice(-2));
    let solution = "";
    if(numberOfLastTwoPlace<20){
      solution = numbersFromZeroToNineTeen[numberOfLastTwoPlace];
    }
    else{
      solution = generateSolutionAtPlaceTwo(numberOfLastTwoPlace)
      +generateDash(numberOfLastTwoPlace)
      +generateSolutionAtPlaceOne(numberOfLastTwoPlace);
    }
    return solution;
  }

  const generateSolutionAtFirstThreePlace = (number) => {
    if(number==0){
      return "zero";
    }
    let solution = "";
    if(number>99){
      solution += generateSolutionAtPlaceThree(number);
    }
    solution += generateSolutionAtFirstTwoPlace(number);
    return solution;
  }

  const handleSubmit = () => {
    setSolution(generateSolutionAtFirstThreePlace(numInput));
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
