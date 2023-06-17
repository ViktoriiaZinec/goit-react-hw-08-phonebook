import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(registerUser(user));
  };
  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="ntext" name="name" required />
          <div>Please tipe your name</div>
        </div>
        <div>
          <label>Email address</label>
          <input type="email" name="email" required />
          <div>We'll never share your email with anyone else.</div>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label>Check me out</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

// export default RegistrationPage;
