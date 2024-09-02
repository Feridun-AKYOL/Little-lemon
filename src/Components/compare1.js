import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { submitAPI } from '../api';

// Validation schema using Yup
const formSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  phone: Yup.string().required('Phone Number is required'),
  mail: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  guests: Yup.number()
    .min(1, 'At least 1 guest is required')
    .max(10, 'Maximum 10 guests allowed')
    .required('Number of guests is required'),
  occasion: Yup.string().required('Occasion is required'),
});

const BookingForm = ({ initialAvailableTimes, dispatch }) => {
  const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes);
  const navigate = useNavigate();

  // Handle date changes and update available times
  // useEffect(() => {
  //   if (values.date) {
  //     dispatch({ type: 'UPDATE_TIMES', date: values.date });
  //   }
  // }, [values.date, dispatch]);

  return (
    <Formik
      initialValues={{
        mail: '',
        firstName: '',
        lastName: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
      }}
      validationSchema={formSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });
        try {
          const success = await submitAPI(formData);
          if (success) {
            // Update available times by removing the selected time
            setAvailableTimes((prevTimes) => prevTimes.filter(time => time !== values.time));

            // Navigate to affirmation page
            navigate('/affirmation', { state: { ...values } });
          } else {
            alert('The selected time slot is already booked. Please choose a different time.');
          }
        } catch (error) {
          console.error('Error during submission:', error);
          alert('An error occurred during submission. Please try again.');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, handleChange, handleBlur, values }) => (
        <Form id="form">
          <label htmlFor="firstName">First Name</label>
          <Field type="text" id="firstName" name="firstName" onChange={handleChange} />
          <ErrorMessage name="firstName" component="div" />

          <label htmlFor="lastName">Last Name</label>
          <Field type="text" id="lastName" name="lastName" onChange={handleChange} />
          <ErrorMessage name="lastName" component="div" />

          <label htmlFor="phone">Phone Number</label>
          <Field type="text" id="phone" name="phone" onChange={handleChange} />
          <ErrorMessage name="phone" component="div" />

          <label htmlFor="mail">E-mail</label>
          <Field type="email" id="mail" name="mail" onChange={handleChange} />
          <ErrorMessage name="mail" component="div" />

          <label htmlFor="res-date">Choose date</label>
          <Field type="date" id="res-date" name="date" onChange={handleChange} />
          <ErrorMessage name="date" component="div" />

          <label htmlFor="res-time">Choose time</label>
          <Field as="select" id="res-time" name="time" onChange={handleChange}>
            <option>Select a time</option>
            {availableTimes.map((availableTime) => (
              <option
                key={availableTime}
                value={availableTime}
                disabled={values.time === availableTime} // Disable if already selected
                style={{
                  backgroundColor: values.time === availableTime ? '#d3d3d3' : 'transparent', // Highlight if selected
                }}
              >
                {availableTime}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" />

          <label htmlFor="guests">Number of guests</label>
          <Field
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            onChange={handleChange}
          />
          <ErrorMessage name="guests" component="div" />

          <label htmlFor="occasion">Occasion</label>
          <Field component="select" id="occasion" name="occasion" onChange={handleChange}>
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage name="occasion" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Make Your Reservation
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
