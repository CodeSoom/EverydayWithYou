import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

const PostFormBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export default function HomeConditionTagsContainer({ restaurants }) {
  const sortRepetition = uniqBy(restaurants, 'condition');
  const conditionsArr = sortRepetition.map((obj) => {
    const { name, id, condition } = obj;
    return { id: id, name: name, condition: condition };
  });

  return (
    <PostFormBox>
    </PostFormBox>
  )
}
