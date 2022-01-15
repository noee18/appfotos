import { render, screen } from '@testing-library/react';
import App from './App';

//React Codigo renderiza lo que vendrá en la APP
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
