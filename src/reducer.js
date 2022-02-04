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
  newCategories: [],
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

  setCategories(state) {
    const { selectedCategory, newCategories } = state;
    const set = new Set(newCategories);
    return {
      ...state,
      newCategories: [...set.add(selectedCategory)],
    }
  },

  selectConditionTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedCondition: conditions.find(condition => condition.id === selectedId),
    }
  },

  selectRegionTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedRegion: regions.find(region => region.id === selectedId),
    }
  },

  selectCategoryTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedCategory: categories.find(category => category.id === selectedId),
    }
  },
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
