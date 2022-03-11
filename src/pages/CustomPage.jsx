import styled from '@emotion/styled';

import facepaint from 'facepaint';

import { useMediaQuery } from "react-responsive";

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
  display: 'flex',
  flexDirection: ['column', 'row', 'row'],
  justifyContent: 'space-between',
  height: ['100vh', 'auto', 'auto'],
  backgroundColor: ['#F8F0E9', 'auto', 'auto'],
}));

const FilterContainer = styled.div(() => mq({
  height: ['auto', '100vh', '100vh'],
  width: ['100%', '60%', '60%'],
  padding: ['0 10%', '0 6.375rem', '0 6.375rem'],
  paddingTop: ['45%', '8.5rem', '8.5rem'],
  position: ['static', 'sticky', 'sticky'],
  top: 0,
  left: ['15.5vw', '18.75rem', '18.75rem'],
  backgroundColor: ['#F8F0E9', '#F4F4F4', '#F4F4F4'],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}))

const FilterContainer_back = styled.div(() => mq({
  marginBottom: ['2.5vh', '1.5rem', '1.5rem'],
  '& div': {
    display: 'flex',
    alignItems: 'center',
  },
  '& span': {
    fontSize: ['5vw', '1.5rem', '1.5rem'],
    fontWeight: '700',
    color: '#4F4F4F',
  },
  '& img': {
    width: ['5vw', 'auto', 'auto'],
    marginRight: ['0.8vh', '0.5rem', '0.5rem'],
    color: '#4F4F4F',
  },
}));

const Information = styled.div(() => mq({
  width: ['100%', '40%', '40%'],
  padding: ['10%', '0 2rem', '0 2rem'],
  backgroundColor: '#F8F0E9',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  '& img': {
    width: ['46.8vw', 'auto', 'auto'],
    marginBottom: [0, '6rem', '6rem'],
  },
  '& span': {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#4F4F4F',
    marginBottom: '3.125rem',
  },
  '& p': {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#828282',
    marginBottom: '5.125rem',
  },
}));

export default function CustomPage({ restaurants, callMenu }) {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });

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
    <div
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
      <CustomPageLayout>
        {
          categoryRestaurantsData.length == 0 ?
            <>
              <FilterContainer>
                <FilterContainer_back>
                  <Link to={
                    situationRestaurantsData.length !== 0 ?
                      '/' : '/home'
                  }
                  >
                    <div>
                      <img
                        src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/back-icon.svg'
                      />
                      <span>이전</span>
                    </div>
                  </Link>
                </FilterContainer_back>
                {
                  categoryRestaurantsData.length == 0 ?
                    <CustomCategoryFilterContainer />
                    :
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
              </FilterContainer>
              <Information>
                {isPc ?
                  <>
                    <img
                      src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/Illustration/coffee.svg'
                    />
                    <span>뭐 먹고 싶어요?</span>
                    <p>
                      왼쪽 버튼을 누르면
                      <br />
                      추천 음식점을 알려드릴게요
                    </p>
                  </>
                  :
                  <img
                    src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/Illustration/coffee.svg'
                  />
                }
              </Information>
            </>
            : placeRestaurantsData.length == 0 ?
              <>
                <FilterContainer>
                  <FilterContainer_back>
                    <Link to={
                      situationRestaurantsData.length !== 0 ?
                        '/' : '/home'
                    }
                    >
                      <div>
                        <img
                          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/back-icon.svg'
                        />
                        <span>이전</span>
                      </div>
                    </Link>
                  </FilterContainer_back>
                  {
                    categoryRestaurantsData.length == 0 ?
                      <CustomCategoryFilterContainer />
                      :
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
                </FilterContainer>
                <Information>
                  {isPc ?
                    <>
                      <img
                        src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/Illustration/sprinting.svg'
                      />
                      <span>어디로 가고 싶어요?</span>
                      <p>
                        왼쪽 버튼을 누르면
                        <br />
                        추천 음식점을 알려드릴게요
                      </p>
                    </>
                    :
                    <img
                      src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/Illustration/sprinting.svg'
                    />
                  }
                </Information>
              </>
              : isPc ?
                <>
                  <FilterContainer>
                    <FilterContainer_back>
                      <Link to={
                        situationRestaurantsData.length !== 0 ?
                          '/' : '/home'
                      }
                      >
                        <div>
                          <img
                            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/back-icon.svg'
                          />
                          <span>이전</span>
                        </div>
                      </Link>
                    </FilterContainer_back>
                    {
                      categoryRestaurantsData.length == 0 ?
                        <CustomCategoryFilterContainer />
                        :
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
                  </FilterContainer>
                  <CustomRestaurantsContainer />
                </>
                : <CustomRestaurantsContainer />
        }
      </CustomPageLayout >
    </div>
  )
}
