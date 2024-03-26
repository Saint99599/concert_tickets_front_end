// send api 
import axios from 'axios';

class Auth_Api {
  async register({username, password}) {
    try {
      const response = await axios.post(`http://localhost:4000/accounts/register`,{
        username: username,
        password: password
      });
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async login({username, password}) {
    try {
      const response = await axios.post(`http://localhost:4000/accounts/login`,{
        username: username,
        password: password
      });
      console.log(response)
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }
}

export default new Auth_Api();
