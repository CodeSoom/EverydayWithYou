import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import SearchFormMock from '../components/search/SearchFormMock';

import RestaurantDetailContainer from '../containers/restaurants/RestaurantDetailContainer';
import RestaurantAfterContainer from '../containers/restaurants/RestaurantAfterContainer';

import { createMap } from '../kakao';
import { nameFilter } from '../utils';
import { saveItem, loadItem } from '../services/storage';

import { loadResultRestaurants } from '../slice';

import mq from '../shared/media-query';

const RestaurantPageLayout = styled.div(() => mq({
  marginLeft: ['15.5vw', '18.75rem', '18.75rem'],
  paddingTop: ['25%', '7rem', '7rem'],
  display: 'flex',
  backgroundColor: ['#F8F0E9', '#F4F4F4', '#F4F4F4'],
  flexDirection: ['column', 'row', 'row'],
}));

export default function SearchResultRestaurantPage({
  isPc, modalEffect, restaurants, params,
}) {
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

  const searchKeyword = loadItem('searchKeyword');

  return (
    <>
      <SearchFormMock
        modalEffect={modalEffect}
        searchKeyword={searchKeyword}
      />
      <RestaurantPageLayout className={modalEffect}>
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
