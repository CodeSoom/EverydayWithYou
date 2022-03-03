import styled from '@emotion/styled';

import {
  Link,
} from 'react-router-dom';

import '../../../assets/js/bootstrap.bundle.min.js';

const InformationContainer = styled.div({
  position: 'absolute',
  top: '135px',
  left: '40px',
  bottom: '35px',
  zIndex: '1',
  '& p': {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '2.5rem',
  },
})

export default function HomeCarouselContainer() {
  return (
    <Link to="/custom">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

        <InformationContainer>
          <p>
            어디 갈지 모르겠나요?
            <br />
            오늘 드시고 싶으신 메뉴와
            <br />
            가고 싶으신 장소를 알려주시면 음식점을 추천해드릴게요.
          </p>
        </InformationContainer>

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src='assets/img/dish1.jpg' />
          </div>

          <div className="carousel-item">
            <img src='assets/img/dish2.jpg' />
          </div>

          <div className="carousel-item">
            <img src='assets/img/dish3.jpg' />
          </div>
        </div>

      </div >
    </Link>
  )
}
