import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// patterns
import { RickAndMortyCharacters } from './patterns/container-presentional/container/RickAndMortyCharacters';

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route
          path='container-presentional'
          element={<RickAndMortyCharacters />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
