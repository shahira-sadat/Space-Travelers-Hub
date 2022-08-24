import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiMissions = 'https://api.spacexdata.com/v3/rockets';

const FETCH_MISSIONS = 'space-travelers-hub/missions/FETCH_MISSIONS';
// const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async () => {
    const response = await axios.get(apiMissions);
    return response.data;
  },
);

const storeSlice = createSlice({
  name: 'space-travelers-hub/missions',
  initialState: [],
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => action.payload,
  },
});

export default storeSlice.reducer;
