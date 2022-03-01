import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

const Container = styled.div({
  backgroundColor: '#fff',
});

const Title = styled.div({
  '& h5': {
    fontSize: '18px',
  },
  '& span': {
    fontSize: '18px',
  },
});

const RestaurantBox = styled.div({
  display: 'flex',
  padding: '1rem',
});

const Contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& span': {
    color: '#595959',
    fontWeight: '700',
  },
});

export default function AfterRestaurants() {
  const afterRestaurants = useSelector((state) => state.afterRestaurants);

  return (
    <>
      <Title>
        <h5>다음 코스 추천</h5>
        <span>맛집 도장 깨기</span>
      </Title>
      <Container>
        {afterRestaurants ?
          afterRestaurants.map(restaurant => (
            <ul key={restaurant.id}>
              <li>
                <RestaurantBox>
                  <Contents>
                    <div>
                      <span>
                        {restaurant.place_name}
                      </span>
                      {`${restaurant.category_name} · ${restaurant.address_name}`}
                    </div>
                  </Contents>
                </RestaurantBox>
              </li>
            </ul>
          ))
          : null}
      </Container>
    </>
  )
}
