import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation menu', () => {
  render(<App />);
  const homeLink = screen.getByText(/首页/i);
  const teachingLink = screen.getByText(/教学/i);
  const performancesLink = screen.getByText(/演出/i);
  const aboutLink = screen.getByText(/关于/i);
  const contactLink = screen.getByText(/联系/i);

  expect(homeLink).toBeInTheDocument();
  expect(teachingLink).toBeInTheDocument();
  expect(performancesLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
