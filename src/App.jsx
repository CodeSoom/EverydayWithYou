import {
  Routes,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useMediaQuery } from "react-responsive";

import SideBarContainer from './containers/sidebar/SideBarContainer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SituationSelectPage from './pages/SituationSelectPage';
import CustomPage from './pages/CustomPage';
import RestaurantsPage from './pages/RestaurantsPage';
import SearchResultRestaurantsPage from './pages/SearchResultRestaurantsPage';

import restaurants from '../assets/json/restaurants.json';

export default function App() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const callMenu = useSelector((state) => (
    state.callMenu
  ))

  return (
    <>
      <SideBarContainer
        isPc={isPc}
        callMenu={callMenu}
      />
      <div
        className={
          callMenu == 'okay' ?
            'black-filter' : ''
        }
      >
        <Routes>
          <Route path="/home" element={
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
          <Route path="/" element={
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
            <RestaurantsPage
              restaurants={restaurants}
            />}
          />
          <Route path="/search/restaurants/:name" element={
            <SearchResultRestaurantsPage
              restaurants={restaurants}
            />}
          />
        </Routes>
      </div>
    </>
  )
}
