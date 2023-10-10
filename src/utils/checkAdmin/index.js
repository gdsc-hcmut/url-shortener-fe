import UrlAPI from 'services/url.service';

const checkAdmin = async () => {
  try {
    await UrlAPI.checkAdmin();
    return true;
  } catch (error) {
    return false;
  }
};

export default checkAdmin;
