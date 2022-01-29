import styled from '@emotion/styled';

import {
  regions,
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

export default function PostRegionTagsForm({ onClickTag }) {
  return (
    <>
      <HashtagBox>
        <p>어디인가요?</p>
        {regions.map((region) => (
          <button
            type='button'
            key={region.id}
            onClick={() => onClickTag(region.id)}
          >
            {region.name}
          </button>
        ))}
      </HashtagBox>
    </>
  )
}
