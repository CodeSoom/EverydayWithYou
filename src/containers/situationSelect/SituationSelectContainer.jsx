// 관심사: 저장된 레스토랑 정보 베이스로 레스토랑 업데이트
import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import SituationSelectStartBtnContainer from './SituationSelectStartBtnContainer';

import {
  setSituationFilter,
} from '../../actions';

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function SituationSelectContainer() {
  const dispatch = useDispatch();

  // 클릭하면 상황별 필터적용
  function handleClickSelection(sortNumber) {
    dispatch(setSituationFilter(sortNumber));
  }

  const color = useSelector((state) => (state.color));

  const sortNumber = useSelector((state) => (state.sortNumber));

  return (
    <>
      <Buttons
        type='button'
        onClick={() => handleClickSelection(1)}
        className={
          sortNumber === 1 ?
            color : ""
        }
      >
        알아가는 그대와 : 소개팅, 썸
      </Buttons>
      <Buttons
        type='button'
        onClick={() => handleClickSelection(2)}
        className={
          sortNumber === 2 ?
            color : ""
        }
      >
        일상 : 데이트
      </Buttons>
      <Buttons
        type='button'
        onClick={() => handleClickSelection(3)}
        className={
          sortNumber === 3 ?
            color : ""
        }
      >
        특별한 날 : 생일, 기념일, 프로포즈
      </Buttons>
      <SituationSelectStartBtnContainer
        sortNumber={sortNumber}
      />
    </>
  )
}
