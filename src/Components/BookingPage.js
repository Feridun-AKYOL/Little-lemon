import React from 'react';
import BookingForm from './BookingForm';
import '../Booking.css';

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <div className='booking'>
      <div className='form-instruction'>
        <p>Fill out the form below to make a reservation.</p>
      </div>
      {/* Pass down availableTimes and dispatch to BookingForm */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

      <footer>
        <p>Thank you for choosing us!</p>
      </footer>
    </div>
  );
};

export default BookingPage;
