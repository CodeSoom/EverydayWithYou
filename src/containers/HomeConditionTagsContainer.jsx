import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
  sortRestaurantsByCondition,
  selectConditionTag,
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

export default function HomeConditionTagsContainer({ restaurantsData }) {
  const uniqConditions = uniqBy(restaurantsData, 'condition');
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurantsData));
  }, []);

  function handleClickTag(selectedTag, selectedId) {
    dispatch(sortRestaurantsByCondition(selectedTag));
    dispatch(selectConditionTag(selectedId));
  }

  const selectedCondition = useSelector((state) => (
    state.selectedCondition === null ?
      state : state.selectedCondition
  ));
  const {color} = selectedCondition;

  const sortedRestaurantsByCondition = useSelector((state) => ({
    sortedRestaurantsByCondition: state.sortedRestaurantsByCondition,
  }));
  console.log(sortedRestaurantsByCondition);

  return (
    <TagsBox>
      <p>어떤 상황인가요?</p>
      {uniqConditions.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj.condition, obj.id)}
          className={
            obj.id === selectedCondition.id ?
              color : ""
          }
        >
          #{obj.condition}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
