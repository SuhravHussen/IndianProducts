export const deleteCategory = async (id) => {
  try {
    const response = await fetch(`/api/admin/category`, {
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
    console.error("Error deleting category:", error);
    return {
      success: false,
    };
  }
};
