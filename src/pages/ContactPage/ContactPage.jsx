// import { Filter } from 'components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import css from './ContactPage.module.css';

const { AddContacts } = require('components/AddContacts/AddContacts');
const { ContactsList } = require('components/ContactsList/ContactsList');
const { Filter } = require('components/Filter/Filter');

const ContactPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <AddContacts />
      <h2>Contacts</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
};

export default ContactPage;
