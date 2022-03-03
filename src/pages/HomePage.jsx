import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import HomeCarouselContainer from '../containers/home/HomeCarouselContainer';
import RandomSituationPlaceRestaurants from '../components/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../components/RandomAgeCategoryRestaurants';

import {
  setRandomFilter,
} from '../actions';

const HomePageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#E5E5E5',
});

const HomeTopSearchContainer = styled.div({
  width: '100%',
  height: '3.75rem',
  position: 'relative',
  '& span': {
    position: 'absolute',
    right: '5rem',
    bottom: '0.625rem',
    fontSize: '0.875rem',
    color: '#828282',
  },
  '& div': {
    position: 'absolute',
    right: '1rem',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA625B',
    color: '#fff',
    width: '2.5rem',
    height: '2.5rem',
  },
})

const HomeSelectContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '12rem',
});

const HomeSelectContainer_situation = styled.button({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '33rem',
  height: '6rem',
  padding: '2.5rem',
  marginRight: '2.5rem',
  fontSize: '1.5rem',
  color: '#fff',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
});

const HomeSelectContainer_custom = styled.button({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '33rem',
  height: '6rem',
  padding: '2.5rem',
  fontSize: '1.5rem',
  color: '#fff',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
});

const RandomRestaurantsContainer = styled.div({
  padding: '3rem',
  borderTop: 'solid 2px #C4C4C4',
})

export default function HomePage({ restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  return (
    <HomePageLayout>
      <Link to='/search'>
        <HomeTopSearchContainer>
          <span>지역, 식당 또는 음식</span>
          <div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.1998 24.1998L17.7998 17.7998M11.3998 20.9998C6.09787 20.9998 1.7998 16.7017 1.7998 11.3998C1.7998 6.09787 6.09787 1.7998 11.3998 1.7998C16.7017 1.7998 20.9998 6.09787 20.9998 11.3998C20.9998 16.7017 16.7017 20.9998 11.3998 20.9998Z" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </HomeTopSearchContainer>
      </Link>
      {/* Todo 리액트 라이브러리로 대체하기*/}
      <HomeCarouselContainer />
      {/* */}
      <HomeSelectContainer>
        <Link to='/'>
          <HomeSelectContainer_situation>
            놀러 가는 목적부터 선택
            <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0361 45.5158L39.6695 24.4991L17.0361 3.48242" stroke="white" strokeWidth="4.04167" strokeLinecap="square" />
            </svg>
          </HomeSelectContainer_situation>
        </Link>
        <Link to='/custom'>
          <HomeSelectContainer_custom>
            메뉴와 장소부터 선택
            <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0361 45.5158L39.6695 24.4991L17.0361 3.48242" stroke="white" strokeWidth="4.04167" strokeLinecap="square" />
            </svg>
          </HomeSelectContainer_custom>
        </Link>
      </HomeSelectContainer>
      {/* ToDo 어디로 가시나요? ~ 가격대별 Pick 테마로 변경하기*/}
      <RandomRestaurantsContainer>
        <RandomSituationPlaceRestaurants />
        <RandomAgeCategoryRestaurants />
      </RandomRestaurantsContainer>
    </HomePageLayout>
  )
}
