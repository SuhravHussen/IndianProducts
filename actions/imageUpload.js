const handleImageUpload = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "india_product");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/daamlrloa/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    return data.url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default handleImageUpload;
