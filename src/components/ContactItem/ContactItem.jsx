import css from './ContactItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/actions';

export const ContactItem = () => {
  const contacts = useSelector(state => state.contacts);
  const filterPhrase = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const filterContactsByName = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterPhrase.toLowerCase())
    );
  };
  let filteredContacts = filterContactsByName(contacts);

  const handleDelete = contactId => {
    dispatch(removeContact(contactId));
  };

  return filteredContacts.map(contact => (
    <li className={css.listItem} key={contact.id}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={css.button} onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  ));
};
