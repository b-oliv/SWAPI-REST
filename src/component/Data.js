import axios from 'axios';

class Data {

    baseUrl = "https://swapi.co/api/";

    getAll = async (arg) => {
        try {
            const response = await axios.get(this.baseUrl + arg);
            return {
                items: response.data
        };
        } catch (error) {
            return{ error };
        }
    }

    getOne = async (arg, id) => {
        try {
            const response = await axios.get(this.baseUrl + arg + '/' + id);
            return {
                items: response.data
        };
        } catch (error) {
            return{ error };
        }
    }
  
}

export default Data;

