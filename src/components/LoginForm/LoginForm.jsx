import css from './LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import * as Yup from 'yup';

const logInSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Email must be at least3 symbol long')
    .max(50, 'Email must be shorter than 50 symbol long')
    .email('must be a valid email')
    .required('This is required field'),
    password: Yup.string()
    .min(3, 'Password must be at least3 symbol long')
    .max(50, 'Password must be shorter than 50 symbol long')
    .required('This is required field'),
});

const LoginForm = () => {
  const emailFildId = nanoid();
  const passwordFildId = nanoid();

  const dispatch = useDispatch();

  const handleLogIn = item => {
    dispatch(logIn(item));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={logInSchema}
      onSubmit={(value, action) => {
        handleLogIn({
          ...value,
        });
        action.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={emailFildId}>
            Email
          </label>
          <Field className={css.input} type="text" name="email" id={emailFildId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={passwordFildId}>
            Password
          </label>
          <Field className={css.input} type="password" name="password" id={passwordFildId} />
          <ErrorMessage className={css.error} name="password" component="span" />
        </div>
        <button className={css.submitButton} type="submit">
        log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
