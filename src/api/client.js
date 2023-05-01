import axios from 'axios';

const API_URL = 'https://example.com/api';

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getItem = async (itemId) => {
  try {
    const response = await axios.get(`${API_URL}/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/items`, itemData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateItem = async (itemId, itemData) => {
  try {
    const response = await axios.put(`${API_URL}/items/${itemId}`, itemData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(`${API_URL}/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
