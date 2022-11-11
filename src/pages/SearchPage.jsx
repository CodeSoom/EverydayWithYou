import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import SearchContainer from '../containers/search/SearchContainer';
import SearchResultContainer from '../containers/search/SearchResultContainer';

import RandomSituationPlaceRestaurants from '../components/random/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../components/random/RandomAgeCategoryRestaurants';

import { setRandomFilter } from '../slice';

import mq from '../shared/media-query';

const SearchPageLayout = styled.div(() => mq({
  backgroundColor: '#F4F4F4',
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
}));

const InformationContainer = styled.div(() => mq({
  marginTop: '7rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: ['4.5vw', '1.5rem', '1.5rem'],
  fontWeight: '700',
  color: '#828282',
  height: '40vh',
  padding: ['0 5%', 0, 0],
}));

export default function SearchPage({ modalEffect, restaurants }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRandomFilter(restaurants));
  }, []);

  const searchResultRestaurants = useSelector((state) => (
    state.searchResultRestaurants
  ));
  const searchKeyword = useSelector((state) => (
    state.searchKeyword
  ));

  return (
    <>
      <SearchContainer
        modalEffect={modalEffect}
        restaurantsData={restaurants}
      />
      <SearchPageLayout className={modalEffect}>
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
            searchKeyword={searchKeyword}
          />
        }
      </SearchPageLayout>
    </>
  );
}
