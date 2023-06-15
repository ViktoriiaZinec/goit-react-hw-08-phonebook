import { useEffect } from 'react';
import { AddContacts } from './AddContacts/AddContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import css from './Filter/Filter.module.css';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p className={css.loading}>Loading...</p>}
      <h1>Phonebook</h1>
      <AddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
