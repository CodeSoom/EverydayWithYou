import styled from '@emotion/styled';

import PostInputContainer from '../containers/PostInputContainer';
import PostConditionTagsContainer from '../containers/PostConditionTagsContainer';
import PostRegionTagsContainer from '../containers/PostRegionTagsContainer';
import PostCategoryTagsContainer from '../containers/PostCategoryTagsContainer';

const PageTitleBox = styled.div({
  padding: '48px 0',
});


export default function PostFormPage() {
  return (
    <>
      <PageTitleBox><h1>나만 알던 맛집을 소개해주세요!</h1></PageTitleBox>
      <PostInputContainer />
      <PostConditionTagsContainer />
      <PostRegionTagsContainer />
      <PostCategoryTagsContainer />
    </>
  )
}
