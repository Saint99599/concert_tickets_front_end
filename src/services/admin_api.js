// send api 
import axios from 'axios';

class Admin_Api {

  async fetchConcertData(token) {
    try {
      const response = await axios.get(`http://localhost:4000/concerts_admin`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async postConcert({name, seat, description, token }) {
    try {
      const response = await axios.post(`http://localhost:4000/concerts_admin`,{
        headers: {'Authorization': `Bearer ${token}`},
        name: name,
        seat: seat,
        description: description
      });
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async deleteConcert({name, seat, token}) {
    try {
      const response = await axios.delete(`http://localhost:4000/concerts_admin`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        name: name,
        seat: seat,
        description: "none"
      })
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }
}

export default new Admin_Api();
