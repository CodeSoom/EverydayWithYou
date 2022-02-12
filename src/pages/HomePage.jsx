import styled from '@emotion/styled';

import {
  Link,
} from 'react-router-dom';

import HomeConditionTagsContainer from '../containers/HomeConditionTagsContainer';
import HomeRegionTagsContainer from '../containers/HomeRegionTagsContainer';
import HomeCategoryTagsContainer from '../containers/HomeCategoryTagsContainer';
import HomeRestaurantsContainer from '../containers/HomeRestaurantsContainer';

const HomePageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Tags = styled.div({
  textAlign: 'left',
  marginBottom: '48px',
  '& h4': {
    marginBottom: '48px',
  },
});

const TagSearch = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Post = styled.div({
  textAlign: 'center',
});

export default function HomePage({ restaurants }) {
  return (
    <HomePageLayout>
      <TagSearch>
        <Tags>
          <h2>어디 갈지 모르겠다구요? 👀</h2>
          <h4>순서대로 원하시는 태그를 선택해주세요!</h4>
          <HomeConditionTagsContainer
            restaurantsData={restaurants}
          />
          <HomeRegionTagsContainer
            restaurantsData={restaurants}
          />
          <HomeCategoryTagsContainer
            restaurantsData={restaurants}
          />
        </Tags>
        <HomeRestaurantsContainer />
      </ TagSearch>
      <Post>
        <Link to="/post"><h2>맛집 추천하기</h2></Link>
      </Post>
    </HomePageLayout>
  )
}
