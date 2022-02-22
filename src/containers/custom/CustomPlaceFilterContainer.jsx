import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  setPlaceFilter,
} from '../../actions';

const Container = styled.div({
  marginRight: '24px',
});

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function CustomPlaceFilterContainer() {
  const selectedPlace = useSelector((state) =>
    (state.selectedPlace));
  const placeColor = useSelector((state) =>
    (state.placeColor));
  const restaurantsData = useSelector((state) =>
    (state.restaurantsData));

  const uniqPlaces = uniqBy(restaurantsData, 'place');

  const dispatch = useDispatch();

  function handleClickPlace(placeValue) {
    dispatch(setPlaceFilter(placeValue));
  }

  return (
    <Container>
      <p>어디로 가고 싶나요?</p>
      {uniqPlaces.map((place) => (
        <Buttons
          type="button"
          key={place.id}
          onClick={() => handleClickPlace(place.place)}
          className={
            selectedPlace === place.place ?
              placeColor : ''
          }
        >
          #{place.place}
        </Buttons>
      ))}
    </Container>
  )
}
