// ToDo delete
import {
  regions,
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
