import { loginUser } from 'redux/auth/authOperations';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { FaAngleRight, FaEnvelope, FaLock } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { toast } from 'react-toastify';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const isRegistered = checkIfEmailRegistere(user.email);

  // if (!isRegistered) {
  //   toast.error('Email is not registered');
  //   return; // Stop the form submission
  // }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = values => {
    dispatch(loginUser(values)).then(() => dispatch(fetchContacts()));
  };

  return (
    <div className={css.container}>
      <div className={css.screen}>
        <div className={css.screen__content}>
          <h1 className={css.title}>Login</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.login}>
              <div className={css.login__field}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="username"
                  className={css.login__input}
                />
                <FaEnvelope size={16} className={css.icon_envelope} />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className={css.error_message}
              />
              <div className={css.login__field}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={css.login__input}
                />
                <FaLock size={16} className={css.icon_envelope} />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={css.error_message}
              />
              <button type="submit" className={css.login__submit}>
                <span className={css.button__text}>Log In Now</span>
                <FaAngleRight size={20} className={css.button__icon} />
              </button>
            </Form>
          </Formik>
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

// const LoginPage = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const { email, password } = e.target.elements;
//     const user = {
//       email: email.value,
//       password: password.value,
//     };
//     dispatch(loginUser(user)).then(() => dispatch(fetchContacts()));
//   };
//   return (
//     <div className={css.container}>
//       <div className={css.screen}>
//         <div className={css.screen__content}>
//           <h1 className={css.title}>Login</h1>
//           <form className={css.login} onSubmit={handleSubmit}>
//             <div className={css.login__field}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 autoComplete="username"
//                 required
//                 className={css.login__input}
//               />
//               <FaEnvelope size={16} className={css.icon_envelope} />
//             </div>
//             <div className={css.login__field}>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 autoComplete="current-password"
//                 required
//                 className={css.login__input}
//               />
//               <FaLock size={16} className={css.icon_envelope} />
//             </div>

//             <button type="submit" className={css.login__submit}>
//               <span className={css.button__text}>Log In Now</span>
//               <FaAngleRight size={20} className={css.button__icon} />
//             </button>
//           </form>
//         </div>
//         <div className={css.screen__background}>
//           <span className={css.screen__background__shape4}></span>
//           <span className={css.screen__background__shape3}></span>
//           <span className={css.screen__background__shape2}></span>
//           <span className={css.screen__background__shape1}></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
