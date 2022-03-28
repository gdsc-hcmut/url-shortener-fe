import {
  USER_LOADED,
  USER_NOT_FOUND,
  NEW_EMAIL_TAKEN,
  CHANGE_PASSWORD_FAIL,
} from 'action-types';
import AuthService from 'services/auth.service';
import UserAPI from 'services/user.service';

export const editProfile = (name, newEmail, email, dateOfBirth, avatar) => async (dispatch) => {
  try {
    AuthService.changeEmail(newEmail);
    const res = await UserAPI.editProfile(
      name,
      newEmail,
      email,
      dateOfBirth,
      avatar,
    );
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
export const changePassword = (newPassword, oldPassword) => async (dispatch) => {
  try {
    await AuthService.changePassword(newPassword, oldPassword);
    const data = await AuthService.getCurrentUser();
    dispatch({
      type: USER_LOADED,
      payload: data,
    });
    console.log(data);
  } catch (err) {
    dispatch({
      type: CHANGE_PASSWORD_FAIL,
    });
  }
};
export default { editProfile, changePassword };
