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

export function sortRestaurantsByCondition(selectedTag) {
  return {
    type: 'sortRestaurantsByCondition',
    payload: { selectedTag },
  }
}

export function sortRestaurantsByRegion(selectedTag) {
  return {
    type: 'sortRestaurantsByRegion',
    payload: { selectedTag },
  }
}

export function sortRestaurantsByCategory(selectedTag) {
  return {
    type: 'sortRestaurantsByCategory',
    payload: { selectedTag },
  }
}
