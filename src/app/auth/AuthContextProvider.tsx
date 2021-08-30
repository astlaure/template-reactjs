import React, { useEffect, useReducer, useState } from 'react';
import AuthContext, { AuthState, initialState } from './AuthContext';
import useHttpClient from '../core/useHttpClient';

interface Action {
  type: 'LOGIN' | 'LOGOUT';
  payload?: any;
}

const reducer = (state = initialState, action: Action): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
}

const AuthContextProvider: React.FC = (props) => {
  const { children } = props;

  const httpClient = useHttpClient();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    httpClient.get('/api/auth/profile')
      .then((user) => dispatch({ type: 'LOGIN', payload: user }))
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {loaded ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
