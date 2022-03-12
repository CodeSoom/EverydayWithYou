import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { Link } from 'react-router-dom';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const HorizontalRestaurantsListContainer = styled.div(() => mq({
  padding: ['0 10%', '0 3rem', '0 3rem'],
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const Title = styled.h4(() => mq({
  fontSize: ['4.5vw', '1.5rem', '1.5rem'],
  fontWeight: '400',
  color: '#4F4F4F',
  marginBottom: ['5%', '1rem', '1rem'],
}));

const HorizontalRestaurantsList = styled.ul({
  display: 'flex',
  overflowY: 'hidden',
})

const HorizontalRestaurantsList_restaurant = styled.li(() => mq({
  backgroundColor: '#fff',
  padding: ['2vw', '1rem', '1rem'],
  marginRight: ['2vw', '1rem', '1rem'],
  marginBottom: ['2vw', '1rem', '1rem'],
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  '& img': {
    width: ['40vw', '250px', '250px'],
    height: ['25vw', '150px', '150px'],
    objectFit: 'cover',
    marginBottom: ['5%', '1rem', '1rem'],
  },
}));

const HorizontalRestaurantsList_restaurant_contents = styled.div(() => mq({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: ['3.5vw', '1rem', '1rem'],
  '& h4': {
    color: '#4F4F4F',
    fontSize: ['4vw', '1.25rem', '1.25rem'],
    fontWeight: '700',
    marginBottom: ['2.5%', '0.5rem', '0.5rem'],
  },
  '& h5': {
    fontSize: ['3.5vw', '1rem', '1rem'],
    fontWeight: '500',
  },
  '& span': {
    fontSize: ['3.5vw', '1rem', '1rem'],
    color: '#fff',
  },
}));

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
                  <span>결과없음</span> :
                  <h5>{`#${restaurant.mood}`}</h5>
                }
              </HorizontalRestaurantsList_restaurant_contents>
            </HorizontalRestaurantsList_restaurant>
          </Link>
        ))}
      </HorizontalRestaurantsList>
    </HorizontalRestaurantsListContainer>
  )
}
