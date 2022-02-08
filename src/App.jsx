import restaurants from '../assets/json/restaurants.json';

import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import PostFormPage from './pages/PostFormPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage
        restaurants={restaurants}
      />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/post" element={<PostFormPage />} />
    </Routes>
  )
}
