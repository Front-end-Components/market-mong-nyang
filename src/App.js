// 개발 후 삭제 필요
/* eslint-disable */

import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from './components/admin/AdminNavbar';
import { testIsAdmin } from './store/userSlice';
import AdminHeader from './components/admin/AdminHeader';
import { GlobalStyle } from './style/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading && <Loading />}
      {isAdmin ? (
        <div>
          <AdminHeader />
          <AdminWrap>
            <AdminNavbar />
            <div>
              <Outlet />
            </div>
          </AdminWrap>
        </div>
      ) : (
        <div>
          <Navbar />
          <UserWrap>
            <Outlet />
          </UserWrap>
        </div>
      )}
    </ThemeProvider>
  );
}

const AdminWrap = styled.div`
  display: flex;
  width: 100vw;
  div {
    width: 80vw;
    padding: 2rem;
  }
`;

const UserWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
