import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  '& h2': {
    textAlign: 'left',
    marginBottom: '24px',
  },
  '& h4': {
    textAlign: 'left',
    marginLeft: '36px',
    fontSize: '24px',
  },
});

const RestaurantsList = styled.li({
  color: '#000',
  fontSize: '24px',
});

export default function CustomRestaurantsContainer() {
  const categoryRestaurantsData = useSelector((state) =>
    (state.categoryRestaurantsData));
  const placeRestaurantsData = useSelector((state) =>
    (state.placeRestaurantsData));
  const filteredRestaurantsData = useSelector((state) =>
    (state.filteredRestaurantsData));
  const alert = useSelector((state) =>
    (state.alert));

  console.log(categoryRestaurantsData)
  console.log(placeRestaurantsData)
  console.log(filteredRestaurantsData)
  console.log(alert)

  const uniqRestaurants = uniqBy(filteredRestaurantsData, 'name');

  return (
    <Container>
      <h2>👉🏻 가게이름</h2>
      {
        uniqRestaurants.map((restaurant) => (
          <ul key={restaurant.id}>
            <Link to={`/map/${restaurant.name}`}
            >
              <RestaurantsList>
                {restaurant.name}
              </RestaurantsList>
            </Link>
          </ul>
        ))
      }
    </Container>
  )
}
