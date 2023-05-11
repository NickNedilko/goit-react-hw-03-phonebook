import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id} className={css.item}>
            <span>
              {name}: {number}
            </span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete <RiDeleteBin6Line />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
