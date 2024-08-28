import React from 'react';

const ReservationAffirmation = ({ formData }) => {
  return (
    <div>
      <h2>Reservation Confirmation</h2>
      {formData.date ? (
        <>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Number of Guests:</strong> {formData.guests}</p>
          <p><strong>Occasion:</strong> {formData.occasion}</p>
        </>
      ) : (
        <p>No reservation data available.</p>
      )}
    </div>
  );
};

export default ReservationAffirmation;
