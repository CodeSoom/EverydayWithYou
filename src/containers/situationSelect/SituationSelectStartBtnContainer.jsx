import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  setSituationRestaurants,
} from '../../actions';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

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

export default function SituationSelectStartBtnContainer({ sortNumber }) {
  const dispatch = useDispatch();

  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ))

  function handleClickUpdate(situationRestaurantsData) {
    {
      situationRestaurantsData ?
        dispatch(setSituationRestaurants(situationRestaurantsData))
        : window.location.reload()
    }
  }

  return (
    <SelectBtnContainer>
      <Link to={sortNumber ? '/custom' : '/'}>
        <SelectButton
          type='button'
          onClick={() => handleClickUpdate(
            sortNumber ?
              situationRestaurantsData :
              alert('한 가지 이상 선택해주세요!'))}
          className={
            sortNumber ?
              'select-button-effect' : ''
          }
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
          className={
            sortNumber ?
              'select-button-effect' : ''
          }
        >
          건너뛰기
        </SelectButton>
      </Link>
    </SelectBtnContainer>
  )
}
