import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import PostCategoryTagsForm from '../components/PostCategoryTagsForm';

import {
  selectCategoryTag,
} from '../actions';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export default function PostFormContainer() {
  // ToDoDelete 상태 잘 바뀌는지 확인용
  const seletedCategory = useSelector((state) => ({
    categories: state.categories,
  }));
  console.log(seletedCategory)

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
