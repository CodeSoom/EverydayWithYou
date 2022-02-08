import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setCategories,
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

  // ToDo delete 값잘들어오나 확인용
  useSelector((state) => ({
    newCategories: state.newCategories,
  }));

  return (
    <TagsBox>
      <p>무엇을 드시고 싶으세요?</p>
      {categoriesArr.map((obj) => (
        <Hashtags
          type="Hashtags"
          key={obj.id}
        >
          #{obj.category}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
