import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SearchForm from '../../components/search/SearchForm';

import { saveItem } from '../../services/storage';

import {
  changeSearchField,
  findRestaurants,
} from '../../slice';

export default function SearchContainer({ modalEffect, restaurantsData }) {
  const dispatch = useDispatch();

  function handleClickSearch() {
    dispatch(findRestaurants({ restaurantsData }));
  }

  function handleChangeKeyword({ name, value }) {
    dispatch(changeSearchField({ name, value }));
  }

  const searchField = useSelector((state) => (
    state.searchField
  ));

  useEffect(() => {
    saveItem('searchKeyword', searchField.searchKeyword);
  }, [searchField.searchKeyword]);

  return (
    <SearchForm
      modalEffect={modalEffect}
      searchKeyword={searchField.searchKeyword}
      onClickSearch={handleClickSearch}
      onChangeKeyword={handleChangeKeyword}
    />
  );
}
