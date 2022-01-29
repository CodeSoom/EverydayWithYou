import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import PostConditionTagsForm from '../components/PostConditionTagsForm';

import {
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
  const selectedCondition = useSelector((state) => ({
    conditions: state.conditions,
  }));
  console.log(selectedCondition);

  const dispatch = useDispatch();

  function handleClickTag(selectedId) {
    dispatch(selectConditionTag(selectedId))
  }

  return (
    <PostFormBox>
      <PostConditionTagsForm
        onClickTag={handleClickTag}
      />
    </PostFormBox>
  )
}
