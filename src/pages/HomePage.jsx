import HomeConditionTagsContainer from '../containers/HomeConditionTagsContainer';
import HomeRegionTagsContainer from '../containers/HomeRegionTagsContainer';
import HomeCategoryTagsContainer from '../containers/HomeCategoryTagsContainer';

import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

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

const TagsLayout = styled.div({
  textAlign: 'left',
  marginRight: '48px',
  "& h2": {
    marginBottom: '24px',
  },
});

const PostLayout = styled.h1({
  width: '100%',
});

export default function HomePage({ restaurants }) {
  const sortCoditions = uniqBy(restaurants, 'condition');
  const conditionsArr = sortCoditions.map((obj) => {
    const { name, id, condition } = obj;
    return { id: id, name: name, condition: condition };
  });

  const sortRegions = uniqBy(restaurants, 'region');
  const regionsArr = sortRegions.map((obj) => {
    const { name, id, region } = obj;
    return { id: id, name: name, region: region };
  });

  const sortCategories = uniqBy(restaurants, 'category');
  const categoriesArr = sortCategories.map((obj) => {
    const { name, id, category } = obj;
    return { id: id, name: name, category: category };
  });

  return (
    <HomePageLayout>
      <TagsLayout>
        <h2>어디 갈지 모르겠다구요? 👀</h2>
        <HomeConditionTagsContainer
          conditionsArr={conditionsArr}
        />
        <HomeRegionTagsContainer
          regionsArr={regionsArr}
        />
        <HomeCategoryTagsContainer
          categoriesArr={categoriesArr}
        />
      </TagsLayout>
      <PostLayout>
        <Link to="/post">맛집 추천하기</Link>
      </PostLayout>
    </HomePageLayout>
  )
}
