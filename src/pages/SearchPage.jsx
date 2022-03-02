// import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import SearchContainer from '../containers/search/SearchContainer';
import SearchResultRestaurantsContainer from '../containers/search/SearchResultRestaurantsContainer';
import RecommendationContainer from '../containers/RecommendationContainer';

import { loadItem, removeItem } from '../services/storage';

import {
  setSearchKeyword,
  findRestaurants,
} from '../actions';

export default function SearchPage({ restaurants }) {
  const dispatch = useDispatch();

  function handleClickSearch() {
    dispatch(findRestaurants({ restaurants }))
    location.reload()
  }

  function handleChangeKeyword({ value }) {
    dispatch(setSearchKeyword({ value }))
  }

  const searchResultRestaurants = JSON.parse(
    loadItem('searchResultRestaurants'),
  );

  if (window.history.back) {
    removeItem('searchResultRestaurants')
  }

  function condition(searchResultRestaurants) {
    if (!searchResultRestaurants) {
      return (
        <>
          <p>지역, 식당 또는 음식을 검색해 보세요.</p>
          <RecommendationContainer />
        </>
      )
    } else if (searchResultRestaurants.length === 0) {
      return (
        <>
          <p>결과가 없어요 ㅠㅠ</p>
          <RecommendationContainer />
        </>
      )
    } else if (searchResultRestaurants.length !== 0) {
      return (
        <>
          <SearchResultRestaurantsContainer
            searchResultRestaurants={searchResultRestaurants}
          />
        </>
      )
    }
  }

  const notificationAndResult = condition(searchResultRestaurants)

  return (
    <>
      <SearchContainer
        onChangeKeyword={handleChangeKeyword}
        onClickSearch={handleClickSearch}
      />
      {notificationAndResult}
    </>
  )
}
