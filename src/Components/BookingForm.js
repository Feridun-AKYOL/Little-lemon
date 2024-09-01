import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI,submitAPI } from '../api';

const BookingForm = ({availableTimes, dispatch}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      const dateObject = new Date(date); // Convert the selected date to a Date object
      const times = fetchAPI(dateObject); // Pass the Date object directly to fetchAPI
      dispatch({ type: 'UPDATE_TIMES', time: times });    }
  }, [date]);


  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('date', date);
    formData.append('time', time);
    // Redirect to the affirmation page with form data
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
    <form id='form' onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
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
