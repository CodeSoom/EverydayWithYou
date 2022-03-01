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

export default function AfterCafes() {
  const afterCafes = useSelector((state) => state.afterCafes);

  return (
    <>
      <Title>
        <h5>다음 코스 추천</h5>
        <span>밥 먹고 가기 좋은 카페</span>
      </Title>
      <Container>
        {afterCafes ?
          afterCafes.map(restaurant => (
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
