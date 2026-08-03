import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the todo input and add button', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/what needs to be done/i)).toBeInTheDocument();
  expect(screen.getByText(/add task/i)).toBeInTheDocument();
});
