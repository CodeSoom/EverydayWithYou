import styled from '@emotion/styled';

const TagsContainer = styled.div({
  textAlign: 'left',
  margin: '8px 0',
});

const Hashtags = styled.button({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function HomeCategoryTagsContainer({ uniqueCategoriesArr }) {
  return (
    <TagsContainer>
      {uniqueCategoriesArr.map((uniqueCategory) => (
        <>
          <Hashtags
            type='button'
            key={uniqueCategory}
          >
            {uniqueCategory}
          </Hashtags>
        </>
      ))}
    </TagsContainer>
  )
}
