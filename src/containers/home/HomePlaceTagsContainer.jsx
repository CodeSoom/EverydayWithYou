import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
  sortRestaurantsByPlace,
  selectPlaceTag,
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

export default function HomePlaceTagsContainer({ restaurantsData }) {
  const uniqPlaces = uniqBy(restaurantsData, 'place');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurantsData));
  }, []);

  function handleClickTag(selectedTag, selectedId) {
    dispatch(sortRestaurantsByPlace(selectedTag));
    dispatch(selectPlaceTag(selectedId));
  }

  const selectedPlace = useSelector((state) => (
    state.selectedPlace === null ?
      state : state.selectedPlace
  ));
  const { color } = selectedPlace;

  return (
    <TagsBox>
      <p>어디로 가고 싶나요?</p>
      {uniqPlaces.map((obj) => (
        <Hashtags
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj.place, obj.id)}
          className={
            obj.id === selectedPlace.id ?
              color : ""
          }
        >
            #{obj.place}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
