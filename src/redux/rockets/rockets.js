import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const getRockets = createAsyncThunk(
  'space-travelers-hub/rockets/getRockets',
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  },

);

// Slice Reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    // Implement rocket booking
    reserveRocket: {
      reducer: (rockets, action) => rockets.map((el) => (
        el.rocketId === action.payload ? { ...el, rocketReserved: true } : el)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
    // Implement rocket booking cancelation
    cancelRocket: {
      reducer: (rockets, action) => rockets.map((rocket) => (
        // eslint-disable-next-line max-len
        rocket.rocketId === action.payload ? { ...rocket, rocketReserved: false } : rocket)),
      prepare: (rocketId) => ({
        payload: rocketId,
      }),
    },
  },

  extraReducers: {
    [getRockets.fulfilled]: (state, action) => action.payload.map((rocket) => ({
      rocketId: rocket.rocket_id,
      rocketName: rocket.rocket_name,
      rocketDesc: rocket.description,
      rocketImg: rocket.flickr_images[0],
    })),
  },
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
