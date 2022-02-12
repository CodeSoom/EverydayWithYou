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

  sortedRestaurantsByCondition: [],
  sortedRestaurantsByRegion: [],
  sortedRestaurantsByCategory: [],

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

  sortRestaurantsByCondition(state, { payload: { selectedTag } }) {
    const {restaurants} = state;
    console.log(restaurants);

    return {
      ...state,
      sortedRestaurantsByCondition: 
        restaurants.filter(condition => condition.condition === selectedTag),
    }
  },

  sortRestaurantsByRegion(state, { payload: { selectedTag } }) {
    const {sortedRestaurantsByCondition} = state;
    console.log(sortedRestaurantsByCondition);

    return {
      ...state,
      sortedRestaurantsByRegion: 
      sortedRestaurantsByCondition.filter(region => region.region === selectedTag),
    }
  },

  sortRestaurantsByCategory(state, { payload: { selectedTag } }) {
    const {sortedRestaurantsByRegion} = state;
    console.log(sortedRestaurantsByRegion);
  
    return {
      ...state,
      sortedRestaurantsByCategory: 
        sortedRestaurantsByRegion.filter(category => category.category === selectedTag),
    }
  }
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
