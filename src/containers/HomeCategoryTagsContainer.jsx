import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
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

export default function HomeCategoryTagsContainer({ restaurantsData }) {
  const uniqCategories = uniqBy(restaurantsData, 'category');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurantsData));
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

  const sortedRestaurants = useSelector((state) => ({
    sortedRestaurants: state.sortedRestaurants,
  }));
  console.log(sortedRestaurants);

  return (
    <TagsBox>
      <p>무엇을 드시고 싶으세요?</p>
      {uniqCategories.map((obj) => (
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
