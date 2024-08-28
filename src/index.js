import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
// import BookingPage from './Components/BookingPage';
import Main from './Components/Main';
import ReservationAffirmation from './Components/ReservationAffirmation';
import ErrorPage from './Components/error-page';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const [formData, setFormData] = useState({}); // State to hold form data

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/booking",
      element: <Main setFormData={setFormData} /> // Pass setFormData to BookingPage
    },
    {
      path: "/affirmation",
      element: <ReservationAffirmation formData={formData} /> // Pass formData to ReservationAffirmation
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
