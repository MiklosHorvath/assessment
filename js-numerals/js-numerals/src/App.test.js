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

it("can solve 1000",() =>{
  checkIfCanSolveNumber("1000", "one thousand");
})

it("can solve 1001",() =>{
  checkIfCanSolveNumber("1001", "one thousand and one");
})

it("can solve 1099",() =>{
  checkIfCanSolveNumber("1099", "one thousand and ninety-nine");
})

it("can solve 1999",() =>{
  checkIfCanSolveNumber("1999", "nineteen hundred and ninety-nine");
})

it("can solve 2001",() =>{
  checkIfCanSolveNumber("2001", "two thousand and one");
})

it("can solve 2099",() =>{
  checkIfCanSolveNumber("2099", "two thousand and ninety-nine");
})

it("can solve 17999",() =>{
  checkIfCanSolveNumber("17999", "seventeen thousand nine hundred and ninety-nine");
})

it("can solve 19999",() =>{
  checkIfCanSolveNumber("19999", "nineteen thousand nine hundred and ninety-nine");
})

it("can solve 20000",() =>{
  checkIfCanSolveNumber("20000", "twenty thousand");
})

it("can solve 20142",() =>{
  checkIfCanSolveNumber("20142", "twenty thousand one hundred and forty-two");
})

it("can solve 26142",() =>{
  checkIfCanSolveNumber("26142", "twenty-six thousand one hundred and forty-two");
})

it("can solve 999999",() =>{
  checkIfCanSolveNumber("999999", "nine hundred and ninety-nine thousand nine hundred and ninety-nine");
})