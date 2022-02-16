import styled from '@emotion/styled';

const PostBtnBox = styled.div({
  margin: '36px 0',
  display: 'flex',
  justifyContent: 'center',
  '& button': {
    border: 'none',
    padding: '8px',
    margin: '4px',
    borderRadius: '4px',
    fontSize: '24px',
  },
});

export default function PostBtnContainer() {
  return (
    <PostBtnBox>
      <button>등록</button>
    </PostBtnBox>
  )
}
