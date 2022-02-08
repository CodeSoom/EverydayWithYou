import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setConditions,
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

export default function HomeConditionTagsContainer({ conditionsArr }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConditions(conditionsArr));
  }, []);

  // ToDo delete 값잘들어오나 확인용
  useSelector((state) => ({
    newConditions: state.newConditions,
  }));

  return (
    <TagsBox>
      <p>어떤 상황인가요?</p>
      {conditionsArr.map((obj) => (
        <Hashtags
          type="Hashtags"
          key={obj.id}
        >
          #{obj.condition}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
