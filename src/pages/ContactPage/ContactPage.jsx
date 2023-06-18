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
    <section>
      <div className={css.contact_page}>
        <div className={css.contacts}>
          <h2 className={css.contacts_title}>Contacts</h2>
          <Filter />
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactsList />
        </div>
        <div className={css.contacts}>
          <h2 className={css.contacts_title}>Phonebook</h2>
          <AddContacts />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
