import {
  conditions,
  regions,
  categories,
} from './data/hashTags';

const initialState = {
  restaurant: {
    id: '',
    name: '',
  },
  selectedCondition: null,
  selectedRegion: null,
  selectedCategory: null,
  newConditions: [],
  newRegions: [],
  newCategories: [],
  newId: 100,
  color: "",
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

  setConditions(state) {
    const { selectedCondition } = state;
    return {
      ...state,
      newConditions: [selectedCondition],
    }
  },

  setRegions(state) {
    const { selectedRegion } = state;
    return {
      ...state,
      newRegions: [selectedRegion],
    }
  },

  setCategories(state) {
    const { selectedCategory } = state;
    return {
      ...state,
      newCategories: [selectedCategory],
    }
  },

  selectConditionTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedCondition: {
        color: "blue",
        ...conditions.find(condition => condition.id === selectedId),
      },
    }
  },

  selectRegionTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedRegion: {
        color: "blue",
        ...regions.find(region => region.id === selectedId),
      },
    }
  },

  selectCategoryTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedCategory: {
        color: "blue",
        ...categories.find(category => category.id === selectedId),
      },
    }
  },

  addUniqueId(state, { payload: { uniqueCategoriesArr } }) {
    const { newId } = state;

    return {
      ...state,
      newId: newId + 1,
      newCategories: [{ id: newId, ...uniqueCategoriesArr }],
    }
  },
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
