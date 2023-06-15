import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export function ContactsList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilter);

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              className={css.btnDelete}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
