// 관심사: 화면 구성과 스토어에서 레스토랑 컨테이너에 뿌려주기
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

// import CustomPlaceContainer from '../containers/custom/CustomPlaceContainer';
// import CustomCategoryContainer from '../containers/custom/CustomCategoryContainer';
// import CustomRestaurantsContainer from '../containers/custom/CustomRestaurantsContainer';

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
  const newRestaurants = useSelector((state) => (
    state.restaurants
  ))

  function filter(restaurants, newRestaurants) {
    if (newRestaurants.length === 0) {
      return restaurants
    }

    return newRestaurants
  }

  const restaurantsData = filter(restaurants, newRestaurants)
  // ToDo restaurantsData 컨테이너에 뿌려주기

  return (
    <CustomPageLayout>
      <TitleBox>
        <h2>어디 갈지 모르겠다구요? 👀</h2>
      </TitleBox>
      <FormBox>
        {/* <CustomPlaceContainer
        />
        <CustomCategoryContainer
        />
        <CustomRestaurantsContainer />
       */}
      </FormBox>
    </CustomPageLayout>
  )
}
