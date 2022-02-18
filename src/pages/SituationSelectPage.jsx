// 관심사: 화면 구성과 스토어에서 기존 레스토랑 정보 스토어에 저장
// import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SituationSelectContainer from '../containers/situationSelect/SituationSelectContainer';

import {
  setRestaurants,
} from '../actions';

export default function SituationSelectPage({ restaurants }) {
  const dispatch = useDispatch();

  // 기존 레스토랑 정보 스토어에 저장
  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  // 기존 레스토랑 정보
  const restaurantsData = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <>
      <h2>알콩달콩 💕 놀러 가는 목적이 무엇인지 알려주세요</h2>
      <h4>코스를 알려드리는 여정이 시작됩니다!</h4>
      <SituationSelectContainer
        restaurantsData={restaurantsData}
      />
    </>
  )
}
