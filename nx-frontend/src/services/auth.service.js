import axios from 'axios';
const API_URL = 'http://localhost:8000/users/';
class AuthService {
  async login(user) {
    let result_login = await axios.post(API_URL + 'login', {
        email: user.email,
        password: user.password,
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log(response.data)
        return response.data;
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    return result_login
  }
  logout() {
    localStorage.removeItem('user');
  }
  async register(user) {
    let result_register =  await axios.post(API_URL + 'sign_up', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
    return result_register
  }
}
export default new AuthService();
