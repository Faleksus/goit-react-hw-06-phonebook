import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/contacts.slice";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.query);
  const dispatch = useDispatch();

  const changeFilter = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  const getVisibleContacts = changeFilter();

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {getVisibleContacts.map(({ id, name, number }) => {
        return (
          <div className={css.contactItem}>
            <Contact key={id} name={name} number={number} />
            <button
              type="button"
              className={css.btn}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <p>
        Total number of contacts in the phonebook: {getVisibleContacts.length}
      </p>
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
