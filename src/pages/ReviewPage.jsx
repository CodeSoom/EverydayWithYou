import styled from '@emotion/styled';

import mq from '../shared/media-query';

const PostReviewPageLayout = styled.div(() => mq({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  input: {
    border: '1px solid #828282',
  },
  p: {
    borderBottom: '1px solid black',
  },
}));

export default function ReviewPage({
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
      <h1>가게 추천하기</h1>
      <p>나만 알고 있기 아쉬운 가게를 추천해주세요! 😉</p>
      <div>
        <label htmlFor="가게 이름">가게 이름</label>
        <input
          label="가게 이름"
          name="restaurantName"
          type="text"
          onChange={handleChangeReviewField}
        />
      </div>
      {/*버튼*/}
      <div>
        <label htmlFor="작성자연령대">연령대</label>
        <input
          label="작성자연령대"
          name="writerAge"
          type="text"
          onChange={handleChangeReviewField}
        />
      </div>
      <div>
        {/*드롭다운 메뉴로 선택하게 하기*/}
        <label htmlFor="상황">상황</label>
        <input
          label="상황"
          name="dateSituation"
          type="text"
          onChange={handleChangeReviewField}
        />
      </div>
      <div>
        {/*드롭다운 메뉴로 선택하게 하기*/}
        <label htmlFor="메뉴">메뉴</label>
        <input
          label="메뉴"
          name="dateCategory"
          type="text"
          onChange={handleChangeReviewField}
        />
      </div>
      <div>
        {/*드롭다운 메뉴로 선택하게 하기*/}
        <label htmlFor="장소">장소</label>
        <input
          label="장소"
          name="datePlace"
          type="text"
          onChange={handleChangeReviewField}
        />
      </div>
      <div>
        {/*버튼*/}
        <label htmlFor="분위기">분위기</label>
        <input
          label="분위기"
          name="restaurantMood"
          type="text"
          onChange={handleChangeReviewField}
        />
      </div>
      <div>
        <label htmlFor="2차">2차로 추천할 가게가 있으신가요? (선택)</label>
        <input
          label="2차"
          name="afterCourse"
          type="text"
          onChange={handleChangeReviewField}
        />
      </div>
      <button
        type="button"
        onClick={() => onClickConfirmButton(reviewFields)}
      >
        제출
      </button>
    </PostReviewPageLayout>
  );
}
