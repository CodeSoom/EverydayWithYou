import { useDispatch } from 'react-redux';

import PostCategoryTagsForm from '../components/PostCategoryTagsForm';

import {
  selectCategoryTag,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostCategoryTagsContainer() {
  const dispatch = useDispatch();

  function handleClickTag(selectedId) {
    dispatch(selectCategoryTag(selectedId))
  }

  return (
    <PostFormBox>
      <PostCategoryTagsForm
        onClickTag={handleClickTag}
      />
    </PostFormBox>
  )
}
