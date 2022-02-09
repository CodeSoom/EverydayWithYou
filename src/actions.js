export function setRestaurantName({ value }) {
  return {
    type: 'setRestaurantName',
    payload: { value },
  }
}

export function setConditions(conditionsArr) {
  return {
    type: 'setConditions',
    payload: { conditionsArr },
  }
}

export function setRegions(regionsArr) {
  return {
    type: 'setRegions',
    payload: { regionsArr },
  }
}

export function setCategories(categoriesArr) {
  return {
    type: 'setCategories',
    payload: { categoriesArr },
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

export function getConditionTag(conditionObj) {
  return {
    type: 'getConditionTag',
    payload: { conditionObj },
  }
}

export function getRegionTag(regionObj) {
  return {
    type: 'getRegionTag',
    payload: { regionObj },
  }
}

export function getCategoryTag(categoryObj) {
  return {
    type: 'getCategoryTag',
    payload: { categoryObj },
  }
}
