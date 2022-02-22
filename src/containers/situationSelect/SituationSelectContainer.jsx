import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';

import {
  setSituationFilter,
} from '../../actions';

const SelectBox1 = styled.button({
  ':hover, :focus': {
    filter: 'none',
    transform: 'scale(1.2, 1.2) rotate(5deg) !important',
    transition: 'all 0.35s',
    color: '#000',
  },
  width: '30%',
  display: 'inline-block',
  margin: '1rem',
  filter: 'grayscale(100%)',
  transform: 'scale(0.8, 0.8) rotate(5deg)',
  transition: 'all 0.35s',
  color: '#fff',
  '& div': {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 0.2rem 1.2rem rgba(0,0,0,0.2)',
    height: 'auto',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    paddingBottom: '1rem',
  },
  '& img:before': {
    position: 'absolute',
    transition: 'all 0.35s',
  },
});

const SelectBox2 = styled.button({
  ':hover, :focus': {
    filter: 'none',
    transform: 'scale(1.2, 1.2) rotate(-5deg) !important',
    transition: 'all 0.35s',
    color: '#000',
  },
  width: '25%',
  height: 'auto',
  display: 'inline-block',
  margin: '1rem',
  filter: 'grayscale(100%)',
  transform: 'scale(0.8, 0.8) rotate(-5deg)',
  transition: 'all 0.35s',
  color: '#fff',
  '& div': {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 0.2rem 1.2rem rgba(0,0,0,0.2)',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    paddingBottom: '1rem',
  },
  '& img:before': {
    position: 'absolute',
    transition: 'all 0.35s',
  },
});

const SelectBox3 = styled.button({
  ':hover, :focus': {
    filter: 'none',
    transform: 'scale(1.2, 1.2) rotate(4deg) !important',
    transition: 'all 0.35s',
    color: '#000',
  },
  width: '30%',
  display: 'inline-block',
  margin: '1rem',
  filter: 'grayscale(100%)',
  transform: 'scale(0.8, 0.8) rotate(4deg)',
  transition: 'all 0.35s',
  color: '#fff',
  '& div': {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 0.2rem 1.2rem rgba(0,0,0,0.2)',
  },
  '& img': {
    width: '100%',
    height: 'auto',
    paddingBottom: '1rem',
  },
  '& img:before': {
    position: 'absolute',
    transition: 'all 0.35s',
  },
});

export default function SituationSelectContainer() {
  const dispatch = useDispatch();

  function handleClickSelection(sortNumber) {
    dispatch(setSituationFilter(sortNumber));
  }

  const color = useSelector((state) => (state.color));

  const sortNumber = useSelector((state) => (state.sortNumber));

  return (
    <>
      <SelectBox1
        type='button'
        onClick={() => handleClickSelection(1)}
        className={
          sortNumber === 1 ?
            color : ""
        }
      >
        <div>
          <img src='assets/img/1.jpg' />
          <p>알아가는 그대와 : 소개팅, 썸</p>
        </div>
      </SelectBox1>
      <SelectBox2
        type='button'
        onClick={() => handleClickSelection(2)}
        className={
          sortNumber === 2 ?
            color : ""
        }
      >
        <div>
          <img src='assets/img/2.jpg' />
          <p>일상 : 데이트</p>
        </div>
      </SelectBox2>
      <SelectBox3
        type='button'
        onClick={() => handleClickSelection(3)}
        className={
          sortNumber === 3 ?
            color : ""
        }
      >
        <div>
          <img src='assets/img/3.jpg' />
          <p>특별한 날 : 생일, 기념일, 프로포즈</p>
        </div>
      </SelectBox3>
    </>
  )
}
