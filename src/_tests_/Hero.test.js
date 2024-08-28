import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../Components/Hero';

// Test suite for the Reservation component
describe('Hero Component', () => {
  test('renders reservation section with correct text and image', () => {
    render(
      <MemoryRouter> {/* This allows us to test components that use react-router links */}
        <Hero />
      </MemoryRouter>
    );

    // Check if the heading and paragraphs are rendered
    expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
    expect(screen.getByText(/Chicago/i)).toBeInTheDocument();
    expect(screen.getByText(/We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i)).toBeInTheDocument();

    // Check if the image is rendered with the correct alt text
    const image = screen.getByAltText(/Little Lemon Specials/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('restauranfood.jpg'));

    // Check if the link to /booking is rendered
    const link = screen.getByText(/Reserve a Table/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/booking');
  });
});
