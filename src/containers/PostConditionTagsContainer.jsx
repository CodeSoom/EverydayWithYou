import { useDispatch } from 'react-redux';

import PostConditionTagsForm from '../components/PostConditionTagsForm';

import {
  selectConditionTag,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostFormContainer() {
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
