import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.scss';
import AdminNavbar from './components/admin/AdminNavbar/AdminNavbar';
import { setUserInfo } from './store/userSlice';
import AdminHeader from './components/admin/AdminHeader/AdminHeader';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { requestUserConfirm } from './api/userAPI';

function App() {
  let location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  let loading = useSelector((state) => {
    return state.loading.isLoading;
  });
  let isAdmin = useSelector((state) => {
    return state.user.isAdmin;
  });

  useEffect(() => {
    document.title = '마켓멍냥';
  }, []);

  const requestLoginConfirm = useCallback(async () => {
    const userInfo = await requestUserConfirm();
    console.log(userInfo);
    if (userInfo) {
      setIsLogin(true);
      dispatch(
        setUserInfo({
          email: userInfo.email,
          displayName: userInfo.displayName,
          profileImg: userInfo.profileImg,
        })
      );
    }
  }, [location]);

  useEffect(() => {
    requestLoginConfirm();
  }, [requestLoginConfirm]);

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
          </div>
        </div>
      ) : (
        <div>
          <Navbar isLogin={isLogin} />
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
