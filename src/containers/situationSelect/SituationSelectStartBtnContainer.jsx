import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  setSituationRestaurants,
} from '../../actions';

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function SituationSelectStartBtnContainer({ sortNumber }) {
  const dispatch = useDispatch();

  // 상황별로 필터링된 데이터
  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ))

  // 날것의 JSON데이터
  const restaurants = useSelector((state) => (
    state.restaurants
  ))

  // 상황별 솔팅 => 필터링된 레스토랑 셋!
  function handleClickUpdate(situationRestaurantsData) {
    dispatch(setSituationRestaurants(situationRestaurantsData));
  }

  return (
    <>
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
    </>
  )
}
