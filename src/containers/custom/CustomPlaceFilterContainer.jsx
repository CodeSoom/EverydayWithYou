import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { setPlaceFilter } from '../../slice';

import mq from '../../shared/media-query';

const CustomPlaceFilter = styled.div(() => ({
  marginTop: '20%',
}));

const CustomPlaceFilter_title = styled.div(() => mq({
  color: '#828282',
  fontSize: ['4vw', '1.25rem', '1.25rem'],
  borderBottom: '1px solid #DADADA',
  paddingBottom: ['0.8vh', '0.5rem', '0.5rem'],
  marginBottom: ['1.65vh', '1rem', '1rem'],
  '& span': {
    background: 'hsl(200 100% 90%)',
    fontSize: ['4vw', '1.25rem', '1.25rem'],
    color: '#4F4F4F',
  },
}));

const CustomPlaceFilter_selectButton = styled.button(() => mq({
  ':hover': {
    backgroundColor: '#FA625B',
    color: '#fff',
  },
  fontWeight: '700',
  fontSize: ['3.5vw', '1rem', '1rem'],
  padding: ['2.13vw 4.26vw', '7px 14px', '7px 14px'],
  borderRadius: ['6vw', '20px', '20px'],
  marginRight: ['1.75vw', '0.5rem', '0.5rem'],
  marginBottom: ['1.75vw', '0.5rem', '0.5rem'],
}));

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
        {alert == '가고 싶으신 곳을 다시 선택해주세요 !' ?
          <span>{alert}</span> : '어디로 가고 싶나요?'}
      </CustomPlaceFilter_title>
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
  );
}
