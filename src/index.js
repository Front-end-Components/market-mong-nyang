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
import ProductsFood from './pages/ProductsFood';
import ProductsCare from './pages/ProductsCare';
import ProductsLiving from './pages/ProductsLiving';
import ProductsHygiene from './pages/ProductsHygiene';
import ProductDetail from './pages/ProductDetail';
import Mypage from './pages/Mypage';
import MyOrder from './pages/MyOrder';
import MyOrderDetail from './pages/MyOrderDetail';
import MyAccount from './pages/Account/MyAccount';
import MyAccountForm from './pages/Account/MyAccountForm';
import MyInfo from './pages/MyInfo/MyInfo';
import MyInfoForm from './pages/MyInfo/MyInfoForm';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import AdminProducts from './pages/admin/Products/Products';
import AdminProductAddForm from './pages/admin/ProductAddForm/ProductAddForm';
import AdminProductEditForm from './pages/admin/ProductEditForm/ProductEditForm';
import AdminProductDetail from './pages/admin/ProductDetail/ProductDetail';
import AdminOrders from './pages/admin/Orders/Orders';
import AdminOrderDetail from './pages/admin/OrderDetail/OrderDetail';
import MyLike from './pages/Like/MyLike';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Search from './pages/Search';

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
            <AdminProductAddForm />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/products/modify/:id',
        element: (
          <ProtectedRoute requireAdmin>
            <AdminProductEditForm />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/product/:id',
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
