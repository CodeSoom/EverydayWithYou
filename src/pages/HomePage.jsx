import HomeConditionTagsContainer from '../containers/HomeConditionTagsContainer';
import HomeRegionTagsContainer from '../containers/HomeRegionTagsContainer';
import HomeCategoryTagsContainer from '../containers/HomeCategoryTagsContainer';

import styled from '@emotion/styled';

import {
  Link,
} from 'react-router-dom';

const HomePageLayout = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export default function HomePage({ restaurants }) {
  const conditionsArr = restaurants.map((obj) => {
    return obj.condition
  });
  const uniqueConditionsArr = [...new Set(conditionsArr)];

  const regionsArr = restaurants.map((obj) => {
    return obj.region
  });
  const uniqueRegionsArr = [...new Set(regionsArr)];

  const categoriesArr = restaurants.map((obj) => {
    return obj.category
  });
  const uniqueCategoriesArr = [...new Set(categoriesArr)];

  console.log(uniqueConditionsArr);
  console.log(uniqueRegionsArr);
  console.log(uniqueCategoriesArr);

  return (
    <HomePageLayout>
      <HomeConditionTagsContainer
        uniqueConditionsArr={uniqueConditionsArr}
      />
      <HomeRegionTagsContainer
        uniqueRegionsArr={uniqueRegionsArr}
      />
      <HomeCategoryTagsContainer
        uniqueCategoriesArr={uniqueCategoriesArr}
      />
      <Link to="/post">맛집 추천하기</Link>
    </HomePageLayout>
  )
}
