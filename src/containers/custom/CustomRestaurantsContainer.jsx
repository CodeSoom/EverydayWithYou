import styled from '@emotion/styled';

import facepaint from 'facepaint';

import uniqBy from 'lodash.uniqby';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const CustomRestaurantsResult = styled.div(() => mq({
  width: ['100%', '40%', '40%'],
  paddingTop: ['45%', '8.5rem', '8.5rem'],
  backgroundColor: '#F8F0E9',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CustomRestaurantsResult_title = styled.h4(() => mq({
  textAlign: 'center',
  marginTop: [0, '3rem', '3rem'],
  marginBottom: ['1.65vh', '1rem', '1rem'],
  fontSize: ['4.68vw', '1.875rem', '1.875rem'],
  fontWeight: '900',
  color: '#4F4F4F',
}));

const VerticalRestaurantsList = styled.ul({
});
const VerticalRestaurantsList_restaurant = styled.li(() => mq({
  display: 'flex',
  flexDirection: ['column', 'row', 'row'],
  alignItems: ['flex-start', 'center', 'center'],
  marginBottom: '2.875rem',
  '& img': {
    backgroundColor: '#fff',
    padding: ['1.875vw', '0.75rem', '0.75rem'],
    width: ['68.85vw', '250px', '250px'],
    height: ['40vw', '150px', '150px'],
    objectFit: 'cover',
    marginRight: [0, '2rem', '2rem'],
    marginBottom: ['4vw', 0, 0],
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  },
}));
const VerticalRestaurantsList_restaurant_contents = styled.div(() => mq({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: ['4.2vw', '1rem', '1rem'],
  width: ['100%', '30%', '30%'],
  '& h5': {
    color: '#4F4F4F',
    fontSize: ['4.2vw', '1rem', '1rem'],
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  '& span': {
    fontSize: ['4.2vw', '1rem', '1rem'],
    color: '#F8F0E9',
  },
  '& button': {
    marginTop: '0.75rem',
    backgroundColor: '#FA625B',
    color: '#fff',
    fontSize: ['4.2vw', '1rem', '1rem'],
    fontWeight: '700',
    padding: ['1.56vw 6.25vw', '10px 20px', '10px 20px'],
    borderRadius: ['8.75vw', '28px', '28px'],
  },
}));

export default function CustomRestaurantsContainer() {
  const filteredRestaurantsData = useSelector((state) =>
    (state.filteredRestaurantsData));

  const uniqRestaurants = uniqBy(filteredRestaurantsData, 'name');

  return (
    <CustomRestaurantsResult>
      <CustomRestaurantsResult_title>
        선호도를 반영한 취향 저격 음식점 😉
      </CustomRestaurantsResult_title>
      <VerticalRestaurantsList>
        {
          uniqRestaurants.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.name}`}
              key={restaurant.id}
            >
              <VerticalRestaurantsList_restaurant
                key={restaurant.id}
              >
                <img src={`${restaurant.img}`} />
                <VerticalRestaurantsList_restaurant_contents>
                  <h5>{restaurant.name}</h5>
                  {`${restaurant.category} · ${restaurant.place}`}
                  <br />
                  {restaurant.mood === null ?
                    <span>결과없음</span> : `#${restaurant.mood}`
                  }
                  <button>
                    상세보기
                  </button>
                </VerticalRestaurantsList_restaurant_contents>
              </VerticalRestaurantsList_restaurant>
            </Link>
          ))}
      </VerticalRestaurantsList>
    </CustomRestaurantsResult>
  )
}
