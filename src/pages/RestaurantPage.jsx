import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import TopSearchBar from '../components/topbar/TopSearchBar';
import TopBackBar from '../components/topbar/TopBackBar';

import RestaurantDetailContainer from '../containers/restaurants/RestaurantDetailContainer';
import RestaurantAfterContainer from '../containers/restaurants/RestaurantAfterContainer';

import { createMap } from '../kakao';
import { nameFilter } from '../utils';
import { saveItem } from '../services/storage';

import { loadResultRestaurants } from '../slice';

import mq from '../shared/media-query';

const Top = styled.div(() => mq({
  position: 'fixed',
  left: ['15.5vw', '18.75rem', '18.75rem'],
  right: 0,
  top: 0,
  zIndex: 1,
}));

const RestaurantPageLayout = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  paddingTop: ['35%', '8.5rem', '8.5rem'],
  display: 'flex',
  backgroundColor: ['#F8F0E9', '#F4F4F4', '#F4F4F4'],
  flexDirection: ['column', 'row', 'row'],
}));

export default function RestaurantPage({ params, restaurants, isPc }) {
  const { name } = params || useParams();
  const resultRestaurant = nameFilter(restaurants, name);
  saveItem('resultRestaurant', JSON.stringify(resultRestaurant)); //클릭해서 들어온 정보 로컬스토리지에 저장

  const dispatch = useDispatch();

  const { lat, lon } = useSelector((state) =>
    state.placePosition,
  ); //맵관련

  useEffect(() => {
    const map = createMap(lat, lon); //맵관련
    dispatch(loadResultRestaurants(name, map)); //로컬스토리지 저장된 정보로 맵이랑 장소정보 업데이트
  }, []);

  return (
    <>
      <Top>
        <TopSearchBar />
        <TopBackBar />
      </Top>
      <RestaurantPageLayout>
        <RestaurantDetailContainer
          isPc={isPc}
        />
        <RestaurantAfterContainer
          isPc={isPc}
        />
      </RestaurantPageLayout>
    </>
  );
}
