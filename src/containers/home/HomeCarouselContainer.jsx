import styled from '@emotion/styled';

import {
  Link,
} from 'react-router-dom';

// import { Carousel } from 'react-responsive-carousel';

// Todo 슬라이드 구현하기 ㅜㅜ

const Carousel_slide = styled.div({
  position: 'relative',
  '& img': {
    width: '100%',
    height: '18.75rem',
    objectFit: 'cover',
    border: '0.25px solid #000',
    filter: 'brightness(50%) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  '& p': {
    zIndex: '1',
    fontSize: '1.2rem',
    lineHeight: '2.5rem',
    fontWeight: '700',
    position: 'absolute',
    bottom: '2rem',
    left: '2.5rem',
  },
})

export default function HomeCarouselContainer() {
  return (
    <Link to='/custom'>
      <Carousel_slide>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/main-food-img/steak.jpg'
        />
        <p>
          어디 갈지 모르겠나요?
          <br />
          오늘 드시고 싶으신 메뉴와
          <br />
          가고 싶으신 장소를 알려주시면 음식점을 추천해드릴게요.
        </p>
      </Carousel_slide>
    </Link>
  )
}
