export const updateCategory = async (updateData) => {
  try {
    const response = await fetch(`/api/admin/category/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    const updatedCategory = await response.json();
    if (!updatedCategory.success) {
      return { success: false };
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating category:", error);
    return { success: false };
  }
};
