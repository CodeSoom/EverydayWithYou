import { useSelector, useDispatch } from 'react-redux';

import PostCategoryTagsForm from '../components/PostCategoryTagsForm';

import {
  selectCategoryTag,
  setCategories,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostCategoryTagsContainer() {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => (
    state.selectedCategory === null ?
      state : state.selectedCategory
  ));

  function handleClickTag(selectedId) {
    dispatch(selectCategoryTag(selectedId));
    dispatch(setCategories());
  }

  return (
    <PostFormBox>
      <PostCategoryTagsForm
        onClickTag={handleClickTag}
        selectedCategory={selectedCategory}
      />
    </PostFormBox>
  )
}
