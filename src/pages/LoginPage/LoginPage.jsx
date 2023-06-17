import { loginUser } from 'redux/auth/authOperations';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(loginUser(user));
  };
  return (
    <section>
      <div className={css.login_page}>
        <h1>Login</h1>
        <form className={css.form_login_page} onSubmit={handleSubmit}>
          <div>
            <label>Email address</label>
            <input type="email" name="email" className={css.form_control} />
            <div>We'll never share your email with anyone else.</div>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label>Check me out</label>
          </div>
          <button type="submit" className={css.btn_form_control}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
