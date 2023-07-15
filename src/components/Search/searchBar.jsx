import { Formik } from 'formik';
import {
  HeaderSearchbar,
  Input,
  SearchForm,
  SearchFormBtn,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const query = values.query;
    if (query === "") {
      Notify.info('Please, fill in the input field');
      return;
    }
    resetForm();
    onSubmit(query);
  };

  return (
    <HeaderSearchbar>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Input
            id="search"
            type="text"
            name="query"
            autoFocus
            placeholder="Search Beer"
          />
          <SearchFormBtn type="submit">
            <BsSearch />
          </SearchFormBtn>
        </SearchForm>
      </Formik>
    </HeaderSearchbar>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
