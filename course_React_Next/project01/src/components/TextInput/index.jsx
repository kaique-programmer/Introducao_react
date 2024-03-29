import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="type your search"
    />
  );
};

TextInput.prototype = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}