// ToDo delete
import {
  conditions,
  regions,
  categories,
} from './data/hashTags';

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

  getCondition: null, 
  getRegion: null,
  getCategory: null,

  newCondtions: [], // ToDo conditions로 이름 바꾸기
  newRegions: [],
  newCategories: [],
};

const reducers = {
  setRestaurantName(state, { payload: { value } }) {
    const {newId} = state;
    return {
      ...state,
      newId: newId + 1,
      restaurant: {
        id: newId,
        name: value, // 인풋값이 name으로 설정됨
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

  selectConditionTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedCondition: {
        ...conditions.find(condition => condition.id === selectedId),
        color: "blue",
      },
    }
  },

  selectRegionTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedRegion: {
        ...regions.find(region => region.id === selectedId),
        color: "blue",
      },
    }
  },

  selectCategoryTag(state, { payload: { selectedId } }) {
    return {
      ...state,
      selectedCategory: {
        ...categories.find(category => category.id === selectedId),
        color: "blue",
      },
    }
  },

  getConditionTag(state, { payload: { conditionObj } }) {
    return {
      ...state,
      getCondition: {
        ...conditionObj,
        color: "blue",
      },
    }
  },

  getRegionTag(state, { payload: { regionObj } }) {
    return {
      ...state,
      getRegion: {
        ...regionObj,
        color: "blue",
      },
    }
  },

  getCategoryTag(state, { payload: { categoryObj } }) {
    return {
      ...state,
      getCategory: {
        ...categoryObj,
        color: "blue",
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
