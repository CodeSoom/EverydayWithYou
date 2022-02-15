import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectCategoryTag,
} from '../../actions';

const TagsBox = styled.div({
  textAlign: 'left',
  marginBottom: '24px',
});

const Hashtags = styled.button({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function PostCategoryTagsContainer({ restaurantsData }) {
  const dispatch = useDispatch();

  function handleClick(selectedId) {
    dispatch(selectCategoryTag(selectedId));
  }

  const selectedCategory = useSelector((state) => (
    state.selectedCategory === null ?
      state : state.selectedCategory
  ));
  const { color } = selectedCategory;

  const uniqCategories = uniqBy(restaurantsData, 'category');

  return (
    <TagsBox>
      <p>무엇을 드시고 싶으세요?</p>
      {uniqCategories.map((category) => (
        <Hashtags
          type="button"
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={
            category.id === selectedCategory.id ?
              color : ""
          }
        >
          #{category.category}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
