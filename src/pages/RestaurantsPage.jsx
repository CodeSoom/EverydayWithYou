import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetailContainer from '../containers/restaurants/RestaurantsDetailContainer';

import { createMap } from '../utils';

import {
  loadResultRestaurants,
} from '../actions';

const RestaurantsPageLayout = styled.div({
});

const Map = styled.div({
  width: '400px',
  height: '328px',
  position: 'relative',
  overflow: 'hidden',
})

export default function RestaurantsPage({ params }) {
  const { name } = params || useParams();

  const dispatch = useDispatch();

  const { lat, lon } = useSelector((state) => state.placePosition);

  useEffect(() => {
    const map = createMap(lat, lon)
    dispatch(loadResultRestaurants(name, map));
  }, []);

  return (
    <RestaurantsPageLayout>
      <Map id="map"></Map>
      <RestaurantsDetailContainer />
    </RestaurantsPageLayout>
  )
}
