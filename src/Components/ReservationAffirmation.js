import React from 'react';
import { useLocation } from 'react-router-dom';

const ReservationAffirmation = () => {
  const location = useLocation();
  const { date, time, guests, occasion, firstName, lastName, phone, mail } = location.state || {};

  return (
    <div>
      <h2>Reservation Confirmation</h2>
      <p>Name: {firstName + " " + lastName}</p>
      <p>Phone: {phone}</p>
      <p>Mail: {mail}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of Guests: {guests}</p>
      <p>Occasion: {occasion}</p>
    </div>
  );
};

export default ReservationAffirmation;
