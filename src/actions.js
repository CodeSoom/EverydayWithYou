import {
  fetchSearchResult,
} from '../services/api';

export function setRestaurantName({ value }) {
  return {
    type: 'setRestaurantName',
    payload: { value },
  }
}

export function setRestaurants(restaurantsData) {
  return {
    type: 'setRestaurants',
    payload: { restaurantsData },
  }
}

/* export function setResultRestaurant()
 */
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

export function loadSearchResult(keyword) {
  return async () => {
    await fetchSearchResult(keyword);

    // dispatch(setResultRestaurant(resultRestaurant));
  };
}
