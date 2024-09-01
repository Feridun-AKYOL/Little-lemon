import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      dispatch({ type: 'UPDATE_TIMES', date });
    }
  }, [date, dispatch]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('date', date);
    formData.append('time', time);
    formData.append('guests', guests);
    formData.append('occasion', occasion);

    const success = submitAPI(formData);
    if (success) {
      navigate('/affirmation', {
        state: { date, time, guests, occasion }
      });
    } else {
      alert('The selected time slot is already booked. Please choose a different time.');
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        <option>Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
