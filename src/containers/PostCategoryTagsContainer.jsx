import { useSelector, useDispatch } from 'react-redux';

import PostCategoryTagsForm from '../components/PostCategoryTagsForm';

import {
  selectCategoryTag,
  setSelectedCategories,
} from '../actions';

import PostFormBox from '../style/PostFormBox';

export default function PostCategoryTagsContainer() {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
  }))
  console.log(selectedCategory)

  function handleClickTag(selectedId) {
    dispatch(selectCategoryTag(selectedId));
    dispatch(setSelectedCategories());
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
