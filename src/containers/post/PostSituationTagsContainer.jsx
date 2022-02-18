import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectSituationTag,
} from '../../actions';

const TagsBox = styled.div({
  textAlign: 'left',
  marginBottom: '24px',
});

const Hashtags = styled.button({
  border: 'none',
  padding: '8px',
  margin: '4px',
  borderRadius: '4px',
});

export default function PostSituationTagsContainer({ restaurants }) {
  const dispatch = useDispatch();

  function handleClickTag(selectedId) {
    dispatch(selectSituationTag(selectedId))
  }

  const selectedSituation = useSelector((state) => (
    state.selectedSituation === null ?
      state : state.selectedSituation
  ));
  const { color } = selectedSituation;

  const uniqSituations = uniqBy(restaurants, 'situation');

  return (
    <TagsBox>
      <p>어떤 상황인가요?</p>
      {uniqSituations.map((situation) => (
        <Hashtags
          type="button"
          key={situation.id}
          onClick={() => handleClickTag(situation.id)}
          className={
            situation.id === selectedSituation.id ?
              color : ""
          }
        >
          #{situation.situation}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
