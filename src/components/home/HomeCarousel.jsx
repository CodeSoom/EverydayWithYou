import { LazyLoadImage } from 'react-lazy-load-image-component';

import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { Link } from 'react-router-dom';

// import { Carousel } from 'react-responsive-carousel';
// Todo 슬라이드 구현하기 ㅜㅜ

const mq = facepaint([
  '@media (min-width: 768px)',
  '@media (min-width: 1024px)',
])

const Carousel_slide = styled.div(() => mq({
  position: 'relative',
  '& img': {
    height: ['90vw', '90vw', '18.75rem'],
    objectFit: 'cover',
    border: '0.25px solid #000',
    filter: 'brightness(50%) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  '& p': {
    width: ['45vw', '45vw', 'auto'],
    fontSize: ['3.75vw', '3.75vw', '1.2rem'],
    lineHeight: ['167.8%', '167.8%', '2.5rem'],
    fontWeight: '700',
    position: 'absolute',
    top: ['25vw', '25vw', 'auto'],
    bottom: ['auto', 'auto', '2rem'],
    left: ['10vw', '10vw', '2.5rem'],
  },
}));

export default function HomeCarousel() {
  return (
    <Link to='/custom'>
      <Carousel_slide>
        <LazyLoadImage
          width='100%'
          placeholderSrc='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/loading-img/grey.jpg'
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
