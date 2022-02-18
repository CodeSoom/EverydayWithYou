export const useDispatch = jest.fn();

export const useSelector = jest.fn();

export const filter = (restaurants, newRestaurants) => {
  if (newRestaurants.length === 0) {
    return restaurants
  }

  return newRestaurants
}
