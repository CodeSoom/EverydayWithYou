import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import TopSearchBar from '../components/topbar/TopSearchBar';
import Banner from '../components/banner/Banner';
import RandomSituationPlaceRestaurants from '../components/random/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../components/random/RandomAgeCategoryRestaurants';

import { setRandomFilter } from '../slice';

import mq from '../shared/media-query';

const Top = styled.div(() => mq({
  position: 'fixed',
  left: ['15.5vw', '18.75rem', '18.75rem'],
  right: 0,
  top: 0,
  zIndex: 1,
}));

const HomePageLayout = styled.div(() => mq({
  backgroundColor: '#F4F4F4',
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
}));

const HomeSelectContainer = styled.div(() => mq({
  display: 'flex',
  flexDirection: ['column', 'row', 'row'],
  justifyContent: 'center',
  alignItems: 'center',
  margin: ['10% 5%', '2rem', '2rem'],
}));

const HomeSelectContainer_situation = styled.button(() => mq({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: ['70vw', '30vw', '30vw'],
  padding: ['5%', '2rem', '2rem'],
  marginRight: [0, '2rem', '2rem'],
  marginBottom: ['5%', 0, 0],
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
  '& p': {
    fontSize: ['4.5vw', '1.5rem', '1.5rem'],
    color: '#fff',
  },
  '& img': {
    width: ['10%', '2rem', '2rem'],
  },
}));

const HomeSelectContainer_custom = styled.button(() => mq({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: ['70vw', '30vw', '30vw'],
  padding: ['5%', '2rem', '2rem'],
  backgroundColor: '#FA625B',
  boxShadow: '0px 0px 24.25px rgba(0, 0, 0, 0.08)',
  '& p': {
    fontSize: ['4.5vw', '1.5rem', '1.5rem'],
    color: '#fff',
  },
  '& img': {
    width: ['10%', '2rem', '2rem'],
  },
}));

export default function HomePage({
  restaurants, isPc, callSideBarMenu,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants));
  }, []);

  return (
    <>
      <Top
        className={
          !isPc && callSideBarMenu === true ?
            'darker-background' : ''}
      >
        <TopSearchBar />
      </Top>
      <HomePageLayout
        className={
          !isPc && callSideBarMenu === true ?
            'darker-background' : ''}
      >
        <Banner />
        <HomeSelectContainer>
          <Link to='/select'>
            <HomeSelectContainer_situation
              type='button'
            >
              <p>놀러 가는 목적부터 선택</p>
              <img
                src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-icon.svg'
              />
            </HomeSelectContainer_situation>
          </Link>
          <Link to='/custom'>
            <HomeSelectContainer_custom
              type='button'
            >
              <p>메뉴와 장소부터 선택</p>
              <img
                src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-icon.svg'
              />
            </HomeSelectContainer_custom>
          </Link>
        </HomeSelectContainer>
        <RandomSituationPlaceRestaurants />
        <RandomAgeCategoryRestaurants />
      </HomePageLayout>
    </>
  );
}
