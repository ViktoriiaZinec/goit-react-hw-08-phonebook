import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.screen}>
        <div className={css.screen__content}>
          <h1 className={css.title}>
            We're glad you're here! <br />
            To use our app, please log in or register for an account.
          </h1>
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
