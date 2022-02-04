import styled from '@emotion/styled';

import {
  categories,
} from '../data/hashTags';

const TagsContainer = styled.div({
  textAlign: 'left',
  margin: '8px 0',
});

const Hashtags = styled.input({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function PostCategoryTagsForm({ onClickTag, selectedCategory }) {
  const { color } = selectedCategory;

  return (
    <>
      <TagsContainer>
        <p>무엇을 드셨나요?</p>
        {categories.map((category) => (
          <Hashtags
            type='button'
            key={category.id}
            className={
              category.id === selectedCategory.id ?
                color : ""
            }
            onClick={() => onClickTag(category.id)}
            value={category.name}
          />
        ))}
      </TagsContainer>
    </>
  )
}
