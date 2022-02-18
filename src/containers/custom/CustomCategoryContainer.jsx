import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectCategoryTag,
  setRestaurants,
  sortRestaurantsByCategory,
} from '../../actions';

const Container = styled.div({
  marginRight: '24px',
});

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function CustomCategoryContainer({ restaurantsData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurantsData));
  }, []);

  const retaurants = useSelector((state) => (
    state.retaurants
  ))

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
    <Container>
      <p>무엇을 드시고 싶으세요?</p>
      {uniqCategories.map((category) => (
        <Buttons
          type="button"
          key={category.id}
          onClick={() => handleClickTag(category.category, category.id)}
          className={
            category.id === selectedCategory.id ?
              color : ""
          }
        >
          #{category.category}
        </Buttons>
      ))}
    </Container>
  )
}
