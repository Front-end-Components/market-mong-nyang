import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.scss';
import AdminNavbar from './components/admin/AdminNavbar';
import { testIsAdmin } from './store/userSlice';
import AdminHeader from './components/admin/AdminHeader';

function App() {
  let loading = useSelector((state) => {
    return state.loading;
  });
  let isAdmin = useSelector((state) => {
    return state.user.isAdmin;
  });
  // TEST
  // let dispatch = useDispatch();
  // dispatch(testIsAdmin());
  return (
    <div>
      {loading ? <Loading /> : null}
      {isAdmin ? (
        <div>
          <AdminHeader />
          <div className={style.adminWrap}>
            <AdminNavbar />
            <div className={style.adminOutlet}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className={style.outlet}>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
