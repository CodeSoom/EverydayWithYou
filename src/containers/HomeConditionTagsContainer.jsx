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

export default function HomeConditionTagsContainer({ uniqueConditionsArr }) {
  return (
    <TagsContainer>
      {uniqueConditionsArr.map((uniqueCondition) => (
        <>
          <Hashtags
            type='button'
            key={uniqueCondition}
          >
            {uniqueCondition}
          </Hashtags>
        </>
      ))}
    </TagsContainer>
  )
}
