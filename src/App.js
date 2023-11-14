import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

//Components
import { Menu } from './components/menu/Menu';

const HomePage = loadable(() => import('./pages/homePage/HomePage'), {
  resolveComponent: (components) => components.HomePage,
});
const GamesPage = loadable(() => import('./pages/gamesPage/GamePage'), {
  resolveComponent: (components) => components.GamePage,
});
const DetailsPage = loadable(() => import('./pages/detailsPage/DetailPage'), {
  resolveComponent: (components) => components.DetailPage,
});
const FormCityPage = loadable(() => import('./pages/homePage/create/FormCityPage'), {
  resolveComponent: (components) => components.FormCityPage,
});
const FormGamePage = loadable(() => import('./pages/gamesPage/create/FormGamePage'), {
  resolveComponent: (components) => components.FormGamePage,
});

function App() {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="" element={<HomePage/>} />
        <Route path="homepage" element={<HomePage/>} />
        <Route path="gamepage/:id" element={<GamesPage/>} />
        <Route path="gamepage" element={<GamesPage/>} />
        <Route path="details" element={<DetailsPage/>} />
        <Route path="createCity" element={<FormCityPage/>} />
        <Route path="createGame" element={<FormGamePage/>} />
        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
