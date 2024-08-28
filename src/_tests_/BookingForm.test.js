// src/_tests_/BookingForm.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('BookingForm Component', () => {
  const availableTimes = ['17:00', '18:00', '19:00']; // Mock available times
  const dispatch = jest.fn(); // Mock dispatch function
  const navigate = jest.fn(); // Mock navigate function

  beforeEach(() => {
    useNavigate.mockReturnValue(navigate); // Mock the navigate function
  });

  test('renders booking form fields', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );

    // Check if form fields are rendered
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Make Your reservation/i)).toBeInTheDocument();
  });

  test('calls dispatch on date change', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );

    // Simulate date change
    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2024-08-30' } });

    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', date: '2024-08-30' });
  });

  test('navigates to affirmation page on form submission', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </MemoryRouter>
    );

    // Simulate form submission
    const submitButton = screen.getByText(/Make Your reservation/i);
    fireEvent.click(submitButton);

    expect(navigate).toHaveBeenCalledWith('/affirmation', {
      state: { date: '', time: '', guests: 1, occasion: '' }, // Make sure initial state is submitted
    });
  });
});
