import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CustomCategoryFilterContainer from '../containers/custom/CustomCategoryFilterContainer';
import CustomPlaceFilterContainer from '../containers/custom/CustomPlaceFilterContainer';
import CustomRestaurantsContainer from '../containers/custom/CustomRestaurantsContainer';

import TopNavBar from '../components/navbar/TopNavBar';

import {
  setRestaurantsData,
} from '../actions';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const CustomPageLayout = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  marginTop: '8.5rem',
  zIndex: '-1',
  display: 'flex',
  flexDirection: ['column', 'row', 'row'],
}));

const LeftFilterContainer = styled.div({
  width: '60%',
  height: '85.5vh',
  position: 'sticky',
  top: '8.5rem',
  left: '18.75rem',
  paddingLeft: '6.375rem',
  paddingRight: '2rem',
  backgroundColor: '#F4F4F4',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const LeftFilterContainer_Back = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
  '& span': {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#4F4F4F',
  },
  '& img': {
    marginRight: '0.5rem',
    color: '#4F4F4F',
  },
});

const Information = styled.div({
  width: '40%',
  backgroundColor: '#F8F0E9',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& img': {
    marginBottom: '6rem',
  },
  '& span': {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#4F4F4F',
    marginBottom: '3.125rem',
  },
  '& p': {
    paddingBottom: '5.125rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#828282',
  },
})

export default function CustomPage({ restaurants, callMenu }) {
  const dispatch = useDispatch();

  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ))

  function filter(restaurants, situationRestaurantsData) {
    if (situationRestaurantsData.length === 0) {
      return restaurants
    }

    return situationRestaurantsData
  }

  const restaurantsData = filter(restaurants, situationRestaurantsData)

  useEffect(() => {
    dispatch(setRestaurantsData(restaurantsData));
  }, []);

  const filteredRestaurantsData = useSelector((state) =>
    (state.filteredRestaurantsData));
  const categoryRestaurantsData = useSelector((state) =>
    (state.categoryRestaurantsData));
  const placeRestaurantsData = useSelector((state) =>
    (state.placeRestaurantsData));

  return (
    <CustomPageLayout
      className={
        callMenu == 'okay' ?
          'black-filter' : ''
      }
    >
      <TopNavBar
        pointFont={
          categoryRestaurantsData.length == 0 ?
            'menu' :
            placeRestaurantsData.length == 0 ?
              'place' :
              filteredRestaurantsData.length !== 0 ?
                'result' : ''
        }
      />
      <LeftFilterContainer>
        <LeftFilterContainer_Back>
          <Link to={
            situationRestaurantsData.length !== 0 ?
              '/' : '/home'
          }
          >
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/back-icon.svg'
            />
            <span>이전</span>
          </Link>
        </LeftFilterContainer_Back>
        {
          categoryRestaurantsData.length == 0 ?
            <CustomCategoryFilterContainer /> :
            placeRestaurantsData.length == 0 ?
              <>
                <CustomCategoryFilterContainer />
                <CustomPlaceFilterContainer />
              </> :
              <>
                <CustomCategoryFilterContainer />
                <CustomPlaceFilterContainer />
              </>
        }
      </LeftFilterContainer>
      {
        categoryRestaurantsData.length == 0 ?
          <Information>
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/Illustration/coffee.svg'
            />
            <span>뭐 먹고 싶어요?</span>
            <p>
              왼쪽 버튼을 누르면
              <br />
              추천 음식점을 알려드릴게요
            </p>
          </Information> :
          placeRestaurantsData.length == 0 ?
            <Information>
              <img
                src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/Illustration/sprinting.svg'
              />
              <span>어디로 가고 싶어요?</span>
              <p>
                왼쪽 버튼을 누르면
                <br />
                추천 음식점을 알려드릴게요
              </p>
            </Information> : <CustomRestaurantsContainer />
      }
    </CustomPageLayout >
  )
}
