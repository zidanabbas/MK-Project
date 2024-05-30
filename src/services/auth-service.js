import axios from "axios";
import { jwtDecode } from "jwt-decode";

const authEndPoint = process.env.NEXT_PUBLIC_URL;

export const login = (formData, callback) => {
  axios
    .post(`${authEndPoint}/login`, formData)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const register = (data, callback) => {
  axios
    .post(`${authEndPoint}/register`, data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  console.log(decoded);
};
