import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRestaurants,
  sortRestaurantsByPlace,
  selectPlaceTag,
} from '../../actions';

const Container = styled.div({
  marginRight: '24px',
});

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function CustomPlaceContainer({ restaurants }) {
  const uniqPlaces = uniqBy(restaurants, 'place');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
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
    <Container>
      <p>어디로 가고 싶나요?</p>
      {uniqPlaces.map((obj) => (
        <Buttons
          type="button"
          key={obj.id}
          onClick={() => handleClickTag(obj.place, obj.id)}
          className={
            obj.id === selectedPlace.id ?
              color : ""
          }
        >
          #{obj.place}
        </Buttons>
      ))}
    </Container>
  )
}
