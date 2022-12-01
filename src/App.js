import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';
import style from './App.module.scss';

function App() {
  let loading = useSelector((state) => {
    return state;
  });
  return (
    <div>
      {loading ? <Loading /> : null}
      <Navbar />
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
