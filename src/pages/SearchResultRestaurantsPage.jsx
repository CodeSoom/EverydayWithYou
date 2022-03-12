import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetailContainer from '../containers/restaurants/RestaurantsDetailContainer';
import RestaurantsMapContainer from '../containers/restaurants/RestaurantsMapContainer';
import RestaurantsAfterContainer from '../containers/restaurants/RestaurantsAfterContainer';

import SearchForm from '../components/search/SearchForm';

import { createMap } from '../kakao';
import { nameFilter } from '../utils';
import { saveItem } from '../services/storage'

import {
  loadResultRestaurants,
} from '../actions';

const RestaurantsPageLayout = styled.div({
  display: 'flex',
});

export default function SearchResultRestaurantsPage({ params, restaurants }) {
  const { name } = params || useParams();

  const dispatch = useDispatch();

  const { lat, lon } = useSelector((state) => state.placePosition);

  useEffect(() => {
    const map = createMap(lat, lon)
    dispatch(loadResultRestaurants(name, map));
  }, []);

  const selectedRestaurant = nameFilter(restaurants, name)
  saveItem('selectedRestaurant', JSON.stringify(selectedRestaurant));

  const searchField = useSelector((state) => (
    state.searchField
  ));

  return (
    <RestaurantsPageLayout>
      <SearchForm
        searchField={searchField}
      />
      <RestaurantsDetailContainer />
      <RestaurantsMapContainer />
      <RestaurantsAfterContainer />
    </RestaurantsPageLayout>
  )
}
