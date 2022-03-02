import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import HomeCarouselContainer from '../containers/home/HomeCarouselContainer';

const SearchBox = styled.div({
  width: '100%',
  height: '50px',
})

const HomePageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const CustomMenuBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  padding: '4rem 3rem',
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

const MainBox = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

// ToDo responsive 앱으로 할때 화면 너비에 따라 이미지나오는 갯수 다르게 하기
const Background = styled.div({
  filter: 'blur(0.5rem) opacity(25%)',
  '& img': {
    width: '10rem',
    height: '10rem',
    margin: '1rem',
  },
});

const Contents = styled.div({
  position: 'absolute',
  top: '3.625rem',
  bottom: '3.625rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& button': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FA625B',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '24px',
    fontSize: '18px',
  },
})

export default function HomePage() {
  return (
    <HomePageLayout>
      <Link to='/search'>
        <SearchBox></SearchBox>
      </Link>
      <HomeCarouselContainer />
      {/* <h4>어디로 가시나요?</h4>
      <h4>연령대별 Pick</h4>
      <h4>가격대별 Best</h4> */}
      <CustomMenuBox>
        <TitleBox>
          <h4>고객님이 좋아할 음식점 추천</h4>
          <p>선호도를 반영한 취향 저격 음식점 😉</p>
        </TitleBox>
        <MainBox>
          <Background>
            <img src='assets/img/restaurant1.jpg' />
            <img src='assets/img/restaurant2.jpg' />
            <img src='assets/img/restaurant3.jpg' />
            <img src='assets/img/restaurant4.jpg' />
            <img src='assets/img/restaurant5.jpg' />
          </Background>
          <Contents>
            <p>
              어디 갈지 모르겠나요?
              오늘 드시고 싶으신 메뉴와 가고 싶으신 장소를 알려주시면 음식점을 추천해드릴게요.
            </p>
            <Link to='/custom'>
              <button>
                추천받으러 가기
                <span className="material-icons">chevron_right</span>
              </button>
            </Link>
          </Contents>
        </MainBox>
      </CustomMenuBox>
    </HomePageLayout>
  )
}
