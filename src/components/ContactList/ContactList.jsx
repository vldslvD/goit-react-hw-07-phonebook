import { Contact } from 'components/Contact/Contact';
import { getFilter } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors} from 'redux/contacts'

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch])

  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(getFilter);

  const getFiltered = () => {
    const standartizedFilter = filter.toLowerCase();
    //console.log(contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(standartizedFilter)
    );
  };
  return (
    <ul>
      {getFiltered().map(contact => {
        return <Contact key={contact.id} contact={contact}></Contact>;
      })}
    </ul>
  );
};
