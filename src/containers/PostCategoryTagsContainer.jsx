import { useSelector, useDispatch } from 'react-redux';

import PostCategoryTagsForm from '../components/PostCategoryTagsForm';

import {
  selectCategoryTag,
  setRestaurants,
} from '../actions';

import styled from '@emotion/styled';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export default function PostCategoryTagsContainer() {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => (
    state.selectedCategory === null ?
      state : state.selectedCategory
  ));

  function handleClickTag(selectedId) {
    dispatch(selectCategoryTag(selectedId));
    dispatch(setRestaurants());
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
