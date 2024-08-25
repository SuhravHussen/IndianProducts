import handleImageUpload from "./imageUpload";

const addProduct = async (name, image, keywords, category, toast) => {
  if (!name || !image.name || keywords.length === 0 || !category) {
    toast({
      variant: "destructive",
      title: "Uh oh!",
      description: "Please fill all the fields. ",
    });
    return;
  }
  try {
    const imageUrl = await handleImageUpload(image);

    if (!imageUrl) {
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Something went wrong with image uploading. ",
      });
      return;
    }

    const productRes = await fetch("/api/admin/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image: imageUrl,
        keywords,
        category,
      }),
    });

    const productData = await productRes.json();

    if (!productData.success) {
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Something went wrong with product adding. ",
      });

      return;
    }

    toast({
      variant: "default",
      title: "Product Added",
      description: "Product added successfully. ",
    });

    return productData;
  } catch (error) {
    console.log(error);
    toast({
      variant: "destructive",
      title: "Uh oh!",
      description: "Something went wrong at the server. ",
    });
  }
};

export default addProduct;
