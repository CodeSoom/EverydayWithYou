import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
  sortRestaurantsBySituation,
  selectSituationTag,
} from '../../actions';

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

export default function HomeSituationTagsContainer({ restaurantsData }) {
  const uniqSituations = uniqBy(restaurantsData, 'situation');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurantsData));
  }, []);

  function handleClickTag(selectedTag, selectedId) {
    dispatch(sortRestaurantsBySituation(selectedTag));
    dispatch(selectSituationTag(selectedId));
  }

  const selectedSituation = useSelector((state) => (
    state.selectedSituation === null ?
      state : state.selectedSituation
  ));
  const { color } = selectedSituation;

  return (
    <TagsBox>
      <p>어떤 상황인가요?</p>
      {uniqSituations.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj.situation, obj.id)}
          className={
            obj.id === selectedSituation.id ?
              color : ""
          }
        >
          #{obj.situation}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
