import {
  conditions,
} from '../data/hashTags';

import HashtagBox from '../style/HashtagBox';

export default function PostConditionTagsForm({ onClickTag }) {
  function handleClick(event, conditionId) {
    const { target } = event;
    if (!target.className) {
      target.className = 'btn-click';
      onClickTag(conditionId);
    } else {
      target.classList.remove('btn-click');
      onClickTag();
    }
  }

  return (
    <>
      <HashtagBox>
        <p>어떤 상황인가요?</p>
        {conditions.map((condition) => (
          <input
            type='button'
            key={condition.id}
            onClick={(event) => handleClick(event, condition.id)}
            value={condition.name}
          />
        ))}
      </HashtagBox>
    </>
  )
}
