import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
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
