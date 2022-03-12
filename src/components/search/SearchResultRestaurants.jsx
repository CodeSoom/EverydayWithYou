import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const HorizontalRestaurantsListContainer = styled.div({
  padding: '3rem',
  height: '90vh',
})

const Title = styled.h4({
  fontSize: '1.5rem',
  fontWeight: '400',
  color: '#4F4F4F',
  marginBottom: '1rem',
})

const HorizontalRestaurantsList = styled.ul({
  display: 'flex',
  overflowY: 'hidden',
})
const HorizontalRestaurantsList_restaurant = styled.li({
  backgroundColor: '#fff',
  padding: '1rem',
  marginRight: '2rem',
  marginBottom: '1rem',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  '& img': {
    width: '250px',
    height: '150px',
    objectFit: 'cover',
    paddingBottom: '1rem',
  },
});
const HorizontalRestaurantsList_restaurant_contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: '1rem',
  '& h4': {
    color: '#4F4F4F',
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.25rem',
  },
  '& span': {
    fontSize: '1rem',
    color: '#fff',
  },
});

export default function SearchResultRestaurants({ searchResultRestaurants, searchKeyword }) {
  return (
    <HorizontalRestaurantsListContainer>
      <Title>
        {`"${searchKeyword}"의 모든 결과`}
      </Title>
      <HorizontalRestaurantsList>
        {searchResultRestaurants.map(restaurant => (
          <Link
            to={`/search/restaurants/${restaurant.name}`}
            key={restaurant.id}
          >
            <HorizontalRestaurantsList_restaurant
              key={restaurant.id}
            >
              <img src={`${restaurant.img}`} />
              <HorizontalRestaurantsList_restaurant_contents>
                <h4>{restaurant.name}</h4>
                {`${restaurant.category} · ${restaurant.place}`}
                <br />
                {restaurant.mood === null ?
                  <span>결과없음</span> : `#${restaurant.mood}`
                }
              </HorizontalRestaurantsList_restaurant_contents>
            </HorizontalRestaurantsList_restaurant>
          </Link>
        ))}
      </HorizontalRestaurantsList>
    </HorizontalRestaurantsListContainer>
  )
}
