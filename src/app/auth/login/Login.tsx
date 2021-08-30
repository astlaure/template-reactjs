import './Login.scss';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AxiosError } from 'axios';
import useHttpClient from '../../core/useHttpClient';
import { User } from '../../users/user.model';
import AuthContext from '../AuthContext';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const httpClient = useHttpClient();
  const history = useHistory();
  const { values, handleSubmit, handleChange, handleBlur, errors, setFieldValue } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('The username is required.'),
      password: Yup.string().required('The username is required.'),
    }),
    onSubmit(values) {
      httpClient.post<User>('/api/auth/login', values)
        .then((user) => {
          authContext.dispatch({ type: 'LOGIN', payload: user });
          history.push('/');
        })
        .catch((err: AxiosError) => {
          if (err.response?.status === 401) {
            setGlobal('Bad credentials.');
            setFieldValue('password', '');
          }
        });
    },
  });
  const [global, setGlobal] = useState('');

  return (
    <div>
      <h1>Login</h1>
      {global ? <p>{global}</p> : null}
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
          { errors.username ? <p>{errors.username}</p> : null }
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          { errors.password ? <p>{errors.password}</p> : null }
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
