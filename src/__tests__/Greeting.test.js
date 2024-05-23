import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting/Greeting';
import { act } from 'react';

test('renders greeting with name', () => {
  render(<Greeting name="World" />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});