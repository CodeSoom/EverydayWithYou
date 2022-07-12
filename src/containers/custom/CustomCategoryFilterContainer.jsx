import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { setCategoryFilter } from '../../slice';

import mq from '../../shared/media-query';

const CustomCategoryFilter_title = styled.div(() => mq({
  color: '#828282',
  fontSize: ['4vw', '1.25rem', '1.25rem'],
  borderBottom: '1px solid #DADADA',
  paddingBottom: ['0.8vh', '0.5rem', '0.5rem'],
  marginBottom: ['1.65vh', '1rem', '1rem'],
  '& span': {
    background: 'hsl(200 100% 90%)',
    fontSize: ['4vw', '1.25rem', '1.25rem'],
    color: '#4F4F4F',
  },
}));

const CustomCategoryFilter_selectButton = styled.button(() => mq({
  ':hover': {
    backgroundColor: '#FA625B',
    color: '#fff',
  },
  fontWeight: '700',
  fontSize: ['3.5vw', '1rem', '1rem'],
  padding: ['2.13vw 4.26vw', '7px 14px', '7px 14px'],
  borderRadius: ['6vw', '20px', '20px'],
  marginRight: ['1.75vw', '0.5rem', '0.5rem'],
  marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
}));

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
    <div>
      <CustomCategoryFilter_title>
        {alert == '드시고 싶은 것을 다시 선택해주세요!' ?
          <span>{alert}</span> : '무엇을 드시고 싶으세요?'}
      </CustomCategoryFilter_title>
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
    </div>
  );
}
