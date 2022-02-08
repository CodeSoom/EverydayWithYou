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

/* const conditionsArr = restaurants.map((obj) => {
  return obj.condition;
});

const uniqueConditionsArr = [...new Set(conditionsArr)];

const regionsArr = restaurants.map((obj) => {
  return obj.region
});
const uniqueRegionsArr = [...new Set(regionsArr)];

const categoriesArr = restaurants.map((obj) => {
  return obj.category
});
const uniqueCategoriesArr = [...new Set(categoriesArr)]; */
