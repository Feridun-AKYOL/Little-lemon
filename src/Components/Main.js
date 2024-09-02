// Main.js
import React, { useReducer } from 'react';
import BookingPage from './BookingPage';
import { fetchAPI } from '../api';

const initializeTimes = (initialDate) => {
  // Initialize available times based on today's date or an initial date
  return fetchAPI(initialDate || new Date());
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date)); // Fetch available times based on the selected date
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], () => initializeTimes(new Date())); // Manage state with useReducer

  return (
    <div>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;
