import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import MobileHomeCarouselContainer from '../../containers/home/MobileHomeCarouselContainer';
import MobileRandomSituationPlaceRestaurants from '../../components/random/MobileRandomSituationPlaceRestaurants';
import MobileRandomAgeCategoryRestaurants from '../../components/random/MobileRandomAgeCategoryRestaurants';

import {
  setRandomFilter,
} from '../../actions';

const MobileHomePageLayout = styled.div({
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  marginLeft: '15.5vw',
  zIndex: '-1',
});

const MobileHomeTopSearchContainer = styled.div({
  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: '6%',
    paddingRight: '6%',
  },
  '& img': {
    width: '10vw',
    height: '10vw',
  },
  '& p': {
    fontSize: '4.6vw',
    marginRight: '4.6vw',
    color: '#828282',
  },
})

const MobileHomeSelectContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10% 5%',
});

const MobileHomeSelectContainer_situation = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '70vw',
  padding: '5%',
  marginBottom: '5%',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
  '& p': {
    width: '90%',
    fontSize: '3.75vw',
    color: '#fff',
  },
  '& img': {
    width: '10%',
  },
});

const MobileHomeSelectContainer_custom = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '70vw',
  padding: '5%',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
  '& p': {
    width: '90%',
    fontSize: '3.75vw',
    color: '#fff',
  },
  '& img': {
    width: '10%',
  },
});

export default function MobileHomePage({ restaurants, callMenu }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  return (
    <MobileHomePageLayout
      className={
        callMenu == 'okay' ?
          'black-filter' : ''
      }
    >
      <Link to='/search'>
        <MobileHomeTopSearchContainer>
          <div>
            <p>지역, 음식 또는 가게이름</p>
            <img src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-search-icon.svg' />
          </div>
        </MobileHomeTopSearchContainer>
      </Link>
      {/* Todo 리액트 라이브러리로 대체하기*/}
      <MobileHomeCarouselContainer />
      {/* */}
      <MobileHomeSelectContainer>
        <Link to='/'>
          <MobileHomeSelectContainer_situation>
            <p>놀러 가는 목적부터 선택</p>
            <img src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-right-arrow-icon.svg' />
          </MobileHomeSelectContainer_situation>
        </Link>
        <Link to='/custom'>
          <MobileHomeSelectContainer_custom>
            <p>메뉴와 장소부터 선택</p>
            <img src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/mobile-icon/mobile-right-arrow-icon.svg' />
          </MobileHomeSelectContainer_custom>
        </Link>
      </MobileHomeSelectContainer>
      {/* ToDo 어디로 가시나요? ~ 가격대별 Pick 테마로 변경하기*/}
      <MobileRandomSituationPlaceRestaurants />
      <MobileRandomAgeCategoryRestaurants />
    </MobileHomePageLayout>
  )
}
