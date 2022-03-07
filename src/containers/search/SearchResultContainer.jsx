import styled from '@emotion/styled';

import RandomSituationPlaceRestaurants from '../../components/random/RandomSituationPlaceRestaurants';
import RandomAgeCategoryRestaurants from '../../components/random/RandomAgeCategoryRestaurants';

import SearchResultRestaurants from '../../components/search/SearchResultRestaurants';

const InformationContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#828282',
  height: '23.75rem',
  '& p': {
    fontWeight: '400',
  },
})

export default function SearchResultContainer({ searchResultRestaurants, searchKeyword }) {
  return (
    <>
      {searchResultRestaurants.length === 0 ?
        <>
          <InformationContainer>
            결과가 없어요 ㅠㅠ
            <p>다시 지역, 음식 또는 가게이름을 검색해 볼까요?</p>
          </InformationContainer>
          <RandomSituationPlaceRestaurants />
          <RandomAgeCategoryRestaurants />
        </>
        :
        <SearchResultRestaurants
          searchResultRestaurants={searchResultRestaurants}
          searchKeyword={searchKeyword}
        />
      }
    </>
  )
}
