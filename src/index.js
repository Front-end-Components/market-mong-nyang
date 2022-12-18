import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Mypage from './pages/Mypage';
import MyOrder from './pages/MyOrder';
import MyOrderDetail from './pages/MyOrderDetail';
import MyAccount from './pages/MyAccount';
import MyAccountForm from './pages/MyAccountForm';
import MyInfo from './pages/MyInfo';
import MyInfoForm from './pages/MyInfoForm';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminProductAddForm from './pages/admin/ProductAddForm';
import AdminProductEditForm from './pages/admin/ProductEditForm';
import AdminProductDetail from './pages/admin/ProductDetail';
import AdminOrders from './pages/admin/Orders';
import AdminOrderDetail from './pages/admin/OrderDetail';
import MyLike from './pages/MyLike';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      { path: '/products', element: <Products /> },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/payment',
        element: (
          // <ProtectedRoute>
          <Payment />
          // </ProtectedRoute>
        ),
      },
      {
        path: '/mypage',
        element: (
          // <ProtectedRoute>
          <Mypage />
          // </ProtectedRoute>
        ),
        children: [
          {
            path: '/mypage/order',
            element: <MyOrder />,
          },
          {
            path: '/mypage/order/:id',
            element: <MyOrderDetail />,
          },
          {
            path: '/mypage/account',
            element: <MyAccount />,
            children: [
              {
                path: '/mypage/account/add',
                element: <MyAccountForm />,
              },
            ],
          },
          {
            path: '/mypage/like',
            element: <MyLike />,
          },
          {
            path: '/mypage/info',
            element: <MyInfo />,
            children: [
              {
                path: '/mypage/info/modify',
                element: <MyInfoForm />,
              },
            ],
          },
        ],
      },
      {
        path: '/admin',
        element: (
          // <ProtectedRoute requireAdmin>
          // <Dashboard />
          <AdminProducts />
          // </ProtectedRoute>
        ),
      },
      {
        path: '/admin/order',
        element: <AdminOrders />,
      },
      {
        path: '/admin/order/:id',
        element: <AdminOrderDetail />,
      },
      {
        path: '/admin/products',
        element: <AdminProducts />,
      },
      {
        path: '/admin/products/add',
        element: <AdminProductAddForm />,
      },
      {
        path: '/admin/products/modify/:id',
        element: <AdminProductEditForm />,
      },
      {
        path: '/admin/product/:id',
        element: <AdminProductDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
