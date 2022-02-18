import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const Title = styled.h2({
  textAlign: 'left',
  marginBottom: '24px',
});

const RestaurantsBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  '& h4': {
    textAlign: 'left',
    marginLeft: '36px',
    fontSize: '24px',
  },
});

const Restaurant = styled.li({
  color: '#000',
  fontSize: '24px',
});

export default function CustomRestaurantsContainer() {
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
          <h4>결과가 없어요 ! 😥</h4>
          :
          uniqRestaurants.map((obj) => (
            <ul key={obj.id}>
              <Link to={`/map/${obj.name}`}
              >
                <Restaurant>{obj.name}</Restaurant>
              </Link>
            </ul>
          ))
        }
      </RestaurantsBox>
    </>
  )
}
