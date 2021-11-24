import { Outlet } from 'react-router-dom';
import './sass/components/_app.sass';
import { Link } from './components/Link';

function App() {
  return (
    <div className='app'>
      <h1 className='app__heading'>React Patterns</h1>
      <nav className='app__nav'>
        <Link className='app__link' activeClassName='app__link--active' to='/'>
          Patterns
        </Link>
        <Link
          className='app__link'
          activeClassName='app__link--active'
          to='container-presentional'
        >
          Container and Presentional
        </Link>
      </nav>
      <div className='app__content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
