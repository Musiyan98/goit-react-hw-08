// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import ContactList from './ContactList/ContactList';
// import SearchBox from './SearchBox/SearchBox';
// import ContactForm from './ContactForm/ContactForm';
// import Notification from './Notification/Notification';
// import Loader from './Loader/Loader';
// import ErrorMessage from './ErrorMessage/ErrorMessage';

// import {
//   selectIsFilter,
//   selectIsContact,
//   selectIsLoading,
//   selectIsError,
// } from '../redux/main/selectors.js';
import { refreshUser } from '../redux/auth/operations';

// import './App.css';
import ContactsPage from '../pages/ContactsPage/ContactsPage'
import LogOut from './LogOut/LogOut'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

function App() {
  const dispatch = useDispatch();

  // const isContact = useSelector(selectIsContact);
  // const isFilter = useSelector(selectIsFilter);
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <LogOut />
      <LoginPage />
      <RegisterPage />
      <ContactsPage />

      {/* <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {!isLoading &&
          !isError &&
          (isContact ? (
            isFilter ? (
              <ContactList />
            ) : (
              <Notification type={'isFilter'} />
            )
          ) : (
            <Notification type={'isContact'} />
          ))}
      </div> */}
    </>
  );
}

export default App;
