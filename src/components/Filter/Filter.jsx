import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        onChange={handleChange}
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
