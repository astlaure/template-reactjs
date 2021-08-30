import React from 'react';
import { User } from '../users/user.model';

export interface AuthState {
  authenticated: boolean;
  user?: User;
}

export const initialState: AuthState = {
  authenticated: false,
  user: undefined,
}

interface ReactContext {
  state: AuthState;
  dispatch: React.Dispatch<any>;
}

const AuthContext = React.createContext<ReactContext>({ state: initialState, dispatch: () => {} });

export default AuthContext;
