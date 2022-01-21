import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const UserAPI = {
  signUpUser: (firebaseToken) => axios.post(`${REACT_APP_API_URL}/api/users`, { firebaseToken }),
};

export default UserAPI;
