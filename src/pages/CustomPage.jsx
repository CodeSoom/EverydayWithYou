// 관심사: 화면 구성과 레스토랑 저장, 스토어에서 레스토랑 컨테이너에 뿌려주기
import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CustomCategoryFilterContainer from '../containers/custom/CustomCategoryFilterContainer';
import CustomPlaceFilterContainer from '../containers/custom/CustomPlaceFilterContainer';
import CustomRestaurantsContainer from '../containers/custom/CustomRestaurantsContainer';

import {
  setRestaurantsData,
} from '../actions';

const CustomPageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '48px 36px',
});

const TitleBox = styled.div({
  marginBottom: '36px',
});

const FormBox = styled.div({
  display: 'flex',
});

export default function CustomPage({ restaurants }) {
  const dispatch = useDispatch();

  const situationRestaurantsData = useSelector((state) => (
    state.situationRestaurantsData
  ))

  function filter(restaurants, situationRestaurantsData) {
    if (situationRestaurantsData.length === 0) {
      return restaurants
    }

    return situationRestaurantsData
  }

  // 상황별로 솔팅된 레스토랑 없으면 최초 레스토랑으로 셋함
  const restaurantsData = filter(restaurants, situationRestaurantsData)

  // 최초 레스토랑 혹은 상황별로 솔팅된 레스토랑으로 업데이트
  useEffect(() => {
    dispatch(setRestaurantsData(restaurantsData));
  }, []);

  return (
    <CustomPageLayout>
      <TitleBox>
        <h2>어디 갈지 모르겠다구요? 👀</h2>
      </TitleBox>
      <FormBox>
        <CustomCategoryFilterContainer />
        <CustomPlaceFilterContainer />
        <CustomRestaurantsContainer />
      </FormBox>
    </CustomPageLayout>
  )
}
