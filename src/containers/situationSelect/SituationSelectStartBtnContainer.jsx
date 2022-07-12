import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { setSituationRestaurants } from '../../slice';

import mq from '../../shared/media-query';

const SelectBtnContainer = styled.div(() => mq({
  padding: ['7vh 0', '5.625rem 0', '5.625rem 0'],
  width: ['53.57vw', '15rem', '15rem'],
  display: 'flex',
  justifyContent: 'space-between',
}));

const SelectButton = styled.button(() => mq({
  ':hover': {
    backgroundColor: '#FA625B',
  },
  color: '#fff',
  backgroundColor: '#828282',
  fontWeight: '700',
  fontSize: ['5vw', '1.5rem', '1.5rem'],
  padding: ['1.56vw 6.25vw', '10px 20px', '10px 20px'],
  borderRadius: ['8.75vw', '28px', '28px'],
}));

export default function SituationSelectStartBtnContainer({ sortedNumber }) {
  const dispatch = useDispatch();

  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ));

  function handleClickUpdate(situationRestaurantsData) {
    {
      situationRestaurantsData ?
        dispatch(setSituationRestaurants(situationRestaurantsData))
        : window.location.reload();
    }
  }

  return (
    <SelectBtnContainer>
      <Link to={sortedNumber ? '/custom' : '/'}>
        <SelectButton
          type='button'
          onClick={() => handleClickUpdate(
            sortedNumber ?
              situationRestaurantsData :
              alert('한 가지 이상 선택해주세요!'))}
          className={
            sortedNumber ?
              'select-button-effect' : ''
          }
        >
          시작
        </SelectButton>
      </Link>
      <Link
        to='/custom'
      >
        <SelectButton
          type='button'
          onClick={() => handleClickUpdate([])}
          className={
            sortedNumber ?
              'select-button-effect' : ''
          }
        >
          건너뛰기
        </SelectButton>
      </Link>
    </SelectBtnContainer>
  );
}
