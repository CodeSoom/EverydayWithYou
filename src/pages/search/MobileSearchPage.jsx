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
  marginLeft: '300px',
  backgroundColor: '#F4F4F4',
  backgroundSize: 'cover',
  height: '100vh',
})

const InformationContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#828282',
  height: '23.75rem',
})

const RandomRestaurantsContainer = styled.div({
  padding: '3rem',
  borderTop: 'solid 2px #C4C4C4',
})

export default function MobileSearchPage({ restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants))
  }, []);

  const searchResultRestaurants = useSelector((state) => (
    state.searchResultRestaurants
  ));

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
          <RandomRestaurantsContainer>
            <RandomSituationPlaceRestaurants />
            <RandomAgeCategoryRestaurants />
          </RandomRestaurantsContainer>
        </>
        : <SearchResultContainer />
      }
    </SearchPageLayout>
  )
}
