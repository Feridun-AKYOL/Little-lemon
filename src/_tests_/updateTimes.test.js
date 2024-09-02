import { updateTimes } from '../Components/Main';
import { fetchAPI } from '../api';

jest.mock('../api'); // Mock the fetchAPI function

describe('updateTimes', () => {
  it('should update the times based on the selected date', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes); // Mock fetchAPI to return a non-empty array

    const initialState = [];
    const action = { type: 'UPDATE_TIMES', date: '2023-09-01' };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(mockTimes); // Expect the new state to match the mocked times
  });

  it('should return the initial state for an unknown action', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState); // Expect the state to remain unchanged
  });
});
