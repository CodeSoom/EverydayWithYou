import styled from '@emotion/styled';

import {
  Link,
} from 'react-router-dom';

const HomePageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export default function HomePage({ restaurants }) {
  console.log(restaurants);
  return (
    <HomePageContainer>
      <Link to="/post">맛집 추천하기</Link>
    </HomePageContainer>
  )
}
