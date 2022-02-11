// ToDo delete
import {
  conditions,
} from '../data/hashTags';

import styled from '@emotion/styled';

const HashtagBox = styled.div({
  textAlign: 'left',
  margin: '8px 0',
  '& input': {
    border: 'none',
    padding: '8px',
    margin: '4px',
    borderRadius: '4px',
  },
});

export default function PostConditionTagsForm({ onClickTag, selectedCondition }) {
  const { color } = selectedCondition;

  return (
    <>
      <HashtagBox>
        <p>어떤 상황인가요?</p>
        {conditions.map((condition) => (
          <input
            type='button'
            key={condition.id}
            className={
              condition.id === selectedCondition.id ?
                color : ""
            }
            onClick={() => onClickTag(condition.id)}
            value={condition.name}
          />
        ))}
      </HashtagBox>
    </>
  )
}
