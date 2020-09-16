import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

it('renders corectly', () => {
  const {queryByTestId} = render(<App/>)
  expect(queryByTestId("numeric-input")).toBeTruthy();
  expect(queryByTestId("submit-button")).toBeTruthy();
});

const checkIfCanSolveNumber = (number, expectedSolution)=>{
  const {queryByTestId} = render(<App/>)
  const soluton = queryByTestId("solution");
  const numInput = queryByTestId("numeric-input");
  const submitButton = queryByTestId("submit-button");
  fireEvent.change(numInput, {target: {value: number}});
  fireEvent.click(submitButton);
  expect(soluton.textContent).toEqual(expectedSolution);
}

it("can solve 0",() =>{
  checkIfCanSolveNumber("0", "zero");
})

it("can solve 11",() =>{
  checkIfCanSolveNumber("11", "eleven");
})

it("can solve 19",() =>{
  checkIfCanSolveNumber("19", "nineteen");
})

it("can solve 20",() =>{
  checkIfCanSolveNumber("20", "twenty");
})

it("can solve 42",() =>{
  checkIfCanSolveNumber("42", "forty-two");
})

it("can solve 99",() =>{
  checkIfCanSolveNumber("99", "ninety-nine");
})

it("can solve 100",() =>{
  checkIfCanSolveNumber("100", "one hundred");
})

it("can solve 101",() =>{
  checkIfCanSolveNumber("101", "one hundred and one");
})

it("can solve 111",() =>{
  checkIfCanSolveNumber("111", "one hundred and eleven");
})

it("can solve 120",() =>{
  checkIfCanSolveNumber("120", "one hundred and twenty");
})

it("can solve 442",() =>{
  checkIfCanSolveNumber("442", "four hundred and forty-two");
})

it("can solve 999",() =>{
  checkIfCanSolveNumber("999", "nine hundred and ninety-nine");
})