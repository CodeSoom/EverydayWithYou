import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector } from 'react-redux';

const RestaurantsBox = styled.div({
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  '& h4': {
    textAlign: 'left',
  },
});

const Title = styled.h2({
  textAlign: 'left',
});

export default function HomeRestaurantsContainer() {
  const sortedRestaurantsByCategory = useSelector((state) => (
    state.sortedRestaurantsByCategory === null ?
      state : state.sortedRestaurantsByCategory
  ));
  const uniqRestaurants = uniqBy(sortedRestaurantsByCategory, 'name');

  return (
    <>
      <RestaurantsBox>
        <Title>👉🏻 가게이름</Title>
        {uniqRestaurants.length === 0
          ?
          <h4>결과가 없어요! 😥</h4>
          :
          uniqRestaurants.map((obj) => (
            <h4 key={obj.id}>
              {obj.name}
            </h4>
          ))
        }
      </RestaurantsBox>
    </>
  )
}
