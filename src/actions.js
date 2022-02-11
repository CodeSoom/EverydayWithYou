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

export function selectConditionTag(selectedId) {
  return {
    type: 'selectConditionTag',
    payload: { selectedId },
  }
}

export function selectRegionTag(selectedId) {
  return {
    type: 'selectRegionTag',
    payload: { selectedId },
  }
}

export function selectCategoryTag(selectedId) {
  return {
    type: 'selectCategoryTag',
    payload: { selectedId },
  }
}

export function sortByCondition(selectedName) {
  return {
    type: 'sortByCondition',
    payload: { selectedName },
  }
}

export function sortByRegion(selectedName) {
  return {
    type: 'sortByRegion',
    payload: { selectedName },
  }
}

export function sortByCategory(selectedName) {
  return {
    type: 'sortByCategory',
    payload: { selectedName },
  }
}
