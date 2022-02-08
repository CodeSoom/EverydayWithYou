import styled from '@emotion/styled';

const TagsBox = styled.div({
  textAlign: 'left',
  margin: '8px 0',
});

const Hashtags = styled.button({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function HomeCategoryTagsContainer({ categoriesArr }) {
  return (
    <TagsBox>
      <p>무엇을 드시고 싶으세요?</p>
      {categoriesArr.map((obj) => (
        <Hashtags
          type="Hashtags"
          key={obj.id}
        >
          {obj.category}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
