import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  setCategoryFilter,
} from '../../actions';

const CustomCategoryFilter = styled.div({
  marginBottom: '8.5rem',
});

const CustomCategoryFilter_title = styled.p({
  marginBottom: '1.25rem',
  paddingBottom: '0.5rem',
  fontSize: '1.25rem',
  color: '#828282',
  borderBottom: '1px solid #DADADA',
});

const CustomCategoryFilter_alert = styled.div({
  paddingBottom: '1rem',
  '& span': {
    background: 'hsl(200 100% 90%)',
    fontSize: '1rem',
  },
});

const CustomCategoryFilter_selectButton = styled.button({
  ':hover': {
    backgroundColor: '#FA625B',
    color: '#fff',
  },
  fontSize: '1rem',
  fontWeight: '700',
  padding: '7px 14px',
  borderRadius: '20px',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
});

export default function CustomCategoryFilterContainer() {
  const restaurantsData = useSelector((state) =>
    (state.restaurantsData));

  const uniqCategories = uniqBy(restaurantsData, 'category');

  const dispatch = useDispatch();

  function handleClickCategory(categoryValue) {
    dispatch(setCategoryFilter(categoryValue));
  }

  const selectedCategory = useSelector((state) =>
    (state.selectedCategory));
  const categoryColor = useSelector((state) =>
    (state.categoryColor));
  const alert = useSelector((state) =>
    (state.alert));

  return (
    <CustomCategoryFilter>
      <CustomCategoryFilter_title>
        무엇을 드시고 싶으세요?
      </CustomCategoryFilter_title>
      <CustomCategoryFilter_alert>
        <span>
          {alert === '드시고 싶은 것을 다시 선택해주세요!' ? alert : ''}
        </span>
      </ CustomCategoryFilter_alert>
      {uniqCategories.map((category) => (
        <CustomCategoryFilter_selectButton
          type='button'
          key={category.id}
          onClick={() => handleClickCategory(category.category)}
          className={
            selectedCategory === category.category ?
              categoryColor : 'select-button'
          }
        >
          {category.category}
        </CustomCategoryFilter_selectButton>
      ))}
    </CustomCategoryFilter>
  )
}
