import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import SearchResultRestaurants from '../../components/SearchResultRestaurants';
import RandomSituationPlaceRestaurants from '../../components/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../../components/RandomAgeCategoryRestaurants';

const InformationContainer = styled.div({
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#828282',
  height: '380px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const RandomRestaurantsContainer = styled.div({
  padding: '3rem',
  borderTop: 'solid 2px #C4C4C4',
})

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
          <InformationContainer>
            <p>결과가 없어요 ㅠㅠ</p>
          </InformationContainer>
          <RandomRestaurantsContainer>
            <RandomSituationPlaceRestaurants />
            <RandomAgeCategoryRestaurants />
          </RandomRestaurantsContainer>
        </>
      }
    </>
  )
}
