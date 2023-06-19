import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import css from './Layout.jmodule.css';

export const Layout = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts" className={css.link}>
                Contacts
              </NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/registration" className={css.link}>
                Registration
              </NavLink>
              <NavLink to="/login" className={css.link}>
                Autorisation
              </NavLink>
            </>
          )}
          <div className={css.animation}></div>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
