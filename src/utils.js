export function randomRestaurant(arr) {
  return arr[(Math.random() * arr.length) | 0]
}

export function situationFilter(arr, keyword) {
  return (
    arr.filter(restaurant =>
      restaurant.situation.includes(keyword))
  )
}

export function placeFilter(arr, keyword) {
  return (
    arr.filter(restaurant =>
      restaurant.place.includes(keyword))
  )
}

export function ageFilter(arr, keyword) {
  return (
    arr.filter(restaurant =>
      restaurant.age.includes(keyword))
  )
}

export function categoryFilter(arr, keyword) {
  return (
    arr.filter(restaurant =>
      restaurant.category.includes(keyword))
  )
}
