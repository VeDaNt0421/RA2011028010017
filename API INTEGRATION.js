// src/api.js
import axios from 'axios';

const baseURL = 'http://20.244.56.144/train'; // Replace with actual API URL

const api = axios.create({
  baseURL,
});

export const registerCompany = async (rollNumber, accessCode) => {
  try {
    const response = await api.post('/register', { rollNumber, accessCode });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTrains = async () => {
  try {
    const response = await api.get('/trains');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTrainById = async (trainId) => {
  try {
    const response = await api.get(`/trains/${trainId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
