import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./ContactForm/ContactForm.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <section className={css.sectionPhonebook}>
        <h2 className={css.sectionHeader}>Phonebook</h2>
        <ContactForm />
      </section>

      <Filter />

      <section className={css.sectionContacts}>
        <h2 className={css.sectionHeader}>Contacts</h2>
        <ContactList />
      </section>
    </div>
  );
};
