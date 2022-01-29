export function setRestaurantName({ value }) {
  return {
    type: 'setRestaurantName',
    payload: { value },
  }
}

export function selectConditionTag(selectedId) {
  return {
    type: 'selectConditionTag',
    payload: { selectedId },
  }
}
