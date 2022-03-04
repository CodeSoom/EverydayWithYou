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

const HomePageLayout = styled.div({
  marginLeft: '12.75rem',
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  height: '100vh',
  zIndex: '-1',
});

const HomeTopSearchContainer = styled.div({
  height: '11rem',
  position: 'relative',
  '& span': {
    position: 'absolute',
    right: '15rem',
    bottom: '2rem',
    fontSize: '2.75rem',
    color: '#828282',
  },
  '& div': {
    position: 'absolute',
    right: '3rem',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA625B',
    color: '#fff',
    width: '7.5rem',
    height: '7.5rem',
  },
})

const HomeSelectContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '5rem',
});

const HomeSelectContainer_situation = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '42rem',
  padding: '2.5rem',
  marginBottom: '2.75rem',

  fontSize: '2.75rem',
  color: '#fff',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
});

const HomeSelectContainer_custom = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '42rem',
  padding: '2.5rem',

  fontSize: '2.75rem',
  color: '#fff',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
});

export default function HomePage({ restaurants, callMenu }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  return (
    <HomePageLayout
      className={
        callMenu == 'okay' ?
          'black-filter' : ''
      }
    >
      <Link to='/search'>
        <HomeTopSearchContainer>
          <span>지역, 식당 또는 음식</span>
          <div>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M58 58L42 42M26 50C12.7452 50 2 39.2548 2 26C2 12.7452 12.7452 2 26 2C39.2548 2 50 12.7452 50 26C50 39.2548 39.2548 50 26 50Z" stroke="white" strokeWidth="6" />
            </svg>
          </div>
        </HomeTopSearchContainer>
      </Link>
      {/* Todo 리액트 라이브러리로 대체하기*/}
      <MobileHomeCarouselContainer />
      {/* */}
      <HomeSelectContainer>
        <Link to='/'>
          <HomeSelectContainer_situation>
            <div>
              <p>놀러 가는 목적부터 선택</p>
            </div>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 56L48 30L20 4" stroke="white" strokeWidth="6" strokeLinecap="square" />
            </svg>
          </HomeSelectContainer_situation>
        </Link>
        <Link to='/custom'>
          <HomeSelectContainer_custom>
            <div>
              <p>메뉴와 장소부터 선택</p>
            </div>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 56L48 30L20 4" stroke="white" strokeWidth="6" strokeLinecap="square" />
            </svg>
          </HomeSelectContainer_custom>
        </Link>
      </HomeSelectContainer>
      {/* ToDo 어디로 가시나요? ~ 가격대별 Pick 테마로 변경하기*/}
      <MobileRandomSituationPlaceRestaurants />
      <MobileRandomAgeCategoryRestaurants />
    </HomePageLayout>
  )
}
