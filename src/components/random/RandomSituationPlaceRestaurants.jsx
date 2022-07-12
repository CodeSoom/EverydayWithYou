import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import mq from '../../shared/media-query';

const HorizontalRestaurantsListContainer = styled.div(() => mq({
  padding: ['10% 7.5%', '3rem', '3rem'],
  borderTop: 'solid 1px #C4C4C4',
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
});

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

export default function RandomSituationPlaceRestaurants() {
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
      return `${situation}하기 좋은 ${place}의 음식점`;
    } else if (
      situation == '썸'
    ) {
      return `${situation}탈 때 가기 좋은 ${place}의 음식점`;
    } else if (
      situation == '생일' ||
      situation == '기념일'
    ) {
      return `${situation}에 가기 좋은 ${place}의 음식점`;
    }
  }

  const titleCondition = condition(situation);

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
  );
}
