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

import restaurants from '../assets/json/restaurants.json';

export default function Pages({ isPc, callSideBarMenu }) {
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
      </Routes>
    </div>
  )
}
