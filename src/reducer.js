import {
  conditions,
  regions,
  categories,
} from './data/hashTags';

const initialState = {
  restaurant: {
    name: '',
  },
  selectedCondition: null,
  selectedRegion: null,
  selectedCategory: null,
  newConditions: [],
  newRegions: [],
  newCategories: [],
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

  // Todo 중복 selectedCategory 들어오는거 해결하기
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
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
