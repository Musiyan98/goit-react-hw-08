// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';
import PrivateRoute from './RoutesComponent/PrivateRoute';
import RestrictedRoute from './RoutesComponent/RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
// import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;

