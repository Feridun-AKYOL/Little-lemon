const bookingData = []; // In-memory booking data table

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate());

  for (let i = 17; i <= 23; i++) {
    let timeSlot1 = i + ':00';
    let timeSlot2 = i + ':30';

    const isBooked1 = bookingData.some(
      booking => booking.date === date.toISOString().split('T')[0] && booking.time === timeSlot1
    );
    const isBooked2 = bookingData.some(
      booking => booking.date === date.toISOString().split('T')[0] && booking.time === timeSlot2
    );

    if (!isBooked1 && random() < 0.5) {
      result.push(timeSlot1);
    }
    if (!isBooked2 && random() < 0.5) {
      result.push(timeSlot2);
    }
  }

  return result;
};

export const submitAPI = function(formData) {
  const booking = Object.fromEntries(formData.entries());

  // Check if the selected time and date is already booked
  const isAlreadyBooked = bookingData.some(
      existingBooking => 
          existingBooking.date === booking.date && 
          existingBooking.time === booking.time
  );

  if (isAlreadyBooked) {
      console.warn(`The selected time slot on ${booking.date} at ${booking.time} is already booked.`);
      return false; // Return false if the time slot is already booked
  }

  // If the time slot is available, add the booking to the bookingData array
  bookingData.push(booking);
  console.log('Booking successful:', booking);
  console.log('Current bookings:', bookingData); // Log current bookings for debugging

  return true; // Simulate a successful booking
};

