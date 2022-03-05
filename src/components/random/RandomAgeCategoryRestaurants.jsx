import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const HorizontalRestaurantsListContainer = styled.h4({
  padding: '0 3rem',
  paddingBottom: '3rem',
})

const Title = styled.h4({
  fontSize: '1.5rem',
  fontWeight: '400',
  color: '#828282',
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
  height: '17rem',
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
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.25rem',
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
    <HorizontalRestaurantsListContainer>
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
    </HorizontalRestaurantsListContainer>
  )
}
