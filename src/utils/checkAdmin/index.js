import UrlAPI from 'services/url.service';

const checkAdmin = async () => {
  try {
    const response = await UrlAPI.checkAdmin();
    localStorage.setItem('is_admin', JSON.stringify(response.data.isAdmin));
  } catch (error) {
    localStorage.setItem('is_admin', JSON.stringify(false));
  }
};

export default checkAdmin;
