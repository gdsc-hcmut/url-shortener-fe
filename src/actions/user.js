import { USER_LOADED, USER_NOT_FOUND } from 'action-types';
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
      },
    });
  } catch (err) {
    dispatch({
      type: USER_NOT_FOUND,
    });
  }
};

export default { editProfile };
