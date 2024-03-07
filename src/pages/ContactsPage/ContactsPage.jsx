import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import Notification from '../../components/Notification/Notification';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import {
  selectIsFilter,
  selectIsContact,
  selectIsLoading,
  selectIsError,
} from '../../redux/main/selectors.js';
import { fetchContact } from '../../redux/main/operations.js';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isContact = useSelector(selectIsContact);
  const isFilter = useSelector(selectIsFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchContact(controller));
    return () => {
        controller.abort()}
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {!isLoading &&
        //   !isError &&
          (isContact ? (
            isFilter ? (
              <ContactList />
            ) : (
              <Notification type={'isFilter'} />
            )
          ) : (
            <Notification type={'isContact'} />
          ))}
      </div>
    </>
  );
}

export default ContactsPage;