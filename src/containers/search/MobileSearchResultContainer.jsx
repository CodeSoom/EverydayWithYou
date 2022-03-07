import styled from '@emotion/styled';

import MobileRandomSituationPlaceRestaurants from '../../components/random/MobileRandomSituationPlaceRestaurants';
import MobileRandomAgeCategoryRestaurants from '../../components/random/MobileRandomAgeCategoryRestaurants';

import MobileSearchResultRestaurants from '../../components/search/MobileSearchResultRestaurants';

const InformationContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3.75vw',
  fontWeight: '700',
  textAlign: 'center',
  color: '#828282',
  width: '100%',
  height: '40vh',
  padding: '0 5%',
  '& p': {
    fontWeight: '400',
  },
})

export default function MobileSearchResultContainer({ searchResultRestaurants, searchKeyword }) {
  return (
    <>
      {searchResultRestaurants.length === 0 ?
        <>
          <InformationContainer>
            결과가 없어요 ㅠㅠ
            <p>다시 지역, 음식 또는 가게이름을 검색해 볼까요?</p>
          </InformationContainer>
          <MobileRandomSituationPlaceRestaurants />
          <MobileRandomAgeCategoryRestaurants />
        </>
        :
        <MobileSearchResultRestaurants
          searchResultRestaurants={searchResultRestaurants}
          searchKeyword={searchKeyword}
        />
      }
    </>
  )
}
