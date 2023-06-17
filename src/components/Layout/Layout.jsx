import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <ul>
            {isLoggedIn ? (
              <NavLink to="/contacts">Contacts</NavLink>
            ) : (
              <>
                <NavLink to="/registration">Registration</NavLink>
                <NavLink to="/login">Autorisation</NavLink>
              </>
            )}
            <NavLink to="/">Home</NavLink>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
