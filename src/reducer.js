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
  selectedCondition: null, // 활용안됨
  selectedRegion: null, // 활용안됨
  selectedCategory: null, // 활용안됨
  newCondtions: [],
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

  setConditions(state, { payload: { conditionsArr } }) {
    return {
      ...state,
      newConditions: conditionsArr,
    }
  },

  setRegions(state, { payload: { regionsArr } }) {
    return {
      ...state,
      newRegions: regionsArr,
    }
  },

  setCategories(state, { payload: { categoriesArr } }) {
    return {
      ...state,
      newCategories: categoriesArr,
    }
  },

  // 보수가 필요하다!!
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
