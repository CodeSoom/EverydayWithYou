import {
  conditions,
} from '../data/hashTags';

import HashtagBox from '../style/HashtagBox';

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
