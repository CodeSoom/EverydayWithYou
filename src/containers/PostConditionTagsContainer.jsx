import { useSelector, useDispatch } from 'react-redux';

import PostConditionTagsForm from '../components/PostConditionTagsForm';

import {
  selectConditionTag,
  setRestaurants,
} from '../actions';

import styled from '@emotion/styled';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export default function PostConditionTagsContainer() {
  const dispatch = useDispatch();

  const selectedCondition = useSelector((state) => (
    state.selectedCondition === null ?
      state : state.selectedCondition
  ));

  function handleClickTag(selectedId) {
    dispatch(selectConditionTag(selectedId))
    dispatch(setRestaurants())
  }

  return (
    <PostFormBox>
      <PostConditionTagsForm
        onClickTag={handleClickTag}
        selectedCondition={selectedCondition}
      />
    </PostFormBox>
  )
}
