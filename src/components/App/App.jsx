import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/App/App.styled';
import { contactsSelectors } from 'redux/contacts';
import { useSelector } from 'react-redux';

export const App = () => {
    const contacts = useSelector(contactsSelectors.getContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      {contacts.length> 0 && <h2>Contacts</h2>}
      <ContactList />
    </Container>
  );
};
