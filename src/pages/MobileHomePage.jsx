import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import MobileHomeCarouselContainer from '../containers/home/MobileHomeCarouselContainer';
import MobileRandomSituationPlaceRestaurants from '../components/MobileRandomSituationPlaceRestaurants';
import MobileRandomAgeCategoryRestaurants from '../components/MobileRandomAgeCategoryRestaurants';

import {
  setRandomFilter,
} from '../actions';

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
  '& svg': {
    width: '10vw',
    height: '10vw',
  },
  '& span': {
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
  '& svg': {
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
  '& svg': {
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
            <span>지역, 식당 또는 음식</span>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="69.0361" height="69.0361" fill="#FA625B" />
              <path d="M53.8487 53.8487L42.8029 42.8029M31.7571 48.3258C22.6065 48.3258 15.1885 40.9078 15.1885 31.7571C15.1885 22.6065 22.6065 15.1885 31.7571 15.1885C40.9078 15.1885 48.3258 22.6065 48.3258 31.7571C48.3258 40.9078 40.9078 48.3258 31.7571 48.3258Z" stroke="white" strokeWidth="3.45181" />
            </svg>
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
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 56L48 30L20 4" stroke="white" strokeWidth="6" strokeLinecap="square" />
            </svg>
          </MobileHomeSelectContainer_situation>
        </Link>
        <Link to='/custom'>
          <MobileHomeSelectContainer_custom>
            <p>메뉴와 장소부터 선택</p>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 56L48 30L20 4" stroke="white" strokeWidth="6" strokeLinecap="square" />
            </svg>
          </MobileHomeSelectContainer_custom>
        </Link>
      </MobileHomeSelectContainer>
      {/* ToDo 어디로 가시나요? ~ 가격대별 Pick 테마로 변경하기*/}
      <MobileRandomSituationPlaceRestaurants />
      <MobileRandomAgeCategoryRestaurants />
    </MobileHomePageLayout>
  )
}
