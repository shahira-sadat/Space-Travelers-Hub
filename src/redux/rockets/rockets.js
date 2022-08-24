const SET_RESERVATION = 'Space/Rocket/SET_RESERVATION';

const initialState = [];

export const setReservation = (payload) => ({
  type: SET_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESERVATION:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default reducer;
