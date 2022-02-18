const initialState = {
  color: '',
  sortNumber: '',

  newId: 100,
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
  newRestaurants: [],
};

const reducers = {
  // 레스토랑 JSON데이터 셋!
  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    }
  },

  // 필터된 restaurants로 레스토랑 업데이트
  updateRestaurants(state, { payload: { filteredRestaurants, sortNumber } }) {
    const { newRestaurants } = state;
    if (filteredRestaurants.length == newRestaurants.length) {
      return {
        ...state,
        newRestaurants: [],
        color: '',
        sortNumber: '',
      }
    } else {
      return {
        ...state,
        newRestaurants: filteredRestaurants,
        color: 'select',
        sortNumber,
      }
    }
  },

  // 필터링된 레스토랑 셋!
  setNewRestaurants(state, { payload: { newRestaurants } }) {
    return {
      ...state,
      restaurants: newRestaurants,
    }
  },

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
