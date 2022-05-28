import styled from '@emotion/styled';

import facepaint from 'facepaint'

import { useDispatch } from 'react-redux';

import {
  setSituationFilter,
} from '../../slice';

const mq = facepaint([
  '@media (min-width: 1024px)',
  '@media (min-width: 1440px)',
])

const SelectImgContainer = styled.div(() => mq({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  paddingTop: ['40%', '5.625rem', '5.625rem'],
}));

const SelectBox1 = styled.button(() => mq({
  transform: ['none', 'scale(0.8, 0.8) rotate(5deg)', 'scale(0.8, 0.8) rotate(5deg)'],
  transition: 'all 0.35s',
  '& img': {
    width: ['80vw', '400px', '400px'],
  },
}));

const SelectBox2 = styled.button(() => mq({
  transform: ['none', 'scale(0.8, 0.8) rotate(-5deg)', 'scale(0.8, 0.8) rotate(-5deg)'],
  transition: 'all 0.35s',
  '& img': {
    width: ['80vw', '400px', '400px'],
  },
}));

const SelectBox3 = styled.button(() => mq({
  transform: ['none', 'scale(0.8, 0.8) rotate(4deg)', 'scale(0.8, 0.8) rotate(4deg)'],
  transition: 'all 0.35s',
  '& img': {
    width: ['80vw', '400px', '400px'],
  },
}));

export default function SituationSelectContainer({ sortedNumber }) {
  const dispatch = useDispatch();

  function handleClickSelection(sortNumber) {
    dispatch(setSituationFilter(sortNumber));
  }

  return (
    <SelectImgContainer>
      <SelectBox1
        type='button'
        onClick={() => handleClickSelection(1)}
        className={
          sortedNumber == 1 ?
            'select-img-effect1' : ''
        }
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/relationship-img/1.svg'
          alt='img1'
        />
      </SelectBox1>
      <SelectBox2
        type='button'
        onClick={() => handleClickSelection(2)}
        className={
          sortedNumber == 2 ?
            'select-img-effect2' : ''
        }
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/relationship-img/2.svg'
          alt='img2'
        />
      </SelectBox2>
      <SelectBox3
        type='button'
        onClick={() => handleClickSelection(3)}
        className={
          sortedNumber == 3 ?
            'select-img-effect3' : ''
        }
      >
        <img
          src='https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/relationship-img/3.svg'
          alt='img3'
        />
      </SelectBox3>
    </SelectImgContainer>
  )
}
