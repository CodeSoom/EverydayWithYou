const initialState = {
  color: '',
  sortNumber: '',
  value: '',
  alter: '',
  selectedCategory: '',
  selectedPlace: '',

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

  restaurants: [], // JSON에서 받아온 최초의 데이터
  situationRestaurantsData: [], // 상황별로 솔팅해서 저장된 레스토랑
  restaurantsData: [], // 판단해서 저장된 레스토랑
  categoryRestaurantsData: [], // 음식또는 장소 종류별로 솔팅해서 저장된 레스토랑
  placeRestaurantsData: [], // 음식또는 장소 종류별로 솔팅해서 저장된 레스토랑
  filteredRestaurantsData1: [],
  filteredRestaurantsData2: [],
};

const reducers = {
  // SituationSelectPage: 레스토랑 JSON데이터 셋!
  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    }
  },

  // 1. 상황별 솔팅 => 상황별 숫자로 필터된 restaurants로 레스토랑 업데이트
  filterRestaurantsBySituation(state, { payload: { filteredRestaurantsBySituation, sortNumber } }) {
    const { situationRestaurantsData } = state; // 상황별로 솔팅해서 저장된 레스토랑 불러옴

    if (filteredRestaurantsBySituation.length == situationRestaurantsData.length) {
      return {
        ...state,
        situationRestaurantsData: [],
        color: '',
        sortNumber: '',
      }
    } else {
      return {
        ...state,
        situationRestaurantsData: filteredRestaurantsBySituation,
        color: 'select',
        sortNumber,
      }
    }
  },

  // 2. 상황별 솔팅 => 필터링된 레스토랑 셋!
  setSituationRestaurants(state, { payload: { restaurantsData } }) {
    return {
      ...state,
      restaurantsData,
    }
  },

  // 1. 음식종류별 솔팅 => 장소 > 음식으로 필터된 restaurants로 레스토랑 업데이트
  filterRestaurantsByCategory(state, { payload: { filteredRestaurantsByCategory, categoryValue } }) {
    const { categoryRestaurantsData, selectedCategory } = state;
    // 기존에 저장된 것들

    if (categoryRestaurantsData.length === filteredRestaurantsByCategory.length &&
      selectedCategory === categoryValue // 똑같은거 중복선택
    ) {
      return {
        ...state,
        categoryRestaurantsData: [], // 원래데이터
        color: '', // 색없어짐
        selectedPlace: '',
        alert: '',
      }
    } else if (filteredRestaurantsByCategory.length === 0) { // 선택한게 빈배열일때
      return {
        ...state,
        categoryRestaurantsData, // 원래데이터
        color: 'select', // 색있음
        selectedCategory: categoryValue, // 선택한 키워드 줌
        alert: alert('결과가 없습니다!'),
      }
    } else { // 위 해당사항이 없을때
      return {
        ...state,
        filteredRestaurantsData1: filteredRestaurantsByCategory,
        categoryRestaurantsData,
        color: 'select',
        selectedCategory: categoryValue,
      }
    }
  },

  // 1. 장소종류별 솔팅 => 음식 > 장소로 필터된 restaurants로 레스토랑 업데이트
  filterRestaurantsByPlace(state, { payload: { filteredRestaurantsByPlace, placeValue } }) {
    const { placeRestaurantsData, selectedPlace } = state;

    if (placeRestaurantsData.length === filteredRestaurantsByPlace.length &&
      selectedPlace === placeValue // 똑같은거 중복선택
    ) {
      return {
        ...state,
        placeRestaurantsData: [], // 원래데이터
        color: '', // 색없어짐
        selectedCategory: '',
        alert: '',
      }
    } else if (filteredRestaurantsByPlace.length === 0) { // 선택한게 빈배열일때
      return {
        ...state,
        placeRestaurantsData, // 원래데이터
        color: 'select', // 색있음
        selectedPlace: placeValue, // 선택한 키워드 줌
        alert: alert('결과가 없습니다!'),
      }
    } else { // 위 해당사항이 없을때
      return {
        ...state,
        filteredRestaurantsData2: filteredRestaurantsByPlace, // filteredRestaurantsData는 업데이트 될 수 있다.
        placeRestaurantsData,
        color: 'select',
        selectedPlace: placeValue,
      }
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

  setCategoryFilter(state, { payload: { selectedTag } }) {
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
