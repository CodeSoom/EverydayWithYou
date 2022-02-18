import styled from '@emotion/styled';

import PostInputContainer from '../containers/post/PostInputContainer';
import PostSituationTagsContainer from '../containers/post/PostSituationTagsContainer';
import PostPlaceTagsContainer from '../containers/post/PostPlaceTagsContainer';
import PostCategoryTagsContainer from '../containers/post/PostCategoryTagsContainer';
import PostBtnContainer from '../containers/post/PostBtnContainer';

const PostPageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '36px 24px',
  '& h1': {
    marginBottom: '36px',
  },
});

export default function PostPage({ restaurants }) {
  return (
    <PostPageLayout>
      <h1>나만 알던 맛집을 소개해주세요!</h1>
      <PostInputContainer />
      <PostSituationTagsContainer
        restaurants={restaurants}
      />
      <PostPlaceTagsContainer
        restaurants={restaurants}
      />
      <PostCategoryTagsContainer
        restaurants={restaurants}
      />
      <PostBtnContainer />
    </PostPageLayout>
  )
}
