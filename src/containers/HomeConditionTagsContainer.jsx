import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setConditions,
  getConditionTag,
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

  function handleClickTag(conditionObj) {
    dispatch(getConditionTag(conditionObj));
  }

  const getCondition = useSelector((state) => (
    state.getCondition === null ?
      state : state.getCondition
  ));
  const {color} = getCondition;

  return (
    <TagsBox>
      <p>어떤 상황인가요?</p>
      {conditionsArr.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj)}
          className={
            obj.id === getCondition.id ?
              color : ""
          }
        >
          #{obj.condition}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
