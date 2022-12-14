import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Nav/Navbar/Navbar';
import Loading from './components/common/Loading';
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
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const loading = useSelector((state) => state.loading.isLoading);
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const requestLoginConfirm = useCallback(async () => {
    const userInfo = await requestUserConfirm();
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
