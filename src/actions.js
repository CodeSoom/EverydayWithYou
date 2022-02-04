export function setRestaurantName({ value }) {
  return {
    type: 'setRestaurantName',
    payload: { value },
  }
}

export function setConditions() {
  return {
    type: 'setConditions',
  }
}

export function setRegions() {
  return {
    type: 'setRegions',
  }
}

export function setCategories() {
  return {
    type: 'setCategories',
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
