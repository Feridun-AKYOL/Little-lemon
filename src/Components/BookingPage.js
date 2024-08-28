import React from 'react';
import BookingForm from './BookingForm';
import '../Booking.css';

const BookingPage = ({ setFormData }) => {
  return (
    <div className='booking'>
      <div className='form-instruction'>
        <p>Fill out the form below to make a reservation.</p>
      </div>
      {/* Pass the setFormData function to BookingForm */}
      <BookingForm onFormSubmit={setFormData} />

      <footer>
        <p>Thank you for choosing us!</p>
      </footer>
    </div>
  );
};

export default BookingPage;
