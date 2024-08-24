const handleAddCategory = async (name, alternatives, toast) => {
  try {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Please fill the name field. ",
      });
      return;
    }

    const categoryRes = await fetch("/api/admin/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        alternatives: alternatives,
      }),
    });

    const data = await categoryRes.json();

    if (!data.success) {
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Something went wrong with category adding. ",
      });

      return;
    }

    toast({
      variant: "default",
      title: "Category Added",
      description: "Category added successfully. ",
    });

    return data;
  } catch (error) {
    console.log(error);
    toast({
      variant: "destructive",
      title: "Uh oh!",
      description: "Something went wrong at the server. ",
    });
  }
};

export default handleAddCategory;
