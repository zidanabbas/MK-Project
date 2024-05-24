import axios from "axios";

const productsEndPoint = process.env.NEXT_PUBLIC_PRODUCTS;

export const getProducts = async (callback) => {
  try {
    const response = await axios.get(productsEndPoint);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    callback(response.data);
  } catch (err) {
    console.error(err);
  }
};

export const getDetailProduct = async (id, callback) => {
  try {
    const response = await fetch(`${productsEndPoint}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    if (!responseData.data) {
      throw new Error("Product data not found");
    }
    callback(responseData.data);
  } catch (error) {
    console.error(error);
  }
};
