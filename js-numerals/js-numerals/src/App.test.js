import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

it('renders corectly', () => {
  const {queryByTestId} = render(<App/>)
  expect(queryByTestId("numeric-input")).toBeTruthy();
  expect(queryByTestId("submit-button")).toBeTruthy();
});

it("can solve 0",() =>{
  const {queryByTestId} = render(<App/>)
  const soluton = queryByTestId("solution");
  const numInput = queryByTestId("numeric-input");
  const submitButton = queryByTestId("submit-button");
  fireEvent.change(numInput, {target: {value: "0"}});
  fireEvent.click(submitButton);
  expect(soluton.textContent).toEqual("zero");
})

it("can solve 11",() =>{
  const {queryByTestId} = render(<App/>)
  const soluton = queryByTestId("solution");
  const numInput = queryByTestId("numeric-input");
  const submitButton = queryByTestId("submit-button");
  fireEvent.change(numInput, {target: {value: "11"}});
  fireEvent.click(submitButton);
  expect(soluton.textContent).toEqual("eleven");
})

it("can solve 19",() =>{
  const {queryByTestId} = render(<App/>)
  const soluton = queryByTestId("solution");
  const numInput = queryByTestId("numeric-input");
  const submitButton = queryByTestId("submit-button");
  fireEvent.change(numInput, {target: {value: "19"}});
  fireEvent.click(submitButton);
  expect(soluton.textContent).toEqual("nineteen");
})