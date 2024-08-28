import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Initial available times
};

const updateTimes = (state, action) => {
  // For now, just return the same available times regardless of the date.
  // You can later enhance this function to change available times based on the selected date.
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes(); // You can modify this logic later to update based on date
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes); // Manage state with useReducer

  return (
    <div>
      {/* Pass down availableTimes and dispatch to BookingPage */}
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;
