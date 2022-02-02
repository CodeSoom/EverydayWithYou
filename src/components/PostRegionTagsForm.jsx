import {
  regions,
} from '../data/hashTags';

import HashtagBox from '../style/HashtagBox';

export default function PostRegionTagsForm({ onClickTag }) {
  function handleClick(event, regionId) {
    const { target } = event;
    if (!target.className) {
      target.className = 'btn-click';
      onClickTag(regionId);
    } else {
      target.classList.remove('btn-click');
      onClickTag();
    }
  }

  return (
    <>
      <HashtagBox>
        <p>어디인가요?</p>
        {regions.map((region) => (
          <input
            type='button'
            key={region.id}
            onClick={(event) => handleClick(event, region.id)}
            value={region.name}
          />
        ))}
      </HashtagBox>
    </>
  )
}
