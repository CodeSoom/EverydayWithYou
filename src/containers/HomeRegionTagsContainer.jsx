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

export default function HomeRegionTagsContainer({ uniqueRegionsArr }) {
  return (
    <TagsContainer>
      {uniqueRegionsArr.map((uniqueRegion) => (
        <>
          <Hashtags
            type='button'
            key={uniqueRegion}
          >
            {uniqueRegion}
          </Hashtags>
        </>
      ))}
    </TagsContainer>
  )
}
