import styled from '@emotion/styled';

import facepaint from 'facepaint';

import { useSelector } from 'react-redux';

import RestaurantAfterRestaurant from '../../components/restaurants/RestaurantAfterRestaurant';
import RestaurantAfterCafe from '../../components/restaurants/RestaurantAfterCafe';
import RestaurantsAfterBar from '../../components/restaurants/RestaurantsAfterBar';
import RestaurantsAfterRecommendation from '../../components/restaurants/RestaurantsAfterRecommendation';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const RestaurantAfter = styled.div(() => mq({
  width: ['100%', '40%', '40%'],
  backgroundColor: '#F8F0E9',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 0,
  padding: ['1.65vh 0', '1rem 7.5rem', '1rem 7.5rem'],
}));

const Title = styled.h4(() => mq({
  textAlign: 'center',
  marginTop: [0, '3rem', '3rem'],
  marginBottom: '1.5rem',
  fontSize: ['4.7vw', '1.875rem', '1.875rem'],
  fontWeight: '900',
  color: '#4F4F4F',
}));

export default function RestaurantAfterContainer() {
  const {
    afterRestaurants,
    afterCafes,
    afterBars,
    recommenedCourse,
  } = useSelector((state) => state)

  return (
    <RestaurantAfter>
      <Title>
        <h4>다음 코스 추천 😉</h4>
      </Title>
      {recommenedCourse ?
        <RestaurantsAfterRecommendation
          recommenedCourse={recommenedCourse}
        />
        : null
      }
      <RestaurantAfterRestaurant
        afterRestaurants={afterRestaurants}
      />
      <RestaurantAfterCafe
        afterCafes={afterCafes}
      />
      <RestaurantsAfterBar
        afterBars={afterBars}
      />
    </RestaurantAfter>
  )
}
