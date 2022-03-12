import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import MobileSearchContainer from '../containers/search/MobileSearchContainer';

import MobileSearchResultContainer from '../containers/search/MobileSearchResultContainer';

/* import MobileRandomSituationPlaceRestaurants from '../components/random/MobileRandomSituationPlaceRestaurants';
import MobileRandomAgeCategoryRestaurants from '../components/random/MobileRandomAgeCategoryRestaurants'; */

import {
  setRandomFilter,
} from '../actions';

const SearchPageLayout = styled.div({
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  marginLeft: '15.5vw',
  zIndex: '-1',
})

const InformationContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3.75vw',
  fontWeight: '700',
  textAlign: 'center',
  color: '#828282',
  width: '100%',
  height: '40vh',
  padding: '0 10%',
})

export default function MobileSearchPage({ restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  const searchResultRestaurants = useSelector((state) => (
    state.searchResultRestaurants
  ));
  const searchKeyword = useSelector((state) => (
    state.searchKeyword
  ));

  return (
    <SearchPageLayout>
      <MobileSearchContainer
        restaurantsData={restaurants}
      />
      {!searchResultRestaurants ?
        <>
          <InformationContainer>
            <p>지역, 음식 또는 가게이름을 검색해 보세요.</p>
          </InformationContainer>
          <MobileRandomSituationPlaceRestaurants />
          <MobileRandomAgeCategoryRestaurants />
        </>
        : <MobileSearchResultContainer
          searchResultRestaurants={searchResultRestaurants}
          searchKeyword={searchKeyword}
        />
      }
    </SearchPageLayout>
  )
}
