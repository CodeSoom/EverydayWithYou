import {
  categories,
} from '../data/hashTags';

import HashtagBox from '../style/HashtagBox';

export default function PostCategoryTagsForm({ onClickTag }) {
  function handleClick(event, categoryId) {
    const { target } = event;
    if (!target.className) {
      target.className = 'btn-click'
    } else {
      target.classList.remove('btn-click')
    }
    onClickTag(categoryId);
  }

  return (
    <>
      <HashtagBox>
        <p>무엇을 드셨나요?</p>
        {categories.map((category) => (
          <input
            type='button'
            key={category.id}
            onClick={(event) => handleClick(event, category.id)}
            value={category.name}
          />
        ))}
      </HashtagBox>
    </>
  )
}
