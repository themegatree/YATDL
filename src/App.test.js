import { render, screen } from '@testing-library/react';
import App from './App';
import Button from './Button';

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

test ('Button', function (){
  render (<App />)
  const Button = shallow((<Button onClick={mockCallBack}>Saves</Button>));
  expect(Button).toBeInTheDocument()

})
test ('link', function(){
  render(<App/>)
  const Link = screen.getByText(/Clear/i)
  expect(Link).toBeInTheDocument()
})

test ('')
