import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilteredContacts } from 'redux/selectors';
import { setStatusFilter } from 'redux/contactsSlyce';

export function Filter({ setFilter, filterName }) {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredContacts);

  return (
    <div className={css.filter_container}>
      <p className={css.title_find}>Find contacts by name</p>
      <input
        className={css.input_find}
        type="text"
        value={filter}
        onChange={event => dispatch(setStatusFilter(event.currentTarget.value))}
      />
    </div>
  );
}
