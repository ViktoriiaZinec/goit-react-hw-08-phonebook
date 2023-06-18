import { useSelector } from 'react-redux';
import css from './HomePage.module.css';
import { getUser, selectIsLoggedIn } from 'redux/auth/authSelectors';
const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(getUser);
  console.log('isLoggedIn :>> ', isLoggedIn);
  return (
    <div className={css.container}>
      <div className={css.screen}>
        <div className={css.screen__content}>
          {!isLoggedIn ? (
            <h1 className={css.title}>
              We're glad you're here! <br />
              To use our app, please log in or register for an account.
            </h1>
          ) : (
            <h1 className={css.title}>
              Hi, {name}! <br />
              We're glad you're here!
              <br />
            </h1>
          )}
        </div>
        <div className={css.screen__background}>
          <span className={css.screen__background__shape3}></span>
          <span className={css.screen__background__shape2}></span>
          <span className={css.screen__background__shape1}></span>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
