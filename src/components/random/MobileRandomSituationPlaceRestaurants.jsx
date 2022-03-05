import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const HorizontalRestaurantsListContainer = styled.h4({
  padding: '10% 7.5%',
  borderTop: 'solid 2px #C4C4C4',
})

const Title = styled.h4({
  fontSize: '3.25vw',
  fontWeight: '400',
  color: '#828282',
  marginBottom: '5%',
})

const HorizontalRestaurantsList = styled.ul({
  display: 'flex',
  overflowY: 'hidden',
})
const HorizontalRestaurantsList_restaurant = styled.li({
  backgroundColor: '#fff',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  padding: '2vw',
  marginRight: '2vw',
  marginBottom: '1.65vh',
  '& img': {
    width: '27vw',
    height: '10vh',
    objectFit: 'cover',
    marginBottom: '0.5vh',
  },
});
const HorizontalRestaurantsList_restaurant_contents = styled.div({
  '& h4': {
    fontSize: '2.5vw',
    color: '#828282',
    fontWeight: '700',
  },
});

export default function MobileRandomSituationPlaceRestaurants() {
  const randomSituationPlaceRestaurants = useSelector((state) => (
    state.randomSituationPlaceRestaurants
  ));
  const situation = useSelector((state) => (
    state.situation
  ));
  const place = useSelector((state) => (
    state.place
  ));

  function condition(situation) {
    if (
      situation == '소개팅' ||
      situation == '데이트' ||
      situation == '프로프즈'
    ) {
      return `${situation}하기 좋은 ${place}의 음식점`
    } else if (
      situation == '썸'
    ) {
      return `${situation}탈 때 가기 좋은 ${place}의 음식점`
    } else if (
      situation == '생일' ||
      situation == '기념일'
    ) {
      return `${situation}에 가기 좋은 ${place}의 음식점`
    }
  }

  const titleCondition = condition(situation)

  return (
    <HorizontalRestaurantsListContainer>
      <Title>
        {titleCondition}
      </Title>
      <HorizontalRestaurantsList>
        {randomSituationPlaceRestaurants.map(restaurant => (
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
