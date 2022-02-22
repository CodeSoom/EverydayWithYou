import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  setSituationRestaurants,
} from '../../actions';

const Container = styled.div({
  display: 'flex',
});

const Buttons = styled.button({
  ':hover, :focus': {
    backgroundColor: 'rgba(255, 145, 170, 0.5)',
    color: '#fff',
  },
  padding: '12px 24px',
  margin: '4px',
  borderRadius: '20px',
  fontSize: '18px',
});

export default function SituationSelectStartBtnContainer({ sortNumber }) {
  const dispatch = useDispatch();

  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ))

  const restaurants = useSelector((state) => (
    state.restaurants
  ))

  function handleClickUpdate(situationRestaurantsData) {
    dispatch(setSituationRestaurants(situationRestaurantsData));
  }

  return (
    <Container>
      <Link to={sortNumber ? '/home' : '/'}>
        <Buttons
          // 버튼 색깔바뀌게하기
          type='button'
          onClick={() => handleClickUpdate(
            sortNumber ?
              situationRestaurantsData :
              alert('한 가지 이상 선택해주세요!'))}
        >
          시작
        </Buttons>
      </Link>
      <Link
        to='/home'
      >
        <Buttons
          // 버튼 색깔바뀌게하기
          type='button'
          onClick={() => handleClickUpdate(restaurants)}
        >
          건너뛰기
        </Buttons>
      </Link>
    </Container>
  )
}
