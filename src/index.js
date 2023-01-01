import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import ProductsFood from '@/pages/Product/Products/ProductsFood';
import ProductsCare from '@/pages/Product/Products/ProductsCare';
import ProductsLiving from '@/pages/Product/Products/ProductsLiving';
import ProductsHygiene from '@/pages/Product/Products/ProductsHygiene';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import Mypage from './pages/Mypage/Mypage';
import MyOrder from './pages/Mypage/MyOrder/MyOrder';
import MyOrderDetail from './pages/Mypage/MyOrder/MyOrderDetail';
import MyAccount from './pages/Mypage/Account/MyAccount';
import MyAccountForm from './pages/Mypage/Account/MyAccountForm';
import MyInfo from './pages/Mypage/MyInfo/MyInfo';
import MyInfoForm from './pages/Mypage/MyInfo/MyInfoForm';
import NotFound from './pages/common/NotFound';
import ProtectedRoute from './pages/common/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import AdminProducts from './pages/admin/Products/Products';
import AdminProductForm from './pages/admin/ProductForm/ProductForm';
import AdminProductDetail from './pages/admin/ProductDetail/ProductDetail';
import AdminOrders from './pages/admin/Orders/Orders';
import AdminOrderDetail from './pages/admin/OrderDetail/OrderDetail';
import MyLike from './pages/Mypage/Like/MyLike';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Search from '@/pages/Search/Search';

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
      { path: '/products-food', element: <ProductsFood /> },
      { path: '/products-care', element: <ProductsCare /> },
      { path: '/products-living', element: <ProductsLiving /> },
      { path: '/products-hygiene', element: <ProductsHygiene /> },
      { path: '/search/:value', element: <Search /> },
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
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage',
        element: (
          <ProtectedRoute>
            <Mypage />
          </ProtectedRoute>
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
          <ProtectedRoute requireAdmin>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/order',
        element: (
          <ProtectedRoute requireAdmin>
            <AdminOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/order/:id',
        element: (
          <ProtectedRoute requireAdmin>
            <AdminOrderDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/products',
        element: (
          <ProtectedRoute requireAdmin>
            <AdminProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/products/add',
        element: (
          <ProtectedRoute requireAdmin>
            <AdminProductForm />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/products/modify/:id',
        element: (
          <ProtectedRoute requireAdmin>
            <AdminProductForm />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/products/:id',
        element: (
          <ProtectedRoute requireAdmin>
            <AdminProductDetail />
          </ProtectedRoute>
        ),
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
