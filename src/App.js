import { useRoutes } from 'react-router-dom';
import PokemonList from './modules/PokemonList';
import PokemonDetail from './modules/PokemonDetail';
import Root from './layout/Root/Root';

const App = () => {
  return useRoutes([{
    path: '/',
    element: <Root />,
    children: [
      { path: 'pokemon', element: <PokemonList /> },
      { path: 'pokemon/:name', element: <PokemonDetail /> }
    ],
  }]);
}

export default App;
