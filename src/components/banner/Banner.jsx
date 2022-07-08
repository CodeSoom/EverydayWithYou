import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import mq from '../../shared/media-query';

const BannerImg = styled.div(() => mq({
  position: 'relative',
  img: {
    width: '100%',
    height: ['90vw', '90vw', '18.75rem'],
    objectFit: 'cover',
    border: '0.25px solid #000',
    filter: 'brightness(50%) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  p: {
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

const BANNER_IMG_URL = 'https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/main-food-img/steak.jpg';

export default function Banner() {
  return (
    <Link to='/custom'>
      <BannerImg>
        <img src={BANNER_IMG_URL} />
        <p>
          어디 갈지 모르겠나요?
          <br />
          오늘 드시고 싶으신 메뉴와
          <br />
          가고 싶으신 장소를 알려주시면 음식점을 추천해드릴게요.
        </p>
      </BannerImg>
    </Link>
  )
}
