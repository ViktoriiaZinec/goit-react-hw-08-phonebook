import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <section>
      <div className={css.login_page}>
        <h1>Login</h1>
        <form className={css.form_login_page}>
          <div>
            <label>Email address</label>
            <input type="email" className={css.form_control} />
            <div>We'll never share your email with anyone else.</div>
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
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
