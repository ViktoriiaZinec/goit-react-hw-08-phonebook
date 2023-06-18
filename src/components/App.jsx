import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectIsLoading } from 'redux/selectors';
// import css from './Filter/Filter.module.css';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactPage from '../pages/ContactPage/ContactPage';

import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="registration"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
