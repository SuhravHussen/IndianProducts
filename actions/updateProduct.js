export const updatedProduct = async (updateData) => {
  try {
    const response = await fetch(`/api/admin/product/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    const updatedProduct = await response.json();
    if (!updatedProduct.success) {
      return { success: false };
    }

    return updatedProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false };
  }
};
