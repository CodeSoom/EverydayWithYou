import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  setNewRestaurants,
} from '../../actions';

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function SituationSelectStartBtnContainer() {
  const dispatch = useDispatch();

  const newRestaurants = useSelector((state) => (
    state.newRestaurants
  ))

  function handleClickUpdate(newRestaurants) {
    dispatch(setNewRestaurants(newRestaurants));
  }

  return (
    <>
      <Link to='/home'>
        <Buttons
          // 버튼 색깔바뀌게하기
          type='button'
          onClick={() => handleClickUpdate(newRestaurants)}
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
        >
          건너뛰기
        </Buttons>
      </Link>
    </>
  )
}
