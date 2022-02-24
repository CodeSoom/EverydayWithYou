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

export function setRestaurantName({ value }) {
  return {
    type: 'setRestaurantName',
    payload: { value },
  }
}

// <--- Redux Thunk --->

// 상황별 필터
export function setSituationFilter(sortNumber) {
  return (dispatch, getState) => {
    const {
      restaurants,
    } = getState();

    // sortNumber에 따라 restuarants 필터링
    function filter(restuarants, sortNumber) {
      if (sortNumber === 1) {
        const filter1 = restaurants.filter(restaurant =>
          restaurant.situation.includes('썸'));
        const filter2 = restaurants.filter(restaurant =>
          restaurant.situation.includes('소개팅'));
        const result = [...filter1, ...filter2];
        return result
      }
      if (sortNumber === 2) {
        const result = restaurants.filter(restaurant =>
          restaurant.situation.includes('데이트'));
        return result
      }
      if (sortNumber === 3) {
        const filter1 = restaurants.filter(restaurant =>
          restaurant.situation.includes('생일'));
        const filter2 = restaurants.filter(restaurant =>
          restaurant.situation.includes('기념일'));
        const filter3 = restaurants.filter(restaurant =>
          restaurant.situation.includes('프로포즈'));
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


// ToDo delete
export function selectSituationTag(selectedId) {
  return {
    type: 'selectSituationTag',
    payload: { selectedId },
  }
}

export function selectPlaceTag(selectedId) {
  return {
    type: 'selectPlaceTag',
    payload: { selectedId },
  }
}

export function selectCategoryTag(selectedId) {
  return {
    type: 'selectCategoryTag',
    payload: { selectedId },
  }
}
