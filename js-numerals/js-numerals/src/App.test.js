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