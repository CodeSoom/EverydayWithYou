import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import SearchContainer from '../../containers/search/SearchContainer';
import SearchResultContainer from '../../containers/search/SearchResultContainer';
import RandomSituationPlaceRestaurants from '../../components/random/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../../components/random/RandomAgeCategoryRestaurants';

import {
  setRandomFilter,
} from '../../actions';

const SearchPageLayout = styled.div({
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  marginLeft: '18.75rem',
})

const InformationContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '23.75rem',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#828282',
})

export default function SearchPage({ restaurants }) {
  const searchResultRestaurants = useSelector((state) => (
    state.searchResultRestaurants
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  return (
    <SearchPageLayout>
      <SearchContainer
        restaurantsData={restaurants}
      />
      {!searchResultRestaurants ?
        <>
          <InformationContainer>
            <p>지역, 음식 또는 가게이름을 검색해 보세요.</p>
          </InformationContainer>
          <RandomSituationPlaceRestaurants />
          <RandomAgeCategoryRestaurants />
        </>
        : <SearchResultContainer
          searchResultRestaurants={searchResultRestaurants}
        />
      }
    </SearchPageLayout>
  )
}
