import {
  WRONG_PASSWORD,
  ACCOUNT_NOT_EXISTS,
  WEAK_PASSWORD,
  EMAIL_ALREADY_IN_USE,
  TOO_MANY_REQUESTS,
  CLEAR_ERROR,
} from 'action-types';

const initialState = {
  error: {
    signIn: { email: null, password: null },
    signUp: { email: null, password: null },
  },
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case WRONG_PASSWORD:
      return {
        ...state,
        error: {
          ...state.error,
          signIn: { email: null, password: 'Wrong password.' },
        },
      };

    case ACCOUNT_NOT_EXISTS:
      return {
        ...state,
        error: {
          ...state.error,
          signIn: {
            email: 'Please include a valid email address.',
            password: null,
          },
        },
      };

    case WEAK_PASSWORD:
      return {
        ...state,
        error: {
          ...state.error,
          signUp: {
            email: null,
            password: 'Password should be at least 6 characters.',
          },
        },
      };

    case EMAIL_ALREADY_IN_USE:
      return {
        ...state,
        error: {
          ...state.error,
          signUp: {
            email: 'An account with that email already exists.',
            password: null,
          },
        },
      };

    case TOO_MANY_REQUESTS:
      return {
        ...state,
        error: {
          ...state.error,
          signIn: {
            email:
              'Access to this account has been temporarily disabled due to many failed login attempts.',
            password: null,
          },
        },
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: {
          signIn: { email: null, password: null },
          signUp: { email: null, password: null },
        },
      };

    default:
      return state;
  }
}
