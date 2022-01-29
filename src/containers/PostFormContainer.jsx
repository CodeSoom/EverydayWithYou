import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import PostInputForm from '../components/PostInputForm';
import PostTagForm from '../components/PostTagForm';

import {
  setRestaurantName,
  selectConditionTag,
} from '../actions';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export default function PostFormContainer() {
  // ToDoDelete 상태 잘 바뀌는지 확인용
  useSelector((state) => ({
    name: state.restaurant.name,
  }));

  // ToDoDelete 상태 잘 바뀌는지 확인용
  useSelector((state) => ({
    conditions: state.conditions,
  }));

  const dispatch = useDispatch();

  function handleChangeInput({ value }) {
    dispatch(setRestaurantName({ value }))
  }

  function handleClickTag(selectedId) {
    dispatch(selectConditionTag(selectedId))
  }

  return (
    <PostFormBox>
      <PostInputForm
        onChangeInput={handleChangeInput}
      />
      <PostTagForm
        onClickTag={handleClickTag}
      />
      <button type='button'>공유</button>
    </PostFormBox>
  )
}
