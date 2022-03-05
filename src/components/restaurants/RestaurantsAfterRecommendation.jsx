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

export default function RestaurantsAfterRecommendation() {
  const recommendation = useSelector((state) => state.recommendation);
  // ToDo recommendation있는데 undefined들어오는거 해결하기
  console.log(recommendation)

  return (
    <>{
      recommendation ?
        <>
          <Title>
            <h5>다음 코스 추천</h5>
            <span>여기 좋아요!</span>
          </Title>
          <Container>
            <ul key={recommendation.id}>
              <li>
                <RestaurantBox>
                  <Contents>
                    <div>
                      <span>
                        {recommendation.place_name}
                      </span>
                      {`${recommendation.category_name} · ${recommendation.address_name}`}
                    </div>
                  </Contents>
                </RestaurantBox>
              </li>
            </ul>
          </Container>
        </> : null
    }
    </>
  )
}
