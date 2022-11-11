import { useDispatch } from 'react-redux';

import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SituationSelectPage from './pages/SituationSelectPage';
import CustomPage from './pages/CustomPage';
import RestaurantPage from './pages/RestaurantPage';
import SearchResultRestaurantPage from './pages/SearchResultRestaurantPage';
import ReviewPage from './pages/ReviewPage';

import restaurants from '../assets/json/restaurants.json';

import { addReview } from './slice';

import { postReview } from './reviews';

export default function Pages({
  isPc, modalEffect, reviewFields,
}) {
  const dispatch = useDispatch();

  function handleChangeReviewField({ name, value }) {
    dispatch(addReview({ name, value }));
  }

  function handleClickConfirmButton(reviewFields) {
    postReview(reviewFields);
  }

  return (
    <Routes>
      <Route path="/" element={
        <HomePage
          modalEffect={modalEffect}
          restaurants={restaurants}
        />
      }
      />
      <Route path="/search" element={
        <SearchPage
          modalEffect={modalEffect}
          restaurants={restaurants}
        />}
      />
      <Route path="/select" element={
        <SituationSelectPage
          isPc={isPc}
          modalEffect={modalEffect}
          restaurants={restaurants}
        />}
      />
      <Route path="/custom" element={
        <CustomPage
          isPc={isPc}
          modalEffect={modalEffect}
          restaurants={restaurants}
        />}
      />
      <Route path="/restaurants/:name" element={
        <RestaurantPage
          isPc={isPc}
          modalEffect={modalEffect}
          restaurants={restaurants}
        />}
      />
      <Route path="/search/restaurants/:name" element={
        <SearchResultRestaurantPage
          isPc={isPc}
          modalEffect={modalEffect}
          restaurants={restaurants}
        />}
      />
      <Route path="/review/new" element={
        <ReviewPage
          onChangeReviewField={handleChangeReviewField}
          onClickConfirmButton={handleClickConfirmButton}
          reviewFields={reviewFields}
        />}
      />
    </Routes>
  );
}
