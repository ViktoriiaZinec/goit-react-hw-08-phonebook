import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import css from './RegistartionPage.module.css';
import { FaAngleRight } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
      .min(7, 'Password must be at least 7 characters'),
  });

  const onSubmit = values => {
    dispatch(registerUser(values)).then(res => {
      if (res.payload === 400) {
        return toast.error('This account already exists. Please Log In');
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <div className={css.container}>
        <div className={css.screen}>
          <div className={css.screen__content}>
            <h1 className={css.title}>Registration</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className={css.login}>
                <div className={css.login__field}>
                  <Field
                    type="text"
                    name="name"
                    placeholder="User name"
                    autoComplete="username"
                    className={css.login__input}
                  />
                  <FaUser size={16} className={css.icon_user} />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error_message_name}
                />
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
                  className={css.error_message_email}
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
                  className={css.error_message_password}
                />
                <button type="submit" className={css.login__submit}>
                  <span className={css.button__text}>Sign Up Now</span>
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
    </>
  );
};

// export default RegistrationPage;
// export const RegistrationPage = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const { name, email, password } = e.target.elements;
//     const user = {
//       name: name.value,
//       email: email.value,
//       password: password.value,
//     };
//     dispatch(registerUser(user)).then(res => {
//       if (res.payload === 400) {
//         return alert('This account already exists. Please Log In');
//       }
//     });
//   };
//   return (
//     <div className={css.container}>
//       <div className={css.screen}>
//         <div className={css.screen__content}>
//           <h1 className={css.title}>Registration</h1>
//           <form onSubmit={handleSubmit} className={css.login}>
//             <div className={css.login__field}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="User name"
//                 autoComplete="username"
//                 required
//                 className={css.login__input}
//               />
//               <FaUser size={16} className={css.icon_user} />
//             </div>
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
//               <span className={css.button__text}>Sign Up Now</span>
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
