import {
  Link,
} from 'react-router-dom';

import '../../../assets/js/bootstrap.bundle.min.js';

export default function MainHeaderContainer() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src='assets/img/pasta.jpg' />
          <div className="container">
            <div className="carousel-caption text-start">
              <Link to="/post">
                <h1>맛집 추천하기</h1>
                <p>지금 당장 고고싱!</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src='assets/img/pasta.jpg' />
          <div className="container">
            <div className="carousel-caption">
              <h1>두번째 메뉴</h1>
              <p>블라블라블라</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src='assets/img/pasta.jpg' />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>세번째 메뉴</h1>
              <p>블라블라블라</p>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div >
  )
}
