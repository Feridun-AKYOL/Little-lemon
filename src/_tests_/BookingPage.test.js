import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import BookingPage from '../Components/BookingPage';

describe('BookingPage Component', () => {
  const availableTimes = ['17:00', '18:00', '19:00']; // Mock available times
  const dispatch = jest.fn(); // Mock dispatch function

  test('renders BookingForm component', () => {
    // Wrap BookingPage in MemoryRouter to provide routing context
    render(
      <MemoryRouter>
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );

    // Check if the form instruction text is rendered
    const instructionText = screen.getByText(/Fill out the form below to make a reservation./i);
    expect(instructionText).toBeInTheDocument();

    // Check if footer text is rendered
    const footerText = screen.getByText(/Thank you for choosing us!/i);
    expect(footerText).toBeInTheDocument();
  });
});
