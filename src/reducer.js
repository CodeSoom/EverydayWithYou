const initialState = {
  restaurant: {
    name: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurantName') {
    const { value } = action.payload;
    return {
      ...state,
      restaurant: {
        name: value,
      },
    }
  } return state;
}
