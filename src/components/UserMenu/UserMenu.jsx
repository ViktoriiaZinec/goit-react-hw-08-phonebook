import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);

  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <div className={css.container}>
      <p className={css.email}>{email}</p>
      <button onClick={handleLogout} className={css.btn_logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
