import axios from "axios";

const authEndPoint = process.env.NEXT_PUBLIC_URL;

export const getCart = async (callback) => {
  try {
    const response = await axios.get(`${authEndPoint}/carts`);
    callback(response.data);
  } catch (error) {
    callback(error);
  }
};
export const addCart = async (formData, callback) => {
  try {
    const response = await axios.post(`${authEndPoint}/carts`, formData);
    callback(response.data);
  } catch (error) {
    callback(error);
  }
};
