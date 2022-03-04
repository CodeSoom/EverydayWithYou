import {
  Routes,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useMediaQuery } from "react-responsive"

import WebSideBar from './components/WebSideBar';
import MobileSideBar from './components/MobileSideBar';
import SituationSelectPage from './pages/SituationSelectPage';
import WebHomePage from './pages/WebHomePage';
import MobileHomePage from './pages/MobileHomePage';
import CustomPage from './pages/CustomPage';
import RestaurantsPage from './pages/RestaurantsPage';
import SearchPage from './pages/SearchPage';

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
      {isPc ? <WebSideBar /> : <MobileSideBar callMenu={callMenu} />}
      {isPc ?
        <Routes>
          <Route path="/home" element={
            <WebHomePage
              restaurants={restaurants}
            />
          }
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
          <Route path="/search" element={
            <SearchPage
              restaurants={restaurants}
            />}
          />
        </Routes>
        :
        <Routes>
          <Route path="/home" element={
            <MobileHomePage
              restaurants={restaurants}
              callMenu={callMenu}
            />
          }
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
          <Route path="/search" element={
            <SearchPage
              restaurants={restaurants}
            />}
          />
        </Routes>
      }
    </>
  )
}
