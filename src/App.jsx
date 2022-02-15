import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import MapPage from './pages/MapPage';

import restaurants from '../assets/json/restaurants.json';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <HomePage
          restaurants={restaurants}
        />
      } />
      <Route path="/post" element={
        <PostPage
          restaurants={restaurants}
        />
      } />
      <Route path="/map/:name" element={<MapPage />} />
    </Routes>
  )
}
