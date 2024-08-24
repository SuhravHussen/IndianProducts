export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`/api/admin/product`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    });
    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
      };
    }
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    return {
      success: false,
    };
  }
};
