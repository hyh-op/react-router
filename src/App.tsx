import './App.css';
import { useRoutes } from 'react-router';
import { accountRoutes, mainRoutes } from './router/routes';

function App() {
  const routing = useRoutes([mainRoutes, accountRoutes]);
  return (
    <>
      {routing}
    </>
  );
}

export default App;
