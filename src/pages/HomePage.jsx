import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import HomeCarouselContainer from '../containers/home/HomeCarouselContainer';

const HomePageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const CustomMenuBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  padding: '4rem 2rem',
});

const TitleBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& h4': {
    fontWeight: '700',
    color: '#0E0E0E',
  },
  '& p': {
    color: '#595959',
  },
});

export default function HomePage() {
  return (
    <HomePageLayout>
      <HomeCarouselContainer />
      {/* <h4>어디로 가시나요?</h4>
      <h4>연령대별 Pick</h4>
      <h4>가격대별 Best</h4> */}
      <CustomMenuBox>
        <TitleBox>
          <h4>고객님이 좋아할 음식점 추천</h4>
          <p>선호도를 반영한 취향 저격 음식점 😉</p>
        </TitleBox>
        <p>
          어디 갈지 모르겠나요?
          오늘 드시고 싶으신 메뉴와 가고 싶으신 장소를 알려주시면 음식점을 추천해드릴게요.
        </p>
        <Link to='/custom'>
          <button>추천받으러 가기
            <p className="material-icons">home</p>
          </button>
        </Link>
      </CustomMenuBox>
    </HomePageLayout>
  )
}
