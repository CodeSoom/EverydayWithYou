import { useSelector, useDispatch } from 'react-redux';

import PostConditionTagsForm from '../components/PostConditionTagsForm';

import {
  selectConditionTag,
  setConditions,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostConditionTagsContainer() {
  const dispatch = useDispatch();

  const selectedCondition = useSelector((state) => (
    state.selectedCondition === null ?
      state : state.selectedCondition
  ));

  function handleClickTag(selectedId) {
    dispatch(selectConditionTag(selectedId))
    dispatch(setConditions())
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
