// send api 
import axios from 'axios';

class User_Api {

  async addProductToUser({username, productname, token }) {
    
    console.log("username",username)
    console.log("productname",productname)
    console.log("token",token)
    try {
      const response = await axios.post(`http://localhost:4000/concerts_user/reservet`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        username: username,
        productname: productname,
        action: "reserve"
      })
      console.log("res",response)
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async deleteProductFromUser({username, productname, token }) {
    try {
      const response = await axios.delete(`http://localhost:4000/concerts_user/cancel`,{
        headers: {'Authorization': `Bearer ${token}`},
        username: username,
        productname: productname,
        action: ""
      });
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async findAll(token) {
    try {
      const response = await axios.get(`http://localhost:4000/concerts_user`,{
        headers: {'Authorization': `Bearer ${token}`}
      });
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async findOne({name, token}) {
    try {
      const response = await axios.get(`http://localhost:4000/concerts_user/${name}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }
}

export default new User_Api();
