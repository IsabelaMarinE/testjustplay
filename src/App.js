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

function App() {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="homepage" element={<HomePage/>} />
        <Route path="gamepage" element={<GamesPage/>} />
        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
