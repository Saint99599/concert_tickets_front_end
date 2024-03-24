// send api 
import axios from 'axios';

class Admin_Api {

  async fetchConcertData() {
    try {
      const response = await axios.get(`http://localhost:4000/concerts_admin`);
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async postConcert({name, seat, description}) {
    try {
      const response = await axios.post(`http://localhost:4000/concerts_admin`,{
        name: name,
        seat: seat,
        description: description
      });
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async deleteConcert({name}) {
    try {
      const response = await axios.delete(`http://localhost:4000/concerts_admin/${name}`);
      return response;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }
}

export default new Admin_Api();
