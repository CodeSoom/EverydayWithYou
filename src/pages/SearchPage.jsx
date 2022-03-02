// import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import SearchContainer from '../containers/search/SearchContainer';

import { removeItem } from '../services/storage';

export default function SearchPage({ restaurants }) {
  if (window.history.back) {
    removeItem('searchResultRestaurants')
  }

  function condition(searchResultRestaurants) {
    if (!searchResultRestaurants) {
      return (
        <>
          <SearchContainer
            restaurantsData={restaurants}
          />
          <p>지역, 식당 또는 음식을 검색해 보세요.</p>
        </>
      )
    } else if (searchResultRestaurants.length === 0) {
      return (
        <>
          <SearchContainer
            restaurantsData={restaurants}
          />
          <p>결과가 없어요 ㅠㅠ</p>
        </>
      )
    } else if (searchResultRestaurants.length !== 0) {
      return (
        <>
          <SearchContainer
            restaurantsData={restaurants}
          />
        </>
      )
    }
  }

  const searchResultRestaurants = useSelector((state) => (
    state.searchResultRestaurants
  ));

  const notificationAndResult = condition(searchResultRestaurants);

  return (
    <>
      {notificationAndResult}
    </>
  )
}
