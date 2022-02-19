import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useDispatch } from 'react-redux';

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

export default function PostPlaceTagsContainer({ restaurants }) {
  const dispatch = useDispatch();

  function handleClickTag(selectedId) {
    dispatch(selectPlaceTag(selectedId));
  }

  const uniqPlaces = uniqBy(restaurants, 'place');

  return (
    <TagsBox>
      <p>어디인가요?</p>
      {uniqPlaces.map((place) => (
        <Hashtags
          type="button"
          key={place.id}
          onClick={() => handleClickTag(place.id)}
        >
          #{place.place}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
