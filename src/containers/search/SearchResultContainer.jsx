// import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import SearchResultRestaurants from '../../components/SearchResultRestaurants';
import RandomSituationPlaceRestaurants from '../../components/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../../components/RandomAgeCategoryRestaurants';

export default function SearchResultContainer() {
  const searchResultRestaurants = useSelector((state) => (
    state.searchResultRestaurants
  ));

  const searchKeyword = useSelector((state) => (
    state.searchKeyword
  ));

  const moodRestaurantsData = useSelector((state) => (
    state.moodRestaurantsData
  ));

  return (
    <>
      {searchResultRestaurants.length !== 0 ?
        <SearchResultRestaurants
          searchKeyword={searchKeyword}
          moodRestaurantsData={moodRestaurantsData}
        />
        :
        <>
          <p>결과가 없어요 ㅠㅠ</p>
          <RandomSituationPlaceRestaurants />
          <RandomAgeCategoryRestaurants />
        </>
      }
    </>
  )
}
