import { render, screen } from '@testing-library/react';
import App from './App';

//simple test is placed here
test('renders learn react link', () => {
  render(<App />);
  const AppContainer = screen.findByTestId("App-Container");
  expect(AppContainer).toBeTruthy();
});
