// send api 
import axios from 'axios';

class OverViewApi {
  async concertsOverview(token) {
    try {
      const response = await axios.get(`http://localhost:4000/concerts_overview`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }

  async logConcerts(token) {
    try {
      const response = await axios.get(`http://localhost:4000/log_concerts`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error.message);
    }
  }
}

export default new OverViewApi();