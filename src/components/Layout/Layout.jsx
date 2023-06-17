import UserMenu from 'components/UserMenu/UserMenu';
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
            <NavLink to="/">Home</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink to="/contacts">Contacts</NavLink>
                <UserMenu />
              </>
            ) : (
              <>
                <NavLink to="/registration">Registration</NavLink>
                <NavLink to="/login">Autorisation</NavLink>
              </>
            )}
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
