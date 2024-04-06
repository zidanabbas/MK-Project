const getProducts = async (callback) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_PRODUCTS);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
