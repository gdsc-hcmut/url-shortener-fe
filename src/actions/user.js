import { USER_LOADED, USER_NOT_FOUND } from 'action-types';
import UserAPI from 'services/user.service';

export const editProfile = (name, email, dateOfBirth, avatar) => async (dispatch) => {
  try {
    const res = await UserAPI.editProfile(name, email, dateOfBirth, avatar);
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
    dispatch({
      type: USER_NOT_FOUND,
    });
  }
};

export default { editProfile };
