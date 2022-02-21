import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  setCategoryFilter,
} from '../../actions';

const Container = styled.div({
  marginRight: '24px',
});

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function CustomCategoryFilterContainer() {
  const selectedCategory = useSelector((state) =>
    (state.selectedCategory));
  const categoryColor = useSelector((state) =>
    (state.categoryColor));
  const restaurantsData = useSelector((state) =>
    (state.restaurantsData));

  const uniqCategories = uniqBy(restaurantsData, 'category');

  const dispatch = useDispatch();

  function handleClickCategory(categoryValue) {
    dispatch(setCategoryFilter(categoryValue));
  }

  return (
    <Container>
      <p>무엇을 드시고 싶으세요?</p>
      {uniqCategories.map((category) => (
        <Buttons
          type='button'
          key={category.id}
          onClick={() => handleClickCategory(category.category)}
          className={
            selectedCategory === category.category ? // 카테고리키워드가 들어왔을때
              categoryColor : ''
          }
        >
          #{category.category}
        </Buttons>
      ))}
    </Container>
  )
}
