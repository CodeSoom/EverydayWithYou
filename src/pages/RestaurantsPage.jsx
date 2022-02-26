import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetailContainer from '../containers/restaurants/RestaurantsDetailContainer';

import {
  loadResultRestaurants,
} from '../actions';

const RestaurantsPageLayout = styled.div({

});

const Mapbox = styled.div({
  width: '400px',
  height: '328px',
  position: 'relative',
  overflow: 'hidden',
})

export default function RestaurantsPage({ params }) {
  const { name } = params || useParams();

  const dispatch = useDispatch();

  const { lat, lon } = useSelector((state) => state.placePosition);

  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map');

    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    dispatch(loadResultRestaurants(name, kakao, map));
  }, []);

  return (
    <RestaurantsPageLayout>
      <Mapbox id="map"></Mapbox>
      <RestaurantsDetailContainer />
    </RestaurantsPageLayout>
  )
}
