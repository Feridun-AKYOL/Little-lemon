import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Correct import for Jest-DOM matchers
import Navbar from '../Components/Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('renders the logo and title', () => {
    // Check if logo image is present
    expect(screen.getByAltText('Little Lemon Logo')).toBeInTheDocument();

    // Check if the title is present
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    // Check if navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Reservations')).toBeInTheDocument();
    expect(screen.getByText('Order Online')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    // Check href attributes of navigation links
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Order Online')).toHaveAttribute('href', '/booking');
  });

  test('logo and title are visible', () => {
    // Check if logo image and title are visible
    expect(screen.getByAltText('Little Lemon Logo')).toBeVisible();
    expect(screen.getByText('Little Lemon')).toBeVisible();
  });
});
