import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import HomeCarouselContainer from '../containers/home/HomeCarouselContainer';

const HomePageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const MenuBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // ToDo add height
  padding: '36px 24px',
  '& h4': {
    marginBottom: '36px',
    color: '#0E0E0E',
  },
});

export default function HomePage() {
  return (
    <HomePageLayout>
      <HomeCarouselContainer />
      <MenuBox>
        <h4>연령대별 Pick</h4>
        <h4>어디로 가시나요?</h4>
        <h4>음식종류별 Best</h4>
        <h4>가격대별 Best</h4>
        <Link to='/custom'>
          <h4>선호도를 반영한 취향 저격 음식점 😉</h4>
        </Link>
      </MenuBox>
    </HomePageLayout>
  )
}
