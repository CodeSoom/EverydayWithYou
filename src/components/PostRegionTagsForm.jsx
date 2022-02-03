import {
  regions,
} from '../data/hashTags';

import HashtagBox from '../style/HashtagBox';

export default function PostRegionTagsForm({ onClickTag }) {
  return (
    <>
      <HashtagBox>
        <p>어디인가요?</p>
        {regions.map((region) => (
          <input
            type='button'
            key={region.id}
            onClick={() => onClickTag(region.id)}
            value={region.name}
          />
        ))}
      </HashtagBox>
    </>
  )
}
