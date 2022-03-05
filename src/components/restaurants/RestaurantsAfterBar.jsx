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

export default function RestaurantsAfterBar() {
  const afterBars = useSelector((state) => state.afterBars);

  return (
    <>
      <Title>
        <h5>다음 코스 추천</h5>
        <span>한잔하기 좋은 술집</span>
      </Title>
      <Container>
        {afterBars ?
          afterBars.map(restaurant => (
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
