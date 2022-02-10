import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setCategories,
  sortByCategory,
  selectCategoryTag,
} from '../actions';

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

export default function HomeCategoryTagsContainer({ categoriesArr }) {
  const sortCategories = uniqBy(categoriesArr, 'category');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(categoriesArr));
  }, []);

  function handleClickTag(selectedName, selectedId) {
    dispatch(sortByCategory(selectedName));
    dispatch(selectCategoryTag(selectedId));
  }

  const selectedCategory = useSelector((state) => (
    state.selectedCategory === null ?
      state : state.selectedCategory
  ));
  const {color} = selectedCategory;
  console.log(selectedCategory);

  const sortedCategories = useSelector((state) => ({
    sortedCategories: state.sortedCategories,
  }));
  console.log(sortedCategories);

  return (
    <TagsBox>
      <p>무엇을 드시고 싶으세요?</p>
      {sortCategories.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj.category, obj.id)}
          className={
            obj.id === selectedCategory.id ?
              color : ""
          }
        >
          #{obj.category}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
