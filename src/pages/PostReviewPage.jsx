import styled from '@emotion/styled';

import mq from '../shared/media-query';

const PostReviewPageLayout = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  display: 'flex',
  flexDirection: ['column', 'row', 'row'],
  justifyContent: 'space-evenly',
  input: {
    border: '1px solid orange',
  },
}));

export default function PostReviewPage({
  onChangeReviewField,
  onClickConfirmButton,
  reviewFields,
}) {
  function handleChangeReviewField(event) {
    const { name, value } = event.target;
    onChangeReviewField({ name, value });
  }

  return (
    <PostReviewPageLayout>
      <label htmlFor="가게 이름">가게 이름</label>
      <input
        label="가게 이름"
        name="name"
        type="text"
        onChange={handleChangeReviewField}
      />
      {/*드롭다운 메뉴로 선택하게 하기*/}
      <label htmlFor="상황">상황</label>
      <input
        label="상황"
        name="situation"
        type="text"
        onChange={handleChangeReviewField}
      />
      {/*드롭다운 메뉴로 선택하게 하기*/}
      <label htmlFor="메뉴">메뉴</label>
      <input
        label="메뉴"
        name="category"
        type="text"
        onChange={handleChangeReviewField}
      />
      {/*드롭다운 메뉴로 선택하게 하기*/}
      <label htmlFor="장소">장소</label>
      <input
        label="장소"
        name="place"
        type="text"
        onChange={handleChangeReviewField}
      />
      {/*드롭다운 메뉴로 선택하게 하기*/}
      <label htmlFor="연령대">연령대</label>
      <input
        label="연령대"
        name="age"
        type="text"
        onChange={handleChangeReviewField}
      />
      {/*드롭다운 메뉴로 선택하게 하기*/}
      <label htmlFor="분위기">분위기</label>
      <input
        label="분위기"
        name="mood"
        type="text"
        onChange={handleChangeReviewField}
      />
      <label htmlFor="2차">2차</label>
      <input
        label="2차"
        name="afterCourse"
        type="text"
        onChange={handleChangeReviewField}
      />
      <button
        type="button"
        onClick={() => onClickConfirmButton(reviewFields)}
      >
        제출
      </button>
    </PostReviewPageLayout>
  );
}
