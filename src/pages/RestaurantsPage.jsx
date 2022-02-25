import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import {
  loadSearchResult,
} from '../actions';

const Mapbox = styled.div({
  width: '400px',
  height: '328px',
  position: 'relative',
  overflow: 'hidden',
})

export default function RestaurantsPage({ params }) {
  const { name } = params || useParams();

  const dispatch = useDispatch();

  const { kakao } = window;

  const placePosition = useSelector((state) => state.placePosition);
  const { lat, lon } = placePosition;
  console.log(placePosition)

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    dispatch(loadSearchResult(name, map, kakao));
  }, []);

  // const resultRestaurants = useSelector((state) => state.resultRestaurants);

  return (
    <Mapbox id="map">
    </Mapbox>
  )
}
