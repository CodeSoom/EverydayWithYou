import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  setSituationRestaurants,
} from '../../actions';

const Container = styled.div({
  display: 'flex',
});

const SelectButton = styled.button({
  ':hover, :focus': {
    backgroundColor: 'rgba(250, 98, 91, 0.5)',
    color: '#fff',
  },
  padding: '8px 20px',
  margin: '4px',
  borderRadius: '24px',
  fontSize: '18px',
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
    <Container>
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
    </Container>
  )
}
