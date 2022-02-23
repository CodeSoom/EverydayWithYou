import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& h4': {
    fontWeight: '700',
    color: '#0E0E0E',
    marginBottom: '3rem',
  },
});

const RestaurantsList = styled.li({
  color: '#0E0E0E',
});

export default function CustomRestaurantsContainer() {
  const filteredRestaurantsData = useSelector((state) =>
    (state.filteredRestaurantsData));

  const uniqRestaurants = uniqBy(filteredRestaurantsData, 'name');

  return (
    <Container>
      <h4>고객님이 좋아할 음식점 추천</h4>
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
