import { Button } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {contact.name}: {contact.phone}
      <Button onClick={() => dispatch(contactsOperations.deleteContact(contact.id))}>
        Delete
      </Button>
    </li>
  );
};
