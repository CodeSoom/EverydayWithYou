import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setCategories,
  getCategoryTag,
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(categoriesArr));
  }, []);

  function handleClickTag(categoryObj) {
    dispatch(getCategoryTag(categoryObj));
  }

  const getCategory = useSelector((state) => (
    state.getCategory === null ?
      state : state.getCategory
  ));
  const {color} = getCategory;

  return (
    <TagsBox>
      <p>무엇을 드시고 싶으세요?</p>
      {categoriesArr.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj)}
          className={
            obj.id === getCategory.id ?
              color : ""
          }
        >
          #{obj.category}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
