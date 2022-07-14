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
import PostReviewPage from './pages/PostReviewPage';

import restaurants from '../assets/json/restaurants.json';

import { addReview } from './slice';

import { postReview } from './reviews';

export default function Pages({
  isPc, callSideBarMenu, reviewFields,
}) {
  const dispatch = useDispatch();

  function handleChangeReviewField({ name, value }) {
    dispatch(addReview({ name, value }));
  }

  function handleClickConfirmButton(reviewFields) {
    postReview(reviewFields);
  }

  return (
    <div
      className={
        !isPc && callSideBarMenu == 'true' ?
          'darker-background' : ''}
    >
      <Routes>
        <Route path="/" element={
          <HomePage
            restaurants={restaurants}
          />
        }
        />
        <Route path="/search" element={
          <SearchPage
            restaurants={restaurants}
          />}
        />
        <Route path="/select" element={
          <SituationSelectPage
            restaurants={restaurants}
          />}
        />
        <Route path="/custom" element={
          <CustomPage
            restaurants={restaurants}
          />}
        />
        <Route path="/restaurants/:name" element={
          <RestaurantPage
            restaurants={restaurants}
            isPc={isPc}
          />}
        />
        <Route path="/search/restaurants/:name" element={
          <SearchResultRestaurantPage
            restaurants={restaurants}
            isPc={isPc}
          />}
        />
        <Route path="/post/new" element={
          <PostReviewPage
            onChangeReviewField={handleChangeReviewField}
            onClickConfirmButton={handleClickConfirmButton}
            reviewFields={reviewFields}
          />}
        />
      </Routes>
    </div>
  );
}
