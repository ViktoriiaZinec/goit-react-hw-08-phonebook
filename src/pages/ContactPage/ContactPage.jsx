// import { Filter } from 'components/Filter/Filter';

const { AddContacts } = require('components/AddContacts/AddContacts');
const { ContactsList } = require('components/ContactsList/ContactsList');
const { Filter } = require('components/Filter/Filter');

const ContactPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <AddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactPage;
