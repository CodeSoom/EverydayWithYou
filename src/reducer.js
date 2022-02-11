const initialState = {
  color: '',
  newId: 100,

  restaurant: {
    id: '',
    name: '',
  },
  
  selectedCondition: null, 
  selectedRegion: null, 
  selectedCategory: null, 

  sortedRestaurants: [],

  restaurants: [],
};

const reducers = {
  setRestaurantName(state, { payload: { value } }) {
    const {newId} = state;
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

  selectConditionTag(state, { payload: { selectedId } }) {
    const {restaurants} = state;

    return {
      ...state,
      selectedCondition: {
        ...restaurants.find(condition => condition.id === selectedId),
        color: "blue",
      },
    }
  },

  selectRegionTag(state, { payload: { selectedId } }) {
    const {restaurants} = state;

    return {
      ...state,
      selectedRegion: {
        ...restaurants.find(region => region.id === selectedId),
        color: "blue",
      },
    }
  },

  selectCategoryTag(state, { payload: { selectedId } }) {
    const {restaurants} = state;

    return {
      ...state,
      selectedCategory: {
        ...restaurants.find(category => category.id === selectedId),
        color: "blue",
      },
    }
  },

  sortByCondition(state, { payload: { selectedName } }) {
    const {restaurants} = state;

    return {
      ...state,
      sortedRestaurants: [
        restaurants.filter(condition => condition.condition === selectedName)
      ],
    }
  },

  sortByRegion(state, { payload: { selectedName } }) {
    const {restaurants} = state;

    return {
      ...state,
      sortedRestaurants: [
        restaurants.filter(region => region.region === selectedName)
      ],
    }
  },

  sortByCategory(state, { payload: { selectedName } }) {
    const {restaurants} = state;

    return {
      ...state,
      sortedRestaurants: [
        restaurants.filter(category => category.category === selectedName)
      ],
    }
  },
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
