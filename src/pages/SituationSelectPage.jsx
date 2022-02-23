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
  margin: '1.5rem 0',
});

const DecorateCircle = styled.div({
  width: '640px',
  height: '640px',
  borderRadius: '320px',
  position: 'absolute',
  zIndex: '-1',
  left: '200px',
  top: '-166px',
  backgroundColor: '#F5F5F5',
});

const TitleBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h2': {
    marginBottom: '1.5rem',
  },
});

const SelectBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  margin: '3rem 0',
});

const ConfirmBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
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
