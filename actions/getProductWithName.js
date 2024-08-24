export const getProductWithName = async (name) => {
  try {
    const product = await fetch(`/api/admin/product/search-name?query=${name}`);
    const data = await product.json();
    if (data.success) {
      return data.data;
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
};
