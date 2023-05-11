import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { FcSearch } from 'react-icons/fc';

const Filter = ({ value, onFilter }) => {
  return (
    <div className={css.filterWrapper}>
      <p className={css.filterText}>
        Find contact by name <FcSearch />
      </p>
      <label htmlFor="">
        <input
          className={css.filterInput}
          type="text"
          value={value}
          onChange={onFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
