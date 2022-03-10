import {
  Routes,
  Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useMediaQuery } from "react-responsive" // ToDoDelete

import SideBar from './components/sidebar/SideBar';
import MobileSideBar from './components/sidebar/MobileSideBar';

import HomePage from './pages/HomePage';
import MobileHomePage from './pages/MobileHomePage';

import SearchPage from './pages/SearchPage';
import MobileSearchPage from './pages/MobileSearchPage';

import SituationSelectPage from './pages/SituationSelectPage';

import CustomPage from './pages/CustomPage';
import RestaurantsPage from './pages/RestaurantsPage';

import restaurants from '../assets/json/restaurants.json';

export default function App() {
  // ToDoDelete
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const callMenu = useSelector((state) => (
    state.callMenu
  ))

  return (
    <>
      {isPc ? <SideBar /> : <MobileSideBar callMenu={callMenu} />}
      {isPc ?
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
          <Route path="/search" element={
            <MobileSearchPage
              restaurants={restaurants}
              callMenu={callMenu}
            />}
          />
          <Route path="/" element={
            <SituationSelectPage
              restaurants={restaurants}
              callMenu={callMenu}
            />}
          />
          <Route path="/custom" element={
            <CustomPage
              restaurants={restaurants}
              callMenu={callMenu}
            />}
          />
          <Route path="/restaurants/:name" element={
            <RestaurantsPage
              restaurants={restaurants}
            />}
          />
        </Routes>
      }
    </>
  )
}
