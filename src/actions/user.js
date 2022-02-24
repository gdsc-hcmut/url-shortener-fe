import { USER_LOADED, USER_NOT_FOUND, NEW_EMAIL_TAKEN } from 'action-types';
import AuthService from 'services/auth.service';
import UserAPI from 'services/user.service';

export const editProfile = (name, newEmail, email, dateOfBirth) => async (dispatch) => {
  try {
    AuthService.changeEmail(newEmail);
    const res = await UserAPI.editProfile(name, newEmail, email, dateOfBirth);
    dispatch({
      type: USER_LOADED,
      payload: {
        name: res.data.name,
        email: res.data.email,
        dateOfBirth: res.data.dateOfBirth,
        avatar: res.data.avatar,
      },
    });
  } catch (err) {
    if (err.response.data.errors.message === 'Email has been taken') {
      dispatch({
        type: NEW_EMAIL_TAKEN,
      });
    } else {
      dispatch({
        type: USER_NOT_FOUND,
      });
    }
  }
};

export default { editProfile };
