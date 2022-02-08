import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setRegions,
} from '../actions';

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

export default function HomeRegionTagsContainer({ regionsArr }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regionsArr));
  }, []);

  // ToDo delete 값잘들어오나 확인용
  useSelector((state) => ({
    newRegions: state.newRegions,
  }));

  return (
    <TagsBox>
      <p>어디로 가고 싶나요?</p>
      {regionsArr.map((obj) => (
        <Hashtags
          type="Hashtags"
          key={obj.id}
        >
            #{obj.region}
        </Hashtags>
      ))}
    </TagsBox>
  )
}
