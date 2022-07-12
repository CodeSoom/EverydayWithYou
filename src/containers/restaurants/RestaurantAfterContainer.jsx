import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import RestaurantAfterRestaurant from '../../components/restaurants/RestaurantAfterRestaurant';
import RestaurantAfterCafe from '../../components/restaurants/RestaurantAfterCafe';
import RestaurantsAfterBar from '../../components/restaurants/RestaurantsAfterBar';
import RestaurantsAfterRecommendation from '../../components/restaurants/RestaurantsAfterRecommendation';

import mq from '../../shared/media-query';

const RestaurantAfter = styled.div(() => mq({
  width: ['100%', '40%', '40%'],
  backgroundColor: '#F8F0E9',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 0,
  paddingTop: ['9.5vw', 0, 0],
}));

const Title = styled.h4(() => mq({
  textAlign: 'center',
  marginTop: [0, '3rem', '3rem'],
  marginBottom: ['7vw', '2rem', '2rem'],
  fontSize: ['4.7vw', '1.875rem', '1.875rem'],
  fontWeight: '900',
  color: '#4F4F4F',
}));

export default function RestaurantAfterContainer({ isPc }) {
  const {
    afterRestaurants,
    afterCafes,
    afterBars,
    recommenedCourse,
  } = useSelector((state) => state);

  return (
    <RestaurantAfter>
      {isPc ?
        <Title>
          다음 코스 추천 😉
        </Title>
        : null
      }
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
  );
}
