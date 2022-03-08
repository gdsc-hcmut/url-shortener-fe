import {
  WRONG_PASSWORD,
  ACCOUNT_NOT_EXISTS,
  WEAK_PASSWORD,
  EMAIL_ALREADY_IN_USE,
  TOO_MANY_REQUESTS,
  CLEAR_ERROR,
  EXPIRED_ACTION_CODE,
  INVALID_ACTION_CODE,
  USER_DISABLED,
} from 'action-types';

export const setError = (errCode) => (dispatch) => {
  switch (errCode) {
    case 'auth/wrong-password':
      dispatch({ type: WRONG_PASSWORD });
      break;

    case 'auth/user-not-found':
      dispatch({ type: ACCOUNT_NOT_EXISTS });
      break;

    case 'auth/weak-password':
      dispatch({ type: WEAK_PASSWORD });
      break;

    case 'auth/email-already-in-use':
      dispatch({ type: EMAIL_ALREADY_IN_USE });
      break;

    case 'auth/too-many-requests':
      dispatch({ type: TOO_MANY_REQUESTS });
      break;

    case 'auth/expired-action-code':
      dispatch({ type: EXPIRED_ACTION_CODE });
      break;

    case 'auth/invalid-action-code':
      dispatch({ type: INVALID_ACTION_CODE });
      break;

    case 'auth/user-disabled':
      dispatch({ type: USER_DISABLED });
      break;

    default:
      break;
  }
};

export const clearError = () => (dispatch) => dispatch({ type: CLEAR_ERROR });
