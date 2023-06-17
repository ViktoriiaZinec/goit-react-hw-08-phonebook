import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  console.log('user :>> ', email);
  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
