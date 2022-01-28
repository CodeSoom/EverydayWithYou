import styled from '@emotion/styled';

import PostFormContainer from '../containers/PostFormContainer';

const PageTitleBox = styled.div({
  padding: '48px 0',
});


export default function PostFormPage() {
  return (
    <>
      <PageTitleBox><h1>나만 알던 맛집을 소개해주세요!</h1></PageTitleBox>
      <PostFormContainer />
    </>
  )
}
