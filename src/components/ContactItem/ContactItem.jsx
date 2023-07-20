import css from './ContactItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';
import { getStatusFilter } from 'redux/selectors';

export const ContactItem = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterPhrase = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  const filterContactsByName = contacts => {
    if (filterPhrase === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterPhrase.toLowerCase())
      );
    }
  };
  let filteredContacts = filterContactsByName(contacts);

  const handleDelete = contactId => {
    console.log(contactId);
    dispatch(removeContact(contactId));
  };

  return filteredContacts.map(contact => (
    <li className={css.listItem} key={contact.id}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button className={css.button} onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  ));
};
