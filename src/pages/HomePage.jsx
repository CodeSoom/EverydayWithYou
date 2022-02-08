import HomeConditionTagsContainer from '../containers/HomeConditionTagsContainer';
/* import HomeRegionTagsContainer from '../containers/HomeRegionTagsContainer'; */
/* import HomeCategoryTagsContainer from '../containers/HomeCategoryTagsContainer'; */

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
  return (
    <HomePageLayout>
      <HomeConditionTagsContainer
        restaurants={restaurants}
      />
      {/* <HomeRegionTagsContainer/>
      <HomeCategoryTagsContainer /> */}
      <Link to="/post">맛집 추천하기</Link>
    </HomePageLayout>
  )
}
