import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import WebHomeCarouselContainer from '../containers/home/WebHomeCarouselContainer';
import RandomSituationPlaceRestaurants from '../components/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../components/RandomAgeCategoryRestaurants';

import {
  setRandomFilter,
} from '../actions';

const HomePageLayout = styled.div({
  marginLeft: '300px',
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  height: '100vh',
});

const HomeTopSearchContainer = styled.div({
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
  margin: '2rem',
});

const HomeSelectContainer_situation = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '1rem 2rem',
  marginRight: '2rem',

  fontSize: '1.5rem',
  color: '#fff',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
});

const HomeSelectContainer_custom = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '1rem 2rem',

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
      <WebHomeCarouselContainer />
      {/* */}
      <HomeSelectContainer>
        <Link to='/'>
          <HomeSelectContainer_situation>
            <p>놀러 가는 목적부터 선택</p>
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 24.4006L19.2 14.0006L8 3.60059" stroke="white" strokeWidth="4.04167" strokeLinecap="square" />
            </svg>
          </HomeSelectContainer_situation>
        </Link>
        <Link to='/custom'>
          <HomeSelectContainer_custom>
            <p>메뉴와 장소부터 선택</p>
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 24.4006L19.2 14.0006L8 3.60059" stroke="white" strokeWidth="4.04167" strokeLinecap="square" />
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
