import {
  regions,
} from '../data/hashTags';

import HashtagBox from '../style/HashtagBox';

export default function PostRegionTagsForm({ onClickTag, selectedRegion }) {
  const { color } = selectedRegion;

  return (
    <>
      <HashtagBox>
        <p>어디인가요?</p>
        {regions.map((region) => (
          <input
            type='button'
            key={region.id}
            className={
              region.id === selectedRegion.id ?
                color : ""
            }
            onClick={() => onClickTag(region.id)}
            value={region.name}
          />
        ))}
      </HashtagBox>
    </>
  )
}
