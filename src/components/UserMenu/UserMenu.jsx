import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const { user } = useAuth();
  console.log('user :>> ', user);

  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <div className={css.container}>
      <p className={css.email}>{user.email}</p>
      <button onClick={handleLogout} className={css.btn_logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
