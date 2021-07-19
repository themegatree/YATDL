import { render, screen } from '@testing-library/react';
import App from './App';

test('Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yet Another To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

test('Input Field', function(){
  render(<App />)
  const inputField = screen.getByTestId("Input-Field")
  expect(inputField).toBeInTheDocument()
  expect(inputField).toHaveAttribute("type", "text")
})
