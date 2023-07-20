import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  // console.log(useSelector(state => state));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className={css.heading}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.secondaryHeading}>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactItem />
      </ContactList>
    </div>
  );
};
