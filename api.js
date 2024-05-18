// import axios from 'axios';

// const API_URL = "http://localhost:8000";

// export const saveData = async (data) => {
//     try {
//         await axios.post(`${API_URL}/save`, data);
//         //return response.data;
//     } catch (error) {
//         console.log('Error while calling the api ', error.message);
//         // return error.response.data;
//     }
// }

// export const getData = async (data) => {
//     try {
//          let response = await axios.get(`${API_URL}/get`);
//          return response.data;
//     } catch (error) {
//         console.log('Error while calling the api ', error.message);
//         // return error.response.data;
//     }
// }

import axios from 'axios';

const API_URL = "http://ec2-13-233-173-148.ap-south-1.compute.amazonaws.com:8000";

export const saveData = async (data) => {
    try {
        await axios.post(`${API_URL}/save`, data);
        //return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        //return error.response.data;
    }
}

export const getData = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        //return error.response.data;
    }
}