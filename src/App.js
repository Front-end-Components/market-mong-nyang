// 개발 후 삭제 필요
/* eslint-disable */

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from './components/admin/AdminNavbar';
import { testIsAdmin } from './store/userSlice';
import AdminHeader from './components/admin/AdminHeader';
import { GlobalStyle } from './style/GlobalStyle';

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
      <GlobalStyle />
      {loading ? <Loading /> : null}
      {isAdmin ? (
        <div>
          <AdminHeader />
          <div css={adminStyle}>
            <AdminNavbar />
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div css={userStyle}>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

const adminStyle = css`
  display: flex;
  width: 100vw;
  div {
    width: 80vw;
    padding: 2rem;
  }
`;

const userStyle = css`
  display: flex;
  justify-content: center;
`;

export default App;
