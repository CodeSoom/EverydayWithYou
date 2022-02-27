import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetailContainer from '../containers/restaurants/RestaurantsDetailContainer';
import RestaurantsAfterContainer from '../containers/restaurants/RestaurantsAfterContainer';

import { createMap } from '../kakao';

import {
  loadResultRestaurants,
} from '../actions';

const RestaurantsPageLayout = styled.div({
  display: 'flex',
});

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
      <RestaurantsDetailContainer />
      <RestaurantsAfterContainer />
    </RestaurantsPageLayout>
  )
}
