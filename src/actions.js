// 레스토랑 JSON데이터 셋!
export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  }
}

// 필터된 restaurants로 레스토랑 업데이트
export function updateRestaurants(filteredRestaurants, sortNumber) {
  return {
    type: 'updateRestaurants',
    payload: { filteredRestaurants, sortNumber },
  }
}

// 필터링된 레스토랑 셋!
export function setNewRestaurants(newRestaurants) {
  return {
    type: 'setNewRestaurants',
    payload: { newRestaurants },
  }
}

export function setRestaurantName({ value }) {
  return {
    type: 'setRestaurantName',
    payload: { value },
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

export function sortRestaurantsBySituation(selectedTag) {
  return {
    type: 'sortRestaurantsBySituation',
    payload: { selectedTag },
  }
}

export function sortRestaurantsByPlace(selectedTag) {
  return {
    type: 'sortRestaurantsByPlace',
    payload: { selectedTag },
  }
}

export function sortRestaurantsByCategory(selectedTag) {
  return {
    type: 'sortRestaurantsByCategory',
    payload: { selectedTag },
  }
}

// --- Redux Thunk ---

export function setSituationFilter(sortNumber) {
  return (dispatch, getState) => {
    const {
      restaurants,
    } = getState();

    // sortNumber에 따라 restuarants 필터링
    function filter(restuarants, sortNumber) {
      if (sortNumber === 1) {
        const filter1 = restaurants.filter(restaurant => restaurant.situation.includes('썸'));
        const filter2 = restaurants.filter(restaurant => restaurant.situation.includes('소개팅'));
        const result = [...filter1, ...filter2];
        return result
      }
      if (sortNumber === 2) {
        const result = restaurants.filter(restaurant => restaurant.situation.includes('데이트'));
        return result
      }
      if (sortNumber === 3) {
        const filter1 = restaurants.filter(restaurant => restaurant.situation.includes('생일'));
        const filter2 = restaurants.filter(restaurant => restaurant.situation.includes('기념일'));
        const filter3 = restaurants.filter(restaurant => restaurant.situation.includes('프로포즈'));
        const result = [...filter1, ...filter2, ...filter3];
        return result
      } return restaurants
    }

    const filteredRestaurants = filter(restaurants, sortNumber);

    // 필터된 restaurants로 레스토랑 업데이트
    dispatch(updateRestaurants(filteredRestaurants, sortNumber));
  };
}
