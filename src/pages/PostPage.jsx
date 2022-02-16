import styled from '@emotion/styled';

import PostInputContainer from '../containers/post/PostInputContainer';
import PostSituationTagsContainer from '../containers/post/PostSituationTagsContainer';
import PostPlaceTagsContainer from '../containers/post/PostPlaceTagsContainer';
import PostCategoryTagsContainer from '../containers/post/PostCategoryTagsContainer';
import PostBtnContainer from '../containers/post/PostBtnContainer';

const PageTitleBox = styled.div({
  padding: '48px 0',
});


export default function PostPage({ restaurants }) {
  return (
    <>
      <PageTitleBox><h1>나만 알던 맛집을 소개해주세요!</h1></PageTitleBox>
      <PostInputContainer />
      <PostSituationTagsContainer
        restaurantsData={restaurants}
      />
      <PostPlaceTagsContainer
        restaurantsData={restaurants}
      />
      <PostCategoryTagsContainer
        restaurantsData={restaurants}
      />
      <PostBtnContainer />
    </>
  )
}
