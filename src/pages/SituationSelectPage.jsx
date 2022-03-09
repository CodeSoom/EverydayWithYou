import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { useMediaQuery } from "react-responsive"

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SituationSelectContainer from '../containers/situationSelect/SituationSelectContainer';
import SituationSelectStartBtnContainer from '../containers/situationSelect/SituationSelectStartBtnContainer';

import {
  setRestaurants,
} from '../actions';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const SituationSelectPageLayout = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '-1',
}));

const Top = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  zIndex: '1',
}));

const Top_SearchContainer = styled.div(() => mq({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: '#F4F4F4',
  paddingTop: ['6%', '1.25rem', '1.25rem'],
  paddingRight: ['6%', '1.25rem', '1.25rem'],
  '& p': {
    marginRight: ['4.6vw', '0.875rem', '0.875rem'],
    fontSize: ['4.6vw', '0.875rem', '0.875rem'],
    color: '#828282',
  },
  '& img': {
    width: ['10vw', '2.5rem', '2.5rem'],
  },
}))

const Top_NavBar = styled.div(() => mq({
  display: 'flex',
  alignItems: 'center',
  justifyContent: ['center', 'flex-start', 'flex-start'],
  backgroundColor: '#fff',
  color: '#AEAEAE',
  fontWeight: '700',
  fontSize: ['3.5vw', '1.25rem', '1.25rem'],
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  padding: ['5% 0', '1rem 0', '1rem 0'],
  paddingLeft: [0, '4.5rem', '4.5rem'],
  '& img': {
    padding: [0, '0 1.8rem', '0 1.8rem'],
  },
  '& span': {
    color: '#FA625B',
    fontSize: ['3.5vw', '1.25rem', '1.25rem'],
  },
}))

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: '1.5rem',
  marginTop: '13.5rem',
  padding: '0 5.625rem',
  color: '#828282',
  '& h2': {
    color: '#4F4F4F',
    fontSize: '2rem',
    marginBottom: '0.75rem',
  },
});

export default function SituationSelectPage({ restaurants, callMenu }) {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  const sortNumber = useSelector((state) => (state.sortNumber));

  return (
    <SituationSelectPageLayout
      className={
        callMenu == 'okay' ?
          'black-filter' : ''
      }
    >
      <Top>
        <Link to='/search'>
          <Top_SearchContainer>
            <p>지역, 음식 또는 가게이름</p>
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/search-icon.svg'
            />
          </Top_SearchContainer>
        </Link>
        <Top_NavBar>
          <span>오늘은</span>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-light-grey.svg'
          />
          <p>
            {isPc ? '뭐 먹고 싶어요?' : '뭐 먹지?'}
          </p>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-light-grey.svg'
          />
          <p>
            {isPc ? '어디로 갈까요?' : '어디로?'}
          </p>
          <img
            src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/right-arrow-light-grey.svg'
          />
          <p>
            {isPc ? '나에게 딱 맞는 맞집 추천!' : '맛집 결과!'}
          </p>
        </Top_NavBar>
      </Top>
      {isPc ?
        <Title>
          <h2>오늘은 무슨 날인가요? 놀러 가는 목적이 무엇인지 알려주세요.</h2>
          <p>코스를 알려드리는 여정이 시작됩니다 !</p>
        </Title>
        :
        null
      }
      <SituationSelectContainer
        sortNumber={sortNumber}
      />
      <SituationSelectStartBtnContainer
        sortNumber={sortNumber}
      />
    </SituationSelectPageLayout >
  )
}
