import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Title = styled.h4({
  paddingTop: '2rem',
  fontSize: '1.5rem',
  fontWeight: '400',
  color: '#828282',
  marginBottom: '1rem',
})

const HorizontalRestaurantsList = styled.div({
  display: 'flex',
  overflowY: 'hidden',
})
const HorizontalRestaurantsList_restaurant = styled.li({
  backgroundColor: '#fff',
  padding: '1rem',
  marginRight: '2rem',
  marginBottom: '1rem',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  height: '17rem',
  '& img': {
    width: '250px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
});
const HorizontalRestaurantsList_restaurant_contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: '1rem',
  '& h4': {
    fontSize: '1rem',
    fontWeight: '700',
  },
});

export default function RandomAgeCategoryRestaurants() {
  const randomAgeCategoryRestaurants = useSelector((state) => (
    state.randomAgeCategoryRestaurants
  ));
  const age = useSelector((state) => (
    state.age
  ));
  const category = useSelector((state) => (
    state.category
  ));

  function condition(category) {
    if (
      category == '이탈리안' ||
      category == '스테이크'
    ) {
      return `${age}가 좋아하는 ${category} 음식점`
    } else if (category == '인도음식') {
      return `${age}가 좋아하는 ${category}점`
    } else {
      return `${age}가 좋아하는 ${category}`
    }
  }

  const titleCondition = condition(category)

  return (
    <>
      <Title>
        {titleCondition}
      </Title>
      <HorizontalRestaurantsList>
        {randomAgeCategoryRestaurants.map(restaurant => (
          <Link
            to={`/restaurants/${restaurant.name}`}
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
                  '' : `#${restaurant.mood}`
                }
              </HorizontalRestaurantsList_restaurant_contents>
            </HorizontalRestaurantsList_restaurant>
          </Link>
        ))}
      </HorizontalRestaurantsList>
    </ >
  )
}
