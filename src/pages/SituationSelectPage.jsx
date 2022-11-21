import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import SituationSelectContainer from '../containers/situationSelect/SituationSelectContainer';
import SituationSelectStartBtnContainer from '../containers/situationSelect/SituationSelectStartBtnContainer';

import TopBar from '../components/topbar/TopBar';

import { setRestaurants } from '../slice';

import mq from '../shared/media-query';

const SituationSelectPageLayout = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

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

export default function SituationSelectPage({
  isPc, modalEffect, restaurants,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  const sortedNumber = useSelector((state) => (state.sortedNumber));

  return (
    <>
      <TopBar
        modalEffect={modalEffect}
        pointFont={'today'}
      />
      <SituationSelectPageLayout className={modalEffect}>
        {isPc ?
          <Title>
            <h2>오늘은 무슨 날인가요? 놀러 가는 목적이 무엇인지 알려주세요.</h2>
            <p>코스를 알려드리는 여정이 시작됩니다 !</p>
          </Title>
          :
          null
        }
        <SituationSelectContainer
          sortedNumber={sortedNumber}
        />
        <SituationSelectStartBtnContainer
          sortedNumber={sortedNumber}
        />
      </SituationSelectPageLayout >
    </>
  );
}
