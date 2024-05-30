import axios from "axios";

const authEndPoint = process.env.NEXT_PUBLIC_URL;

export const getProducts = async (callback) => {
  try {
    const response = await axios.get(`${authEndPoint}/products`);
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
    const response = await fetch(`${authEndPoint}/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const productData = await response.json();
    if (!productData.data) {
      throw new Error("Product data not found");
    }
    callback(productData.data);
  } catch (error) {
    console.error(`Error fetching product with id ${id}: ${error.message}`);
  }
};
