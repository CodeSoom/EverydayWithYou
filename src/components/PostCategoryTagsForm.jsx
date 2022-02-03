import {
  categories,
} from '../data/hashTags';

import HashtagBox from '../style/HashtagBox';

export default function PostCategoryTagsForm({ onClickTag }) {
  return (
    <>
      <HashtagBox>
        <p>무엇을 드셨나요?</p>
        {categories.map((category) => (
          <input
            type='button'
            key={category.id}
            onClick={() => onClickTag(category.id)}
            value={category.name}
          />
        ))}
      </HashtagBox>
    </>
  )
}
