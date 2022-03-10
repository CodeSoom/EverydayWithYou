import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const CustomRestaurantsResult = styled.div({
  width: '40%',
  backgroundColor: '#F8F0E9',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const CustomRestaurantsResult_title = styled.h4({
  marginTop: '5rem',
  marginBottom: '3rem',
  fontSize: '1.875rem',
  fontWeight: '900',
  color: '#4F4F4F',
});

const VerticalRestaurantsList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
})
const VerticalRestaurantsList_restaurant = styled.li({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2.875rem',
  '& img': {
    backgroundColor: '#fff',
    padding: '0.75rem',
    width: '250px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '2rem',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  },
});
const VerticalRestaurantsList_restaurant_contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: '1rem',
  '& h5': {
    color: '#4F4F4F',
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '0.25rem',
  },
  '& span': {
    fontSize: '1rem',
    color: '#fff',
  },
  '& button': {
    marginTop: '0.75rem',
    width: '7rem',
    backgroundColor: '#FA625B',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '10px 20px',
    borderRadius: '28px',
  },
});

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
