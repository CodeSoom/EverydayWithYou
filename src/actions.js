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
