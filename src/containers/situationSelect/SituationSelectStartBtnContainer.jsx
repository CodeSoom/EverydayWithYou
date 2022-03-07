import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  setSituationRestaurants,
} from '../../actions';

const SelectBtnContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  paddingBottom: '5.625rem',
});

const SelectButton = styled.button({
  ':hover, :focus': {
    backgroundColor: '#FA625B',
  },
  color: '#fff',
  backgroundColor: '#828282',
  fontSize: '1.5rem',
  padding: '10px 20px',
  borderRadius: '28px',
  marginRight: '0.7rem',
});

export default function SituationSelectStartBtnContainer({ sortNumber }) {
  const dispatch = useDispatch();

  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ))

  function handleClickUpdate(situationRestaurantsData) {
    dispatch(setSituationRestaurants(situationRestaurantsData));
  }

  return (
    <SelectBtnContainer>
      <Link to={sortNumber ? '/home' : '/'}>
        <SelectButton
          type='button'
          onClick={() => handleClickUpdate(
            sortNumber ?
              situationRestaurantsData :
              alert('한 가지 이상 선택해주세요!'))}
        >
          시작
        </SelectButton>
      </Link>
      <Link
        to='/home'
      >
        <SelectButton
          type='button'
          onClick={() => handleClickUpdate([])}
        >
          건너뛰기
        </SelectButton>
      </Link>
    </SelectBtnContainer>
  )
}
