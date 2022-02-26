export const filter = (restaurants, situationRestaurantsData) => {
  if (situationRestaurantsData.length === 0) {
    return restaurants
  }

  return situationRestaurantsData
}
