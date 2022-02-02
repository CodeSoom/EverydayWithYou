import {
  conditions,
  regions,
  categories,
} from './data/hashTags';

const initialState = {
  restaurant: {
    name: '',
  },
  selectedConditions: [],
  selectedRegions: [],
  selectedCategories: [],
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
    const { selectedConditions } = state;
    selectedConditions.push(conditions.find(condition =>
      condition.id === selectedId));

    return {
      ...state,
    }
  },

  selectRegionTag(state, { payload: { selectedId } }) {
    const { selectedRegions } = state;
    selectedRegions.push(regions.find(region =>
      region.id === selectedId));

    return {
      ...state,
    }
  },

  selectCategoryTag(state, { payload: { selectedId } }) {
    const { selectedCategories } = state;
    selectedCategories.push(categories.find(category =>
      category.id === selectedId));

    return {
      ...state,
    }
  },
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
