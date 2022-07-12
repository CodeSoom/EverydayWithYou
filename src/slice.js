import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAfterRestaurants,
  fetchAfterCafes,
  fetchAfterBars,
  fetchRecommendCourse,
} from './services/api';

import {
  randomRestaurant,
  situationFilter,
  placeFilter,
  ageFilter,
  categoryFilter,
} from './utils';

import { loadItem } from './services/storage';

import uniqBy from 'lodash.uniqby';
import filter from 'lodash.filter';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    restaurants: [], // JSON에서 받아온 최초의 데이터
    situationRestaurantsData: [], // 상황별로 솔팅해서 저장된 레스토랑
    restaurantsData: [], // situationRestaurantsData가 공란일 경우 restaurants로 저장

    categoryRestaurantsData: [], // 음식 종류별로 솔팅해서 저장된 레스토랑
    placeRestaurantsData: [], // 장소 종류별로 솔팅해서 저장된 레스토랑
    filteredRestaurantsData: [], // 정상적으로 솔팅된 레스토랑 저장

    sortedNumber: '',

    selectedCategory: '',
    selectedPlace: '',
    categoryColor: '',
    placeColor: '',
    alter: '',

    // 지도 중심좌표 저장
    placePosition: {
      lat: 37.566826,
      lon: 126.9786567,
    },
    resultRestaurantPlaceInfo: [],

    // 애프터코스 저장
    afterRestaurants: [],
    afterCafes: [],
    afterBars: [],
    RecommenedCourse: [],

    searchField: {
      searchKeyword: '',
    },
    searchKeyword: '',
    moodRestaurantsData: {},
    randomSituationPlaceRestaurants: [],
    randomAgeCategoryRestaurants: [],

    callSideBarMenu: false,
  },
  reducers: {
    setSideBarMenu(state) {
      return {
        ...state,
        callSideBarMenu: true,
      }
    },

    removeSideBarMenu(state) {
      return {
        ...state,
        callSideBarMenu: false,
      }
    },

    // SituationSelectPage: 레스토랑 JSON데이터 셋!
    setRestaurants(state, { payload: restaurants }) {
      return {
        ...state,
        restaurants,
      }
    },

    // CustomPage: 최초 레스토랑 혹은 상황별로 솔팅된 레스토랑으로 업데이트
    setRestaurantsData(state, { payload: restaurantsData }) {
      return {
        ...state,
        restaurantsData,
      }
    },

    // SituationSelecPage: 2. 상황별 솔팅 => 필터링된 레스토랑 셋!
    setSituationRestaurants(state, { payload: situationRestaurantsData }) {
      return {
        ...state,
        situationRestaurantsData,
      }
    },

    // ToDo 화면에 구현하기 SearchPage: 분위기별 솔팅 => 필터링된 레스토랑 셋!
    setMoodRestaurants(state, { payload: { moodName, moodRestaurantsData } }) {
      return {
        ...state,
        moodRestaurantsData: {
          ...state.moodRestaurantsData,
          [moodName]: moodRestaurantsData,
        },
      }
    },

    // RestaurantPage: 검색결과 객체 셋
    setResultRestaurantPlaceInfo(state, { payload: resultRestaurantPlaceInfo }) {
      const { y, x } = resultRestaurantPlaceInfo;

      return {
        ...state,
        resultRestaurantPlaceInfo,
        placePosition: {
          lat: x,
          lon: y,
        },
      }
    },

    // RestaurantAfterContainer
    setAfterRestaurants(state, { payload: afterRestaurants }) {
      return {
        ...state,
        afterRestaurants,
      }
    },

    setAfterCafes(state, { payload: afterCafes }) {
      return {
        ...state,
        afterCafes,
      }
    },

    setAfterBars(state, { payload: afterBars }) {
      return {
        ...state,
        afterBars,
      }
    },

    setRecommendedCourse(state, { payload: recommenedCourse }) {
      return {
        ...state,
        recommenedCourse,
      }
    },

    // 검색결과 셋
    setSearchResultRestaurants(state, { payload: { searchKeyword, searchResultRestaurants } }) {
      return {
        ...state,
        searchResultRestaurants,
        searchKeyword,
        moodRestaurantsData: {},
      }
    },

    // 추천레스토랑 셋
    setRandomRecommendedRestaurants1(state, { payload: { filteredTwice, situation, place } }) {
      return {
        ...state,
        randomSituationPlaceRestaurants: [
          ...state.randomSituationPlaceRestaurants,
          ...filteredTwice,
        ],
        situation, place,
      }
    },

    setRandomRecommendedRestaurants2(state, { payload: { filteredTwice, age, category } }) {
      return {
        ...state,
        randomAgeCategoryRestaurants: [
          ...state.randomAgeCategoryRestaurants,
          ...filteredTwice,
        ],
        age, category,
      }
    },

    // SituationSelecPage: 1. 상황별 솔팅 => 숫자로 필터된 레스토랑으로 업데이트
    filterRestaurantsBySituation(state, { payload: { filteredRestaurantsBySituation, sortNumber } }) {
      const {
        situationRestaurantsData, sortedNumber,
      } = state;

      if (sortNumber == sortedNumber &&
        filteredRestaurantsBySituation.length == situationRestaurantsData.length) {
        return {
          ...state,
          situationRestaurantsData: [],
          sortedNumber: '',
        }
      } else {
        return {
          ...state,
          situationRestaurantsData: filteredRestaurantsBySituation,
          sortedNumber: sortNumber,
        }
      }
    },

    // 음식종류별 솔팅 => 장소 > 음식으로 필터된 레스토랑으로 업데이트
    filterRestaurantsByCategory(state, { payload: { filteredRestaurantsByCategory, categoryValue } }) {
      const {
        restaurantsData,
        categoryRestaurantsData, placeRestaurantsData,
        selectedCategory,
      } = state;

      if (
        selectedCategory === categoryValue && // 음식 똑같은거 중복선택
        filteredRestaurantsByCategory.length === categoryRestaurantsData.length
      ) {
        return {
          ...state,
          categoryRestaurantsData: [],
          filteredRestaurantsData: placeRestaurantsData,
          selectedCategory: categoryValue,
          categoryColor: 'select-button',
          alert: '',
        }
      } else if (
        selectedCategory !== categoryValue &&
        filteredRestaurantsByCategory.length === 0) { // 선택한게 빈배열일때
        return {
          ...state,
          categoryRestaurantsData: restaurantsData.filter(restaurant =>
            restaurant.category.includes(categoryValue)),
          filteredRestaurantsData: restaurantsData.filter(restaurant =>
            restaurant.category.includes(categoryValue)),
          placeRestaurantsData: [],
          selectedCategory: categoryValue,
          categoryColor: 'select-button-effect',
          selectedPlace: '',
          alert: '가고 싶으신 곳을 다시 선택해주세요 !',
        }
      } else { // 위 해당사항이 없을때
        return {
          ...state,
          categoryRestaurantsData: filteredRestaurantsByCategory,
          filteredRestaurantsData: filteredRestaurantsByCategory,
          selectedCategory: categoryValue,
          categoryColor: 'select-button-effect',
          alert: '',
        }
      }
    },

    // 장소종류별 솔팅 => 음식 > 장소로 필터된 레스토랑으로 업데이트
    filterRestaurantsByPlace(state, { payload: { filteredRestaurantsByPlace, placeValue } }) {
      const {
        restaurantsData,
        categoryRestaurantsData, placeRestaurantsData,
        selectedPlace,
      } = state;

      if (
        selectedPlace === placeValue && // 장소 똑같은거 중복선택
        filteredRestaurantsByPlace.length === placeRestaurantsData.length
      ) {
        return {
          ...state,
          placeRestaurantsData: [],
          filteredRestaurantsData: categoryRestaurantsData,
          selectedPlace: placeValue,
          placeColor: 'select-button',
          alert: '',
        }
      } else if (
        selectedPlace !== placeValue &&
        filteredRestaurantsByPlace.length === 0) { // 선택한게 빈배열일때
        return {
          ...state,
          placeRestaurantsData: restaurantsData.filter(restaurant =>
            restaurant.place.includes(placeValue)),
          filteredRestaurantsData: restaurantsData.filter(restaurant =>
            restaurant.place.includes(placeValue)),
          categoryRestaurantsData: [],
          selectedPlace: placeValue,
          placeColor: 'select-button-effect',
          selectedCategory: '',
          alert: '드시고 싶은 것을 다시 선택해주세요!',
        }
      } else { // 위 해당사항이 없을때
        return {
          ...state,
          placeRestaurantsData: filteredRestaurantsByPlace,
          filteredRestaurantsData: filteredRestaurantsByPlace,
          selectedPlace: placeValue,
          placeColor: 'select-button-effect',
          alert: '',
        }
      }
    },

    changeSearchField(state, { payload: { name, value } }) {
      return {
        ...state,
        searchField: {
          ...state.searchField,
          [name]: value,
        },
      }
    },
  },
});

export const {
  setSideBarMenu,
  removeSideBarMenu,
  setRestaurants,
  setRestaurantsData,
  setSituationRestaurants,
  setMoodRestaurants,
  setResultRestaurantPlaceInfo,
  setAfterRestaurants,
  setAfterCafes,
  setAfterBars,
  setRecommendedCourse,
  setSearchResultRestaurants,
  setRandomRecommendedRestaurants1,
  setRandomRecommendedRestaurants2,
  filterRestaurantsBySituation,
  filterRestaurantsByCategory,
  filterRestaurantsByPlace,
  changeSearchField,
} = actions;

// <--- Redux Thunk --->

// 상황별 필터
export function setSituationFilter(sortNumber) {
  return (dispatch, getState) => {
    const {
      restaurants,
    } = getState();

    function filter(restuarants, sortNumber) {
      if (sortNumber == 1) {
        const result = situationFilter(restaurants, '데이트');
        return result
      }
      if (sortNumber == 2) {
        const filter1 = situationFilter(restaurants, '썸');
        const filter2 = situationFilter(restaurants, '소개팅');
        const result = [...filter1, ...filter2];
        return result
      }
      if (sortNumber == 3) {
        const filter1 = situationFilter(restaurants, '생일');
        const filter2 = situationFilter(restaurants, '기념일');
        const filter3 = situationFilter(restaurants, '프로포즈');
        const result = [...filter1, ...filter2, ...filter3];
        return result
      } return restaurants
    }

    const filteredRestaurantsBySituation = filter(restaurants, sortNumber);

    // 필터된 restaurants로 레스토랑 업데이트
    dispatch(filterRestaurantsBySituation({
      filteredRestaurantsBySituation, sortNumber,
    }));
  };
}

// 음식별 필터
export function setCategoryFilter(categoryValue) {
  return (dispatch, getState) => {
    const {
      restaurantsData,
      placeRestaurantsData,
    } = getState();

    function filterFromBase(restaurantsData, categoryValue) {
      const filteredByCategory = categoryFilter(restaurantsData, categoryValue);
      const result = [...filteredByCategory];
      return result
    }

    function filterFromPlaceSorted(placeRestaurantsData, categoryValue) {
      const filteredByCategory = categoryFilter(placeRestaurantsData, categoryValue);
      const result = [...filteredByCategory];
      return result
    }

    function previously(
      restaurantsData, placeRestaurantsData, categoryValue,
    ) {
      if (placeRestaurantsData.length == 0) { // 기존에 장소기준으로 솔팅된게 없다면?
        return filterFromBase(restaurantsData, categoryValue)
      } else {
        return filterFromPlaceSorted(placeRestaurantsData, categoryValue)
      }
    }

    const filteredRestaurantsByCategory = previously(
      restaurantsData, placeRestaurantsData, categoryValue,
    );

    dispatch(filterRestaurantsByCategory({
      filteredRestaurantsByCategory, categoryValue,
    }));
  }
}

// 장소별 필터
export function setPlaceFilter(placeValue) {
  return (dispatch, getState) => {
    const {
      restaurantsData,
      categoryRestaurantsData,
      placeRestaurantsData,
    } = getState();

    function filterFromBase(restaurantsData, placeValue) {
      const filteredByPlace = placeFilter(restaurantsData, placeValue);
      const result = [...filteredByPlace];
      return result
    }

    function filterFromCategorySorted(categoryRestaurantsData, placeValue) {
      const filteredByPlace = placeFilter(categoryRestaurantsData, placeValue);
      const result = [...filteredByPlace];
      return result
    }

    function previously(
      restaurantsData, categoryRestaurantsData, placeValue,
    ) {
      if (categoryRestaurantsData.length == 0) { // 기존에 음식기준으로 솔팅된게 없다면?
        return filterFromBase(restaurantsData, placeValue)
      } else if (placeRestaurantsData.length !== 0 ||
        categoryRestaurantsData.length !== 0) {
        return filterFromCategorySorted(categoryRestaurantsData, placeValue)
      }
    }

    const filteredRestaurantsByPlace = previously(
      restaurantsData, categoryRestaurantsData, placeValue,
    );

    dispatch(filterRestaurantsByPlace({
      filteredRestaurantsByPlace, placeValue,
    }));
  }
}

// 결과 레스토랑 목록
export function loadResultRestaurants(restaurantName, map) {
  return (dispatch) => {
    new window.kakao.maps.services.Places().keywordSearch(restaurantName, placesSearchCB);
    const resultRestaurant = JSON.parse(loadItem(('resultRestaurant')));

    function placesSearchCB(result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const placeKeywords = resultRestaurant[0].place.split(/[/]/i);

        for (const keyword of placeKeywords) {
          const resultRestaurantPlaceInfo = result.find(result =>
            result.address_name.includes(keyword),
          );
          if (resultRestaurantPlaceInfo) {
            const newPlacePosition = new window.kakao.maps.LatLng(
              resultRestaurantPlaceInfo.y, resultRestaurantPlaceInfo.x,
            )
            resultMap(newPlacePosition);
            dispatch(setResultRestaurantPlaceInfo(resultRestaurantPlaceInfo))
            loadAfterCourse(resultRestaurantPlaceInfo)
          }
        }

      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    }

    // 가게 맵에 마커표시
    function resultMap(newPlacePosition) {
      map.setCenter(newPlacePosition);
      new window.kakao.maps.Marker({
        map: map,
        position: newPlacePosition,
      });
    }

    async function loadAfterCourse(resultRestaurantPlaceInfo) {
      const resultRestaurant = JSON.parse(loadItem(('resultRestaurant')));
      const { after_course, name } = resultRestaurant[0];
      const { x, y } = resultRestaurantPlaceInfo;

      const afterRestaurants = await fetchAfterRestaurants({ x, y, name }); // 애프터코스: 주변맛집
      const afterCafes = await fetchAfterCafes({ x, y }); // 애프터코스: 주변카페
      const afterBars = await fetchAfterBars({ x, y }); // 애프터코스: 주변술집
      //ToDo afterRestaurants resultRestaurant의 name과 동일한 obj제외하기

      dispatch(setAfterRestaurants(afterRestaurants));
      dispatch(setAfterCafes(afterCafes));
      dispatch(setAfterBars(afterBars));

      if (after_course) {
        const recommenedCourse = await fetchRecommendCourse({ x, y, after_course }); // 애프터코스: 사용자 제공
        dispatch(setRecommendedCourse(recommenedCourse));
      } else {
        dispatch(setRecommendedCourse([]));
      }
    }
  }
}

// 검색창에서 지역, 식당, 음식 검색
export function findRestaurants({ restaurantsData }) {
  return (dispatch, getState) => {
    const {
      searchField: { searchKeyword },
    } = getState();

    const words = searchKeyword.split(/[ ]/i);

    for (const word of words) {
      const searchResultRestaurants = filter(restaurantsData,
        function (restaurant) {
          if (restaurant.name.includes(word)) {
            return restaurant.name
          } else if (restaurant.place.includes(word)) {
            return restaurant.place
          } else if (restaurant.category.includes(word)) {
            return restaurant.category
          }
        });
      if (searchResultRestaurants) {
        dispatch(setSearchResultRestaurants({
          searchKeyword, searchResultRestaurants,
        }));
        setMoodFilter(searchResultRestaurants)
      }
    }

    // ToDo 화면에 구현하기
    function setMoodFilter(searchResultRestaurants) {
      const uniqMoods = uniqBy(searchResultRestaurants, 'mood');

      for (const obj of uniqMoods) {
        const newArr = filter(searchResultRestaurants,
          function (restaurant) {
            if (obj.mood !== 'null') {
              if (restaurant.mood && restaurant.mood.includes(obj.mood)) {
                return restaurant.mood
              }
            }
          })
        if (newArr.length !== 0) {
          dispatch(setMoodRestaurants(obj.mood, newArr));
        }
      }
    }
  }
}

// 랜덤 식당 추천 액션 생성하기
export function setRandomFilter(restaurants) {
  return (dispatch) => {

    const filter1 = (restaurants) => {
      const situation = randomRestaurant(restaurants).situation;
      const filteredOnce = situationFilter(
        restaurants, situation,
      )

      const place = randomRestaurant(filteredOnce).place;
      const filteredTwice = placeFilter(
        filteredOnce, place,
      )

      dispatch(setRandomRecommendedRestaurants1({
        filteredTwice, situation, place,
      }))
    }

    const filter2 = (restaurants) => {
      const age = randomRestaurant(restaurants).age;
      const filteredOnce = ageFilter(
        restaurants, age,
      )

      const category = randomRestaurant(filteredOnce).category;
      const filteredTwice = categoryFilter(
        filteredOnce, category,
      )

      dispatch(setRandomRecommendedRestaurants2({
        filteredTwice, age, category,
      }))
    }

    filter2(restaurants)

    filter1(restaurants)
  }
}

export default reducer;
