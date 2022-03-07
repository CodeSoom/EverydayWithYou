import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SituationSelectContainer from '../containers/situationSelect/SituationSelectContainer';
import SituationSelectStartBtnContainer from '../containers/situationSelect/SituationSelectStartBtnContainer';

import {
  setRestaurants,
} from '../actions';

const SituationSelectPageLayout = styled.div({
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  marginLeft: '18.75rem',
  height: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
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

const TopNavBar = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: '3.75rem',
  width: '100%',
  height: '4.75rem',
  backgroundColor: '#fff',
  color: '#828282',
  fontSize: '1.25rem',
  fontWeight: '700',
  paddingLeft: '4.5rem',
  '& img': {
    width: '1.5rem',
    height: '1.5rem',
  },
  '& span': {
    color: '#FA625B',
    marginRight: '2rem',
  },
  '& p': {
    margin: '0 2rem',
  },
})

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  marginTop: '5rem',
  color: '#828282',
  '& h2': {
    color: '#4F4F4F',
    marginBottom: '0.75rem',
  },
});

export default function SituationSelectPage({ restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  const sortNumber = useSelector((state) => (state.sortNumber));

  return (
    <SituationSelectPageLayout>
      <Link to='/search'>
        <TopSearchContainer>
          <p>지역, 음식 또는 가게이름</p>
          <div>
            <img
              src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/web-icon/search-icon.svg'
            />
          </div>
        </TopSearchContainer>
      </Link>
      <TopNavBar>
        <span>오늘은</span>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/web-icon/right-arrow-grey.svg'
        />
        <p>뭐 먹고 싶어요?</p>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/web-icon/right-arrow-grey.svg'
        />
        <p>어디로 갈까요?</p>
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/web-icon/right-arrow-grey.svg'
        />
        <p>나에게 딱 맞는 맞집 추천!</p>
      </TopNavBar>
      <Title>
        <h2>오늘은 무슨 날인가요? 놀러 가는 목적이 무엇인지 알려주세요.</h2>
        <p>코스를 알려드리는 여정이 시작됩니다 !</p>
      </Title>
      <SituationSelectContainer />
      <SituationSelectStartBtnContainer
        sortNumber={sortNumber}
      />
    </SituationSelectPageLayout >
  )
}
