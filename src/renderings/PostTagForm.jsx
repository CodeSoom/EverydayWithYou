import styled from '@emotion/styled';

import {
  conditions,
  regions,
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

export default function PostTagForm() {
  return (
    <>
      <HashtagBox>
        <p>어떤 상황인가요?</p>
        {conditions.map((condition) => (
          <button
            type='button'
            key={condition.id}>
            {condition.name}
          </button>
        ))}
      </HashtagBox>
      <HashtagBox>
        <p>어디인가요?</p>
        {regions.map((region) => (
          <button
            type='button'
            key={region.id}>
            {region.name}
          </button>
        ))}
      </HashtagBox>
      <HashtagBox>
        <p>무엇을 드셨나요?</p>
        {categories.map((category) => (
          <button
            type='button'
            key={category.id}>
            {category.name}
          </button>
        ))}
      </HashtagBox>
    </>
  )
}
