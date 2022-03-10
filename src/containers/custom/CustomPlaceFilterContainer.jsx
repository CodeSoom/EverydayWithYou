import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  setPlaceFilter,
} from '../../actions';

const CustomPlaceFilter = styled.div({
});

const CustomPlaceFilter_title = styled.p({
  marginBottom: '1.25rem',
  paddingBottom: '0.5rem',
  fontSize: '1.25rem',
  color: '#828282',
  borderBottom: '1px solid #DADADA',
})

const CustomPlaceFilter_alert = styled.div({
  paddingBottom: '1rem',
  '& span': {
    background: 'hsl(200 100% 90%)',
    fontSize: '1rem',
  },
});

const CustomPlaceFilter_selectButton = styled.button({
  ':hover': {
    backgroundColor: '#FA625B',
    color: '#fff',
  },
  fontSize: '1rem',
  fontWeight: '700',
  padding: '7px 14px',
  borderRadius: '20px',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
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
    <CustomPlaceFilter>
      <CustomPlaceFilter_title>
        어디로 가고 싶나요?
      </CustomPlaceFilter_title>
      <CustomPlaceFilter_alert>
        <span>
          {alert === '가고 싶으신 곳을 다시 선택해주세요 !' ? alert : ''}
        </span>
      </CustomPlaceFilter_alert>
      {uniqPlaces.map((place) => (
        <CustomPlaceFilter_selectButton
          type="button"
          key={place.id}
          onClick={() => handleClickPlace(place.place)}
          className={
            selectedPlace === place.place ?
              placeColor : 'select-button'
          }
        >
          {place.place}
        </CustomPlaceFilter_selectButton>
      ))}
    </CustomPlaceFilter>
  )
}
