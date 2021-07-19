import { render, screen } from '@testing-library/react';
import App from './App';

test('Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yet Another To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

test('Input Field', function(){
  render(<App />)
  
})
