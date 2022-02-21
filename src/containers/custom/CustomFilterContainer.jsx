// 관심사: 필터레스토랑 정보 베이스로 필터추가
import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  setCategoryFilter,
  setPlaceFilter,
} from '../../actions';

const Container = styled.div({
  marginRight: '24px',
});

const Buttons = styled.button({
  padding: '8px',
  margin: '4px',
  borderRadius: '12px',
});

export default function CustomFilterContainer() {
  const dispatch = useDispatch();


  // 클릭한 음식종류 이름 받아서 솔팅
  function handleClickCategory(categoryValue) {
    dispatch(setCategoryFilter(categoryValue));
  }

  // 클릭한 장소 이름 받아서 솔팅
  function handleClickPlace(placeValue) {
    dispatch(setPlaceFilter(placeValue));
  }

  // 그려주기용
  const categoryColor = useSelector((state) => (state.categoryColor));
  const placeColor = useSelector((state) => (state.placeColor));
  const selectedCategory = useSelector((state) => (state.selectedCategory));
  const selectedPlace = useSelector((state) => (state.selectedPlace));

  const restaurantsData = useSelector((state) => (state.restaurantsData));

  const uniqCategories = uniqBy(restaurantsData, 'category'); // 상황별로 솔팅된(혹은 기존) 레스토랑 카테고리기준으로 고유값 솔팅
  const uniqPlaces = uniqBy(restaurantsData, 'place'); // 상황별로 솔팅된(혹은 기존) 레스토랑 카테고리기준으로 고유값 솔팅

  return (
    <>
      <Container>
        <p>무엇을 드시고 싶으세요?</p>
        {uniqCategories.map((category) => (
          <Buttons
            type='button'
            key={category.id}
            onClick={() => handleClickCategory(category.category)}
            className={
              selectedCategory === category.category ? // 카테고리키워드가 들어왔을때
                categoryColor : ''
            }
          >
            #{category.category}
          </Buttons>
        ))}
      </Container>
      <Container>
        <p>어디로 가고 싶나요?</p>
        {uniqPlaces.map((place) => (
          <Buttons
            type="button"
            key={place.id}
            onClick={() => handleClickPlace(place.place)}
            className={
              selectedPlace === place.place ? // 장소키워드가 들어왔을때
                placeColor : ''
            }
          >
            #{place.place}
          </Buttons>
        ))}
      </Container>
    </>
  )
}
