import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectCategoryTag,
  setRestaurants,
  sortRestaurantsByCategory,
} from '../../actions';

const TagsBox = styled.div({
  textAlign: 'left',
});

const Hashtags = styled.button({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function HomeCategoryTagsContainer({ restaurantsData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurantsData));
  }, []);

  function handleClickTag(selectedTag, selectedId) {
    dispatch(sortRestaurantsByCategory(selectedTag));
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
          onClick={() => handleClickTag(category.category, category.id)}
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
