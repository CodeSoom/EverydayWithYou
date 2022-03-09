import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import HomeCarouselContainer from '../containers/home/HomeCarouselContainer';
import RandomSituationPlaceRestaurants from '../components/random/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../components/random/RandomAgeCategoryRestaurants';

import {
  setRandomFilter,
} from '../actions';

const HomePageLayout = styled.div({
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  marginLeft: '18.75rem',
});

const TopSearchContainer = styled.div({
  height: '3.75rem',
  position: 'relative',
  '& p': {
    position: 'absolute',
    right: '5rem',
    bottom: '0.625rem',
    fontSize: '0.875rem',
    color: '#828282',
  },
  '& img': {
    position: 'absolute',
    right: '1rem',
    bottom: '0',
  },
});

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
  width: '30vw',
  padding: '2rem',
  marginRight: '2rem',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
  '& p': {
    fontSize: '1.5rem',
    color: '#fff',
  },
  '& img': {
    width: '2rem',
  },
});

const HomeSelectContainer_custom = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '30vw',
  padding: '2rem',
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
  '& p': {
    fontSize: '1.5rem',
    color: '#fff',
  },
  '& img': {
    width: '2rem',
  },
});

export default function HomePage({ restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  return (
    <HomePageLayout>
      <Link to='/search'>
        <TopSearchContainer>
          <p>지역, 음식 또는 가게이름</p>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg'
          />
        </TopSearchContainer>
      </Link>
      {/* Todo 리액트 라이브러리로 대체하기*/}
      <HomeCarouselContainer />
      {/* */}
      <HomeSelectContainer>
        <Link to='/'>
          <HomeSelectContainer_situation>
            <p>놀러 가는 목적부터 선택</p>
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-icon.svg'
            />
          </HomeSelectContainer_situation>
        </Link>
        <Link to='/custom'>
          <HomeSelectContainer_custom>
            <p>메뉴와 장소부터 선택</p>
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-icon.svg'
            />
          </HomeSelectContainer_custom>
        </Link>
      </HomeSelectContainer>
      {/* ToDo 어디로 가시나요? ~ 가격대별 Pick 테마로 변경하기*/}
      <RandomSituationPlaceRestaurants />
      <RandomAgeCategoryRestaurants />
    </HomePageLayout>
  )
}
