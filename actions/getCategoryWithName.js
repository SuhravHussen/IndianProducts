export const getCategoryWithName = async (name) => {
  try {
    const category = await fetch(
      `/api/admin/category/search-name?query=${name}`
    );
    const data = await category.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
