// import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import SearchContainer from '../containers/search/SearchContainer';
import SearchResultContainer from '../containers/search/SearchResultContainer';
import RandomSituationPlaceRestaurants from '../components/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../components/RandomAgeCategoryRestaurants';

import { removeItem } from '../services/storage';

import {
  setRandomFilter,
} from '../actions';

export default function SearchPage({ restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  const searchResultRestaurants = useSelector((state) => (
    state.searchResultRestaurants
  ));

  if (window.history.back) {
    removeItem('searchResultRestaurants')
  }

  return (
    <>
      <SearchContainer
        restaurantsData={restaurants}
      />
      {!searchResultRestaurants ?
        <>
          <p>지역, 식당 또는 음식을 검색해 보세요.</p>
          <RandomSituationPlaceRestaurants />
          <RandomAgeCategoryRestaurants />
        </>
        : <SearchResultContainer />
      }
    </>
  )
}
