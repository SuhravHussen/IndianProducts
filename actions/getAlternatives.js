const getAlternatives = async (name) => {
  try {
    const alternatives = await fetch(
      `/api/public/category/search?query=${name}`
    );
    const data = await alternatives.json();
    if (data.success) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getAlternatives;
