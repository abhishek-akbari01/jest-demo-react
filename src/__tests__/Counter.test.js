import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter/Counter';

test('renders counter with initial count', () => {
  render(<Counter />);
  const countElement = screen.getByText('Count: 0');
  expect(countElement).toBeInTheDocument();
});

test('increments counter when increment button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  const countElement = screen.getByText('Count: 1');
  expect(countElement).toBeInTheDocument();
});

test('decrements counter when decrement button is clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('Decrement');
  fireEvent.click(decrementButton);
  const countElement = screen.getByText('Count: -1');
  expect(countElement).toBeInTheDocument();
});