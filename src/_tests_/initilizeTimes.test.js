import { initializeTimes } from '../Components/Main';
import { fetchAPI } from '../api';

jest.mock('../api'); // Mock the fetchAPI function

describe('initializeTimes', () => {
  it('should return the available booking times from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes); // Mock fetchAPI to return a non-empty array

    const times = initializeTimes(new Date());
    expect(times).toEqual(mockTimes); // Expect the times to match the mocked return value
  });
});
