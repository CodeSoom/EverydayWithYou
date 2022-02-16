import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
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

export default function PostPlaceTagsContainer({ restaurantsData }) {
  const dispatch = useDispatch();

  function handleClickTag(selectedId) {
    dispatch(selectPlaceTag(selectedId));
  }

  const selectedPlace = useSelector((state) => (
    state.selectedPlace === null ?
      state : state.selectedPlace
  ));
  const { color } = selectedPlace;

  const uniqPlaces = uniqBy(restaurantsData, 'place');

  return (
    <TagsBox>
      <p>어디인가요?</p>
      {uniqPlaces.map((place) => (
        <Hashtags
          type="button"
          key={place.id}
          onClick={() => handleClickTag(place.id)}
          className={
            place.id === selectedPlace.id ?
              color : ""
          }
        >
          #{place.place}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
