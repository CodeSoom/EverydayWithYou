const initialState = {
  newId: 100,
  color: 'blue',

  restaurant: {
    id: '',
    name: '',
  },

  selectedSituation: null,
  selectedPlace: null,
  selectedCategory: null,

  sortedRestaurantsBySituation: [],
  sortedRestaurantsByPlace: [],
  sortedRestaurantsByCategory: [],

  restaurants: [],
};

const reducers = {
  setRestaurantName(state, { payload: { value } }) {
    const { newId } = state;
    return {
      ...state,
      newId: newId + 1,
      restaurant: {
        id: newId,
        name: value,
      },
    }
  },

  setRestaurants(state, { payload: { restaurantsData } }) {
    return {
      ...state,
      restaurants: restaurantsData,
    }
  },

  selectSituationTag(state, { payload: { selectedId } }) {
    const { restaurants, color } = state;

    return {
      ...state,
      selectedSituation: {
        ...restaurants.find(situation => situation.id === selectedId),
        color,
      },
    }
  },

  selectPlaceTag(state, { payload: { selectedId } }) {
    const { restaurants, color } = state;

    return {
      ...state,
      selectedPlace: {
        ...restaurants.find(place => place.id === selectedId),
        color,
      },
    }
  },

  selectCategoryTag(state, { payload: { selectedId } }) {
    const { restaurants, color } = state;

    return {
      ...state,
      selectedCategory: {
        ...restaurants.find(category => category.id === selectedId),
        color,
      },
    }
  },

  sortRestaurantsBySituation(state, { payload: { selectedTag } }) {
    const { restaurants } = state;

    return {
      ...state,
      sortedRestaurantsBySituation:
        restaurants.filter(situation => situation.situation === selectedTag),
    }
  },

  sortRestaurantsByPlace(state, { payload: { selectedTag } }) {
    const { sortedRestaurantsBySituation } = state;

    return {
      ...state,
      sortedRestaurantsByPlace:
      sortedRestaurantsBySituation.filter(place => place.place === selectedTag),
    }
  },

  sortRestaurantsByCategory(state, { payload: { selectedTag } }) {
    const { sortedRestaurantsByPlace } = state;

    return {
      ...state,
      sortedRestaurantsByCategory:
        sortedRestaurantsByPlace.filter(category => category.category === selectedTag),
    }
  },
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
