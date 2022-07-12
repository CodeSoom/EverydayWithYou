import styled from '@emotion/styled';

import KakaoMapBtn from '../kakao/KakaoMapBtn';

import mq from '../../shared/media-query';

const VerticalRestaurantsList = styled.div(() => mq({
  borderTop: ['solid #fff 1vw', 'none', 'none'],
  borderBottom: ['solid #fff 1vw', 'none', 'none'],
  // marginBottom: ['8vw', '1rem', '1rem'],
  padding: ['8vw 0', '1rem 5rem', '1rem 5rem'],
  '& span': {
    color: '#828282',
    fontSize: ['3.5vw', '1rem', '1rem'],
    marginLeft: ['3.75vw', 0, 0],
  },
}));

const Title = styled.div(() => mq({
  borderBottom: ['none', 'solid 1px #C4C4C4', 'solid 1px #C4C4C4'],
  textAlign: ['center', 'left', 'left'],
  fontSize: ['4vw', '1.25rem', '1.25rem'],
  fontWeight: '700',
  color: '#4F4F4F',
  marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
}));

const VerticalRestaurantsList_restaurant = styled.li(() => mq({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: ['auto', '10rem', '10rem'],
}));

const VerticalRestaurantsList_restaurant_contents = styled.div(() => mq({
  padding: ['3.75vw 0', 0, 0],
  '& h4': {
    color: '#4F4F4F',
    fontSize: ['4.2vw', '1rem', '1rem'],
    fontWeight: '700',
    marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
    marginLeft: ['3.75vw', 0, 0],
  },
}));

export default function RestaurantsAfterRecommendation({ recommenedCourse }) {
  return (
    <VerticalRestaurantsList>
      <Title>[여기 좋아요! - 추천가게 👍]</Title>
      {recommenedCourse.length !== 0 ?
        <>
          {
            recommenedCourse.map((restaurant) => (
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
            ))
          }
        </>
        : <span>추천가게가 아직 없어요.</span>
      }
    </VerticalRestaurantsList>
  );
}
