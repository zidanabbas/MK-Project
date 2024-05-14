export const getProducts = async (callback) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_PRODUCTS, {
      cache: "no-store",
    });
    const { data } = await response.json();
    callback(data);
  } catch (error) {
    console.error(error);
  }
};

export const getDetailProduct = async (id, callback) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_PRODUCTS + id);
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
