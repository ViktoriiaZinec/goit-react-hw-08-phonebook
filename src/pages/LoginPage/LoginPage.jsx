import { loginUser } from 'redux/auth/authOperations';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { FaAngleRight, FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(loginUser(user)).then(() => dispatch(fetchContacts()));
  };
  return (
    <div className={css.container}>
      <div className={css.screen}>
        <div className={css.screen__content}>
          <h1 className={css.title}>Login</h1>
          <form className={css.login} onSubmit={handleSubmit}>
            <div className={css.login__field}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={css.login__input}
              />
              <FaEnvelope size={16} className={css.icon_envelope} />
            </div>
            <div className={css.login__field}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className={css.login__input}
              />
              <FaLock size={16} className={css.icon_envelope} />
            </div>

            <button type="submit" className={css.login__submit}>
              <span className={css.button__text}>Log In Now</span>
              <FaAngleRight size={20} className={css.button__icon} />
            </button>
          </form>
        </div>
        <div className={css.screen__background}>
          <span className={css.screen__background__shape4}></span>
          <span className={css.screen__background__shape3}></span>
          <span className={css.screen__background__shape2}></span>
          <span className={css.screen__background__shape1}></span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
