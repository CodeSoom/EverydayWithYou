import styled from '@emotion/styled';

import {
  conditions,
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

export default function PostConditionTagsForm({ onClickTag }) {
  return (
    <>
      <HashtagBox>
        <p>어떤 상황인가요?</p>
        {conditions.map((condition) => (
          <button
            type='button'
            key={condition.id}
            onClick={() => onClickTag(condition.id)}
          >
            {condition.name}
          </button>
        ))}
      </HashtagBox>
    </>
  )
}
