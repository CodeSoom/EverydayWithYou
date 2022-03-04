import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const HorizontalRestaurantsListContainer = styled.h4({
  padding: '0 3rem',
  paddingBottom: '3rem',
})

const Title = styled.h4({
  fontSize: '2.75rem',
  fontWeight: '400',
  color: '#828282',
  marginBottom: '2rem',
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
  height: '22rem',
  '& img': {
    width: '300px',
    height: '250px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
});
const HorizontalRestaurantsList_restaurant_contents = styled.div({
  display: 'flex',
  alignItems: 'center',
  color: '#828282',
  fontSize: '2rem',
  '& h4': {
    fontSize: '2rem',
    fontWeight: '700',
    marginRight: '0.75rem',
  },
});

export default function MobileRandomAgeCategoryRestaurants() {
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
              </HorizontalRestaurantsList_restaurant_contents>
            </HorizontalRestaurantsList_restaurant>
          </Link>
        ))}
      </HorizontalRestaurantsList>
    </HorizontalRestaurantsListContainer>
  )
}
