import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  setPlaceFilter,
} from '../../actions';

const Container = styled.div({
  height: '50%',
});

const TitleBox = styled.div({
  marginBottom: '1rem',
})

const Alert = styled.div({
  height: '1rem',
  '& span': {
    fontWeight: 'bold',
    background: 'hsl(200 100% 90%)',
  },
});

const SelectButton = styled.button({
  ':hover, :focus': {
    backgroundColor: 'rgba(255, 145, 170, 0.5)',
    color: '#fff',
  },
  padding: '8px 16px',
  margin: '4px',
  borderRadius: '20px',

});

export default function CustomPlaceFilterContainer() {
  const restaurantsData = useSelector((state) =>
    (state.restaurantsData));

  const uniqPlaces = uniqBy(restaurantsData, 'place');

  const dispatch = useDispatch();

  function handleClickPlace(placeValue) {
    dispatch(setPlaceFilter(placeValue));
  }

  const selectedPlace = useSelector((state) =>
    (state.selectedPlace));
  const placeColor = useSelector((state) =>
    (state.placeColor));
  const alert = useSelector((state) =>
    (state.alert));

  return (
    <Container>
      <TitleBox>
        <p>어디로 가고 싶나요?</p>
        <hr />
        <Alert>
          <span>
            {alert === '가고 싶으신 곳을 다시 선택해주세요 !' ? alert : ''}
          </span>
        </Alert>
      </TitleBox>
      {uniqPlaces.map((place) => (
        <SelectButton
          type="button"
          key={place.id}
          onClick={() => handleClickPlace(place.place)}
          className={
            selectedPlace === place.place ?
              placeColor : ''
          }
        >
          {place.place}
        </SelectButton>
      ))}
    </Container>
  )
}
