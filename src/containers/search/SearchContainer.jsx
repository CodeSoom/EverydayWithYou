// import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import SearchForm from '../../components/SearchForm';
import MoodSortRestaurants from '../../components/MoodSortRestaurants';

import {
  changeSearchField,
  findRestaurants,
} from '../../actions';

export default function SearchPage({ restaurantsData }) {
  const dispatch = useDispatch();

  function handleClickSearch() {
    dispatch(findRestaurants({ restaurantsData }))
  }

  function handleChangeKeyword({ name, value }) {
    dispatch(changeSearchField({ name, value }))
  }

  const searchField = useSelector((state) => (
    state.searchField
  ));

  const moodRestaurantsData = useSelector((state) => (
    state.moodRestaurantsData
  ));

  return (
    <>
      <SearchForm
        searchField={searchField}
        onClickSearch={handleClickSearch}
        onChangeKeyword={handleChangeKeyword}
      />
      <MoodSortRestaurants
        searchField={searchField}
        moodRestaurantsData={moodRestaurantsData}
      />
    </>
  )
}
