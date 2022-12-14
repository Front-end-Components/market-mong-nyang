import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.scss';
import AdminNavbar from './components/admin/AdminNavbar';
import { testIsAdmin } from './store/userSlice';
import AdminHeader from './components/admin/AdminHeader';
import { useEffect, useState } from 'react';

function App() {
  let loading = useSelector((state) => {
    return state.loading.isLoading;
  });
  // let isAdmin = useSelector((state) => {
  //   return state.user.isAdmin;
  // });

  let isAdmin = true;

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
            <div className={style.adminOutletWrap}>
              <div className={style.adminOutlet}>
                <Outlet />
              </div>
            </div>
            <div className={style.footer}>{/* <Footer /> */}</div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className={style.outlet}>
            <Outlet />
          </div>
          <div className={style.footer}>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
