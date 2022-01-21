import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const UserAPI = {
  signUpUser: (userData) => axios.post(`${REACT_APP_API_URL}/api/users`, { userData }),
};

export default UserAPI;
