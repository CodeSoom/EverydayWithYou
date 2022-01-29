import styled from '@emotion/styled';

import {
  categories,
} from '../data/hashTags';

const HashtagBox = styled.div({
  textAlign: 'left',
  margin: '8px 0',
  '& button': {
    border: 'none',
    padding: '8px',
    margin: '4px',
    borderRadius: '4px',
  },
  '& button:focus': {
    backgroundColor: '#000',
    color: '#fff',
  },
});

export default function PostCategoryTagsForm({ onClickTag }) {
  return (
    <>
      <HashtagBox>
        <p>무엇을 드셨나요?</p>
        {categories.map((category) => (
          <button
            type='button'
            key={category.id}
            onClick={() => onClickTag(category.id)}
          >
            {category.name}
          </button>
        ))}
      </HashtagBox>
    </>
  )
}
