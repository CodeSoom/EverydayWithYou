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

  sortedConditions: [],
  sortedRegions: [],
  sortedCategories: [],

  conditions: [],
  regions: [],
  categories: [],
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

  setConditions(state, { payload: { conditionsArr } }) {
    return {
      ...state,
      conditions: conditionsArr,
    }
  },

  setRegions(state, { payload: { regionsArr } }) {
    return {
      ...state,
      regions: regionsArr,
    }
  },

  setCategories(state, { payload: { categoriesArr } }) {
    return {
      ...state,
      categories: categoriesArr,
    }
  },

  selectConditionTag(state, { payload: { selectedId } }) {
    const {conditions} = state;

    return {
      ...state,
      selectedCondition: {
        ...conditions.find(condition => condition.id === selectedId),
        color: "blue",
      },
    }
  },

  selectRegionTag(state, { payload: { selectedId } }) {
    const {regions} = state;

    return {
      ...state,
      selectedRegion: {
        ...regions.find(region => region.id === selectedId),
        color: "blue",
      },
    }
  },

  selectCategoryTag(state, { payload: { selectedId } }) {
    const {categories} = state;

    return {
      ...state,
      selectedCategory: {
        ...categories.find(category => category.id === selectedId),
        color: "blue",
      },
    }
  },

  sortByCondition(state, { payload: { selectedName } }) {
    const {conditions} = state;

    return {
      ...state,
      sortedConditions: [
        conditions.filter(condition => condition.condition === selectedName)
      ],
    }
  },

  sortByRegion(state, { payload: { selectedName } }) {
    const {regions} = state;

    return {
      ...state,
      sortedRegions: [
        regions.filter(region => region.region === selectedName)
      ],
    }
  },

  sortByCategory(state, { payload: { selectedName } }) {
    const {categories} = state;

    return {
      ...state,
      sortedCategories: [
        categories.filter(category => category.category === selectedName)
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
