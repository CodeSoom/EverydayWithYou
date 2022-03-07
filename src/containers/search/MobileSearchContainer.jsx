import { useDispatch, useSelector } from 'react-redux';

import MobileSearchForm from '../../components/search/MobileSearchForm';

import {
  changeSearchField,
  findRestaurants,
} from '../../actions';

export default function MobileSearchContainer({ restaurantsData }) {
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

  return (
    <>
      <MobileSearchForm
        searchField={searchField}
        onClickSearch={handleClickSearch}
        onChangeKeyword={handleChangeKeyword}
      />
    </>
  )
}
