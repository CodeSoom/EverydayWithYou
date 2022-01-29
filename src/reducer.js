import {
  conditions,
  regions,
  categories,
} from './data/hashTags';

const initialState = {
  restaurant: {
    name: '',
  },
  conditions,
  regions,
  categories,
};

const reducers = {
  setRestaurantName(state, { payload: { value } }) {
    return {
      ...state,
      restaurant: {
        name: value,
      },
    }
  },

  selectConditionTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      conditions: conditions.find(condition =>
        condition.id === selectedId),
    }
  },
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
