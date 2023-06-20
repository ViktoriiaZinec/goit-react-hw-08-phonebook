// import { useState } from 'react';
import css from './AddContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddContacts = ({ id }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const isExist = (name, number, contacts) => {
      return contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      );
    };

    console.log('name :>> ', name);
    console.log('number :>> ', number);
    if (isExist(name, number, contacts)) {
      toast.error(name + ' is already in contact list');
    } else {
      const contact = { name, number, id };
      dispatch(addContact(contact));
      toast.success('Contact added successfully!');
      resetForm();
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я\s'-]+$/, value => {
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
      })
      .required('Name is required'),
    number: Yup.string()
      .matches(/^[\d+\s-()]+$/, value => {
        toast.error(
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        );
        return 'Phone number is invalid';
      })
      .required('Number is required'),
  });

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form_container}>
          <div className={css.form_name}>
            <p className={css.form_label}>Fill in name</p>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
              autoComplete="username"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.error_message_name}
            />

            <p className={css.form_label}>Fill in number</p>
            <Field
              type="text"
              name="number"
              placeholder="Number"
              className={css.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={css.error_message_number}
            />
          </div>
          <button type="submit" className={css.btn_primary}>
            Add Contacts
          </button>
        </Form>
      </Formik>
    </>
  );
};

// export const AddContacts = ({ id }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(selectContacts);

//   const dispatch = useDispatch();

//   const handleChangeName = ({ target }) => {
//     setName(target.value);
//   };
//   const handleChangeNumber = ({ target }) => {
//     setNumber(target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     const isExist = (name, number, contacts) => {
//       return contacts.some(
//         contact =>
//           contact.name.toLowerCase() === name.toLowerCase() ||
//           contact.number === number
//       );
//     };

//     if (isExist(name, number, contacts)) {
//       return alert(name + ' is already in contact list');
//     }
//     const contact = { name: name, number: number, id: id };

//     dispatch(addContact(contact));

//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <div className={css.form_name}>
//         <p className={css.form_label}>Fill in name</p>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ]?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChangeName}
//           value={name}
//           className={css.input}
//           autoComplete="username"
//         />
//         <p className={css.form_label}>Fill in number</p>
//         <input
//           type="tel"
//           name="number"
//           placeholder="Number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleChangeNumber}
//           value={number}
//           className={css.input}
//         />
//       </div>

//       <button type="submit" className={css.btn_primary}>
//         Add Contacts
//       </button>
//     </form>
//   );
// };
