import styled from '@emotion/styled';

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

const AppLayout = styled.div({
})

const WebPagesLayout = styled.div({
  marginLeft: '300px',
});

const MobilePagesLayout = styled.div({
  marginLeft: '60px',
});

export default function App() {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  const callMenu = useSelector((state) => (
    state.callMenu
  ))

  return (
    <AppLayout>
      {isPc ? <WebSideBar /> : <MobileSideBar callMenu={callMenu} />}
      {isPc ? <WebPagesLayout>
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
      </WebPagesLayout>
        :
        <MobilePagesLayout>
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
        </MobilePagesLayout>
      }
    </AppLayout>
  )
}
