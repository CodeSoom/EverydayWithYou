import { loadItem } from './services/storage';

import {
  randomRestaurant,
  situationFilter,
  placeFilter,
  ageFilter,
  categoryFilter,
} from './utils';

import uniqBy from 'lodash.uniqby';
import filter from 'lodash.filter';

import {
  fetchAfterRestaurants,
  fetchAfterCafes,
  fetchAfterBars,
  fetchRecommendCourse,
} from './services/api';

export function setSideBarMenu() {
  return {
    type: 'setSideBarMenu',
  }
}

export function removeSideBarMenu() {
  return {
    type: 'removeSideBarMenu',
  }
}

// SituationSelectPage: 최초 레스토랑 JSON데이터 셋!
export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  }
}

// CustomPage: 최초 레스토랑 혹은 상황별로 솔팅된 레스토랑으로 업데이트
export function setRestaurantsData(restaurantsData) {
  return {
    type: 'setRestaurantsData',
    payload: { restaurantsData },
  }
}

// SituationSelecPage: 2. 상황별 솔팅 => 필터링된 레스토랑 셋!
export function setSituationRestaurants(situationRestaurantsData) {
  return {
    type: 'setSituationRestaurants',
    payload: { situationRestaurantsData },
  }
}

// SearchPage: 분위기별 솔팅 => 필터링된 레스토랑 셋!
export function setMoodRestaurants(moodName, moodRestaurantsData) {
  return {
    type: 'setMoodRestaurants',
    payload: { moodName, moodRestaurantsData },
  }
}

// RestaurantPage: 검색결과 객체 셋
export function setResultRestaurantPlaceInfo(resultRestaurantPlaceInfo) {
  return {
    type: 'setResultRestaurantPlaceInfo',
    payload: { resultRestaurantPlaceInfo },
  }
}

// RestaurantAfterContainer: 애프터 코스 셋
export function setAfterRestaurants(afterRestaurants) {
  return {
    type: 'setAfterRestaurants',
    payload: { afterRestaurants },
  }
}

export function setAfterCafes(afterCafes) {
  return {
    type: 'setAfterCafes',
    payload: { afterCafes },
  }
}

export function setAfterBars(afterBars) {
  return {
    type: 'setAfterBars',
    payload: { afterBars },
  }
}

export function setRecommendedCourse(recommenedCourse) {
  return {
    type: 'setRecommendedCourse',
    payload: { recommenedCourse },
  }
}

// 검색결과 셋
export function setSearchResultRestaurants(searchKeyword, searchResultRestaurants) {
  return {
    type: 'setSearchResultRestaurants',
    payload: { searchKeyword, searchResultRestaurants },
  }
}

// 추천레스토랑 셋
export function setRandomRecommendedRestaurants1(filteredTwice, situation, place) {
  return {
    type: 'setRandomRecommendedRestaurants1',
    payload: { filteredTwice, situation, place },
  }
}

export function setRandomRecommendedRestaurants2(filteredTwice, age, category) {
  return {
    type: 'setRandomRecommendedRestaurants2',
    payload: { filteredTwice, age, category },
  }
}

// SituationSelecPage: 1. 상황별 솔팅 => 숫자로 필터된 레스토랑으로 업데이트
export function filterRestaurantsBySituation(filteredRestaurantsBySituation, sortNumber) {
  return {
    type: 'filterRestaurantsBySituation',
    payload: { filteredRestaurantsBySituation, sortNumber },
  }
}

// 음식종류별 솔팅 => 음식으로 필터된 레스토랑으로 업데이트
export function filterRestaurantsByCategory(filteredRestaurantsByCategory, categoryValue) {
  return {
    type: 'filterRestaurantsByCategory',
    payload: { filteredRestaurantsByCategory, categoryValue },
  }
}

// 장소종류별 솔팅 => 장소로 필터된 레스토랑으로 업데이트
export function filterRestaurantsByPlace(filteredRestaurantsByPlace, placeValue) {
  return {
    type: 'filterRestaurantsByPlace',
    payload: { filteredRestaurantsByPlace, placeValue },
  }
}

// 검색창에 입력한 검색어 스토어에 저장
export function changeSearchField({ name, value }) {
  return {
    type: 'changeSearchField',
    payload: { name, value },
  }
}

// <--- Redux Thunk --->

// 상황별 필터
export function setSituationFilter(sortNumber) {
  return (dispatch, getState) => {
    const {
      restaurants,
    } = getState();

    function filter(restuarants, sortNumber) {
      if (sortNumber == 2) {
        const filter1 = situationFilter(restaurants, '썸');
        const filter2 = situationFilter(restaurants, '소개팅');
        const result = [...filter1, ...filter2];
        return result
      }
      if (sortNumber == 1) {
        const result = situationFilter(restaurants, '데이트');
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
    dispatch(filterRestaurantsBySituation(filteredRestaurantsBySituation, sortNumber));
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
      const filteredByCategory = restaurantsData.filter(restaurant =>
        restaurant.category.includes(categoryValue));
      const result = [...filteredByCategory];
      return result
    }

    function filterFromPlaceSorted(placeRestaurantsData, categoryValue) {
      const filteredByCategory = placeRestaurantsData.filter(restaurant =>
        restaurant.category.includes(categoryValue));
      const result = [...filteredByCategory];
      return result
    }

    function previously(
      restaurantsData, placeRestaurantsData, categoryValue,
    ) {
      if (placeRestaurantsData.length === 0) { // 기존에 장소기준으로 솔팅된게 없다면?
        return filterFromBase(restaurantsData, categoryValue)
      } else {
        return filterFromPlaceSorted(placeRestaurantsData, categoryValue)
      }
    }

    const filteredRestaurantsByCategory = previously(
      restaurantsData, placeRestaurantsData, categoryValue,
    );

    dispatch(filterRestaurantsByCategory(filteredRestaurantsByCategory, categoryValue))
  }
}

// 장소별 필터
export function setPlaceFilter(placeValue) {
  return (dispatch, getState) => {
    const {
      restaurantsData,
      categoryRestaurantsData,
    } = getState();

    function filterFromBase(restaurantsData, placeValue) {
      const filteredByPlace = restaurantsData.filter(restaurant =>
        restaurant.place.includes(placeValue));
      const result = [...filteredByPlace];
      return result
    }

    function filterFromCategorySorted(categoryRestaurantsData, placeValue) {
      const filteredByPlace = categoryRestaurantsData.filter(restaurant =>
        restaurant.place.includes(placeValue));
      const result = [...filteredByPlace];
      return result
    }

    function previously(
      restaurantsData, categoryRestaurantsData, placeValue,
    ) {
      if (categoryRestaurantsData.length === 0) { // 기존에 음식기준으로 솔팅된게 없다면?
        return filterFromBase(restaurantsData, placeValue)
      } else {
        return filterFromCategorySorted(categoryRestaurantsData, placeValue)
      }
    }

    const filteredRestaurantsByPlace = previously(
      restaurantsData, categoryRestaurantsData, placeValue,
    );

    dispatch(filterRestaurantsByPlace(filteredRestaurantsByPlace, placeValue))
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
        dispatch(setSearchResultRestaurants(searchKeyword, searchResultRestaurants))
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

      dispatch(setRandomRecommendedRestaurants1(
        filteredTwice, situation, place,
      ))
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

      dispatch(setRandomRecommendedRestaurants2(
        filteredTwice, age, category,
      ))
    }

    filter2(restaurants)

    filter1(restaurants)
  }
}
