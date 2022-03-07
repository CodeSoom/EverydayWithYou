import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const HorizontalRestaurantsListContainer = styled.div({
  padding: '0 7.5%',
  paddingBottom: '10%',
})

const Title = styled.h4({
  fontSize: '3.25vw',
  fontWeight: '400',
  color: '#4F4F4F',
  marginBottom: '5%',
})

const HorizontalRestaurantsList = styled.ul({
  display: 'flex',
  overflowY: 'hidden',
})
const HorizontalRestaurantsList_restaurant = styled.li({
  backgroundColor: '#fff',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  padding: '1.5vw',
  marginRight: '3.75vw',
  marginBottom: '1vh',
  '& img': {
    width: '26vw',
    height: '10.5vh',
    objectFit: 'cover',
    paddingBottom: '1vh',
  },
});
const HorizontalRestaurantsList_restaurant_contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: '2vw',
  '& h4': {
    color: '#4F4F4F',
    fontSize: '2.5vw',
    marginBottom: '0.5vh',
  },
  '& span': {
    fontSize: '2vw',
    color: '#fff',
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
