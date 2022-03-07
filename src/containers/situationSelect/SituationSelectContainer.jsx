import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import {
  setSituationFilter,
} from '../../actions';

const SelectImgContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  height: '26.65rem',
});

const SelectBox1 = styled.button({
  ':hover, :focus': {
    filter: 'none',
    transform: 'scale(1.0, 1.0) rotate(5deg) !important',
    transition: 'all 0.35s',
  },
  filter: 'grayscale(100%)',
  transform: 'scale(0.8, 0.8) rotate(5deg)',
  transition: 'all 0.35s',
  '& img': {
    width: '400px',
    height: '325px',
  },
});

const SelectBox2 = styled.button({
  ':hover, :focus': {
    filter: 'none',
    transform: 'scale(1.0, 1.0) rotate(-5deg) !important',
    transition: 'all 0.35s',
  },
  filter: 'grayscale(100%)',
  transform: 'scale(0.8, 0.8) rotate(-5deg)',
  transition: 'all 0.35s',
  '& img': {
    width: '400px',
    height: '325px',
  },
});

const SelectBox3 = styled.button({
  ':hover, :focus': {
    filter: 'none',
    transform: 'scale(1.0, 1.0) rotate(4deg) !important',
    transition: 'all 0.35s',
  },
  filter: 'grayscale(100%)',
  transform: 'scale(0.8, 0.8) rotate(4deg)',
  transition: 'all 0.35s',
  '& img': {
    width: '400px',
    height: '325px',
  },
});

export default function SituationSelectContainer() {
  const dispatch = useDispatch();

  function handleClickSelection(sortNumber) {
    dispatch(setSituationFilter(sortNumber));
  }

  return (
    <SelectImgContainer>
      <SelectBox1
        type='button'
        onClick={() => handleClickSelection(1)}
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/relationship-img/1.svg'
        />
      </SelectBox1>
      <SelectBox2
        type='button'
        onClick={() => handleClickSelection(2)}
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/relationship-img/2.svg'
        />
      </SelectBox2>
      <SelectBox3
        type='button'
        onClick={() => handleClickSelection(3)}
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/relationship-img/3.svg'
          placeholderSrc='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/loading-img/grey.jpg'
        />
      </SelectBox3>
    </SelectImgContainer>
  )
}
