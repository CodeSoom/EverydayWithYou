const initialState = {
  restaurants: [], // JSON에서 받아온 최초의 데이터
  situationRestaurantsData: [], // 상황별로 솔팅해서 저장된 레스토랑
  restaurantsData: [], // 판단해서 저장된 레스토랑

  categoryRestaurantsData: [], // 음식 종류별로 솔팅해서 저장된 레스토랑
  placeRestaurantsData: [], // 장소 종류별로 솔팅해서 저장된 레스토랑
  filteredRestaurantsData: [], // 정상적으로 솔팅된 레스토랑 저장

  categoryColor: '',
  placeColor: '',
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
    const {
      restaurantsData, selectedCategory,
      filteredRestaurantsData,
      placeRestaurantsData,
      categoryRestaurantsData,
    } = state;

    if (selectedCategory === categoryValue && // 음식 똑같은거 중복선택
      filteredRestaurantsData.length === categoryRestaurantsData.length) {
      return {
        ...state,
        categoryRestaurantsData: [],
        filteredRestaurantsData: placeRestaurantsData,
        selectedCategory: categoryValue,
        categoryColor: '',
        alert: '',
      }
    } else if (selectedCategory !== categoryValue &&
      filteredRestaurantsByCategory.length === 0) { // 선택한게 빈배열일때
      return {
        ...state,
        categoryRestaurantsData: restaurantsData.filter(restaurant => restaurant.category.includes(categoryValue)), // 원래데이터
        filteredRestaurantsData: restaurantsData.filter(restaurant => restaurant.category.includes(categoryValue)),
        placeRestaurantsData: [],
        categoryColor: 'select', // 색있음
        selectedCategory: categoryValue, // 선택한 키워드 줌
        selectedPlace: '',
        alert: '가고 싶으신 곳을 다시 선택해주세요 ! 😥',
      }
    } else { // 위 해당사항이 없을때
      return {
        ...state,
        categoryRestaurantsData: filteredRestaurantsByCategory,
        filteredRestaurantsData: filteredRestaurantsByCategory,
        categoryColor: 'select',
        selectedCategory: categoryValue,
        alert: '',
      }
    }
  },

  // 1. 장소종류별 솔팅 => 음식 > 장소로 필터된 restaurants로 레스토랑 업데이트
  filterRestaurantsByPlace(state, { payload: { filteredRestaurantsByPlace, placeValue } }) {
    const {
      restaurantsData, selectedPlace,
      filteredRestaurantsData,
      categoryRestaurantsData,
      placeRestaurantsData,
    } = state;

    if (selectedPlace === placeValue && // 장소 똑같은거 중복선택
      filteredRestaurantsData.length === placeRestaurantsData.length) {
      return {
        ...state,
        placeRestaurantsData: [],
        filteredRestaurantsData: categoryRestaurantsData,
        selectedPlace: placeValue,
        placeColor: '',
        alert: '',
      }
    } else if (selectedPlace !== placeValue &&
      filteredRestaurantsByPlace.length === 0) { // 선택한게 빈배열일때
      return {
        ...state,
        placeRestaurantsData: restaurantsData.filter(restaurant => restaurant.place.includes(placeValue)), // 원래데이터
        filteredRestaurantsData: restaurantsData.filter(restaurant => restaurant.place.includes(placeValue)),
        categoryRestaurantsData: [],
        placeColor: 'select', // 색있음
        selectedPlace: placeValue, // 선택한 키워드 줌
        selectedCategory: '',
        alert: '드시고 싶은 것을 다시 선택해주세요 ! 😥',
      }
    } else { // 위 해당사항이 없을때
      return {
        ...state,
        placeRestaurantsData: filteredRestaurantsByPlace,
        filteredRestaurantsData: filteredRestaurantsByPlace,
        placeColor: 'select',
        selectedPlace: placeValue,
        alert: '',
      }
    }
  },



  // ToDo delete
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
}

function defaultReducer(state) {
  return state
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
