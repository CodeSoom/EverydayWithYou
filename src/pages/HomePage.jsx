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

export default function HomePage() {
  return (
    <HomePageContainer>
      <h1>home</h1>
      <Link to="/board">태그(게시판으로 이동)</Link>
      <br />
      <Link to="/post">작성(게시글작성으로 이동)</Link>
    </HomePageContainer>
  )
}
