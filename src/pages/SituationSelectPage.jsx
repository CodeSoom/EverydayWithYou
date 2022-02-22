import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SituationSelectContainer from '../containers/situationSelect/SituationSelectContainer';
import SituationSelectStartBtnContainer from '../containers/situationSelect/SituationSelectStartBtnContainer';

import {
  setRestaurants,
} from '../actions';

const SituationSelectPageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '100px 0',
});

const DecorateCircle = styled.div({
  position: 'absolute',
  zIndex: '-1',
  width: '640px',
  height: '640px',
  borderRadius: '320px',
  left: '200px',
  top: '-166px',
  backgroundColor: '#F5F5F5',
});

const TitleBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0  36px',
  '& h2': {
    marginBottom: '24px',
  },
  '& h4': {
    paddingBottom: '24px',
  },
});

const SelectBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  padding: '4rem 2rem',
});

const ConfirmBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '2rem',
});

export default function SituationSelectPage({ restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  const sortNumber = useSelector((state) => (state.sortNumber));

  return (
    <SituationSelectPageLayout>
      <DecorateCircle></DecorateCircle>
      <TitleBox>
        <h2>놀러 가는 목적이 무엇인지 알려주세요 . 💕</h2>
        <h4>코스를 알려드리는 여정이 시작됩니다 !</h4>
      </TitleBox>
      <SelectBox>
        <SituationSelectContainer />
      </SelectBox>
      <ConfirmBox>
        <SituationSelectStartBtnContainer
          sortNumber={sortNumber}
        />
      </ConfirmBox>
    </SituationSelectPageLayout >
  )
}
