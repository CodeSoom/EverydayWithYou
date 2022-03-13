import styled from '@emotion/styled';

import facepaint from 'facepaint';

import KakaoMapBtn from '../kakao/KakaoMapBtn';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const VerticalRestaurantsList = styled.div(() => mq({
  marginBottom: '1.5rem',
}));

const Title = styled.div(() => mq({
  borderBottom: 'solid 1px #C4C4C4',
  textAlign: 'left',
  fontSize: ['4vw', '1.25rem', '1.25rem'],
  fontWeight: '700',
  color: '#4F4F4F',
}));

const VerticalRestaurantsList_restaurant = styled.li(() => mq({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: '10rem',
}));

const VerticalRestaurantsList_restaurant_contents = styled.div(() => mq({
  '& h4': {
    color: '#4F4F4F',
    fontSize: ['4.2vw', '1rem', '1rem'],
    fontWeight: '700',
    marginBottom: ['2.5%', '0.5rem', '0.5rem'],
  },
  '& span': {
    color: '#828282',
  },
}));

export default function RestaurantAfterCafe({ afterCafes }) {
  return (
    <VerticalRestaurantsList>
      <Title>[밥 먹고 가기 좋은 카페]</Title>
      {afterCafes.map((restaurant) => (
        <VerticalRestaurantsList_restaurant
          key={restaurant.id}
        >
          <VerticalRestaurantsList_restaurant_contents>
            <h4>{restaurant.place_name}</h4>
            <span>{restaurant.category_name}</span>
            <br />
            <span>{restaurant.address_name}</span>
          </VerticalRestaurantsList_restaurant_contents>
          <KakaoMapBtn
            placeUrl={restaurant.place_url}
          />
        </VerticalRestaurantsList_restaurant>
      ))}
    </VerticalRestaurantsList>
  )
}
