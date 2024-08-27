"use client";

import AddCategory from "@/components/Admin/AddCategory";
import AddProduct from "@/components/Admin/AddProduct";
import EditCategory from "@/components/Admin/EditCategory";
import EditProduct from "@/components/Admin/EditProduct";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

// export default function Page() {
//   const [categoryList, setCategoryList] = useState([]);

//   const getCategoryList = async () => {
//     try {
//       const res = await fetch("/api/admin/category");
//       const data = await res.json();

//       setCategoryList(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // get category list
//   useEffect(() => {
//     getCategoryList();
//   }, []);

//   return (
//     <section className="flex flex-col justify-center mx-auto p-8 max-w-[760px] gap-10">
//       <AddProduct categoryList={categoryList} />
//       <Separator />
//       <AddCategory refreshCategoryList={getCategoryList} />
//       <Separator />
//       <EditProduct />
//       <Separator />
//       <EditCategory refreshCategoryList={getCategoryList} />
//     </section>
//   );
// }

const AdminPage = withPageAuthRequired(
  async () => {
    const [categoryList, setCategoryList] = useState([]);

    const getCategoryList = async () => {
      try {
        const res = await fetch("/api/admin/category");
        const data = await res.json();

        setCategoryList(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    // get category list
    useEffect(() => {
      getCategoryList();
    }, []);
    return (
      <section className="flex flex-col justify-center mx-auto p-8 max-w-[760px] gap-10">
        <AddProduct categoryList={categoryList} />
        <Separator />
        <AddCategory refreshCategoryList={getCategoryList} />
        <Separator />
        <EditProduct />
        <Separator />
        <EditCategory refreshCategoryList={getCategoryList} />
        <Button className="w-full">
          <a href="/api/auth/logout">Logout</a>
        </Button>
      </section>
    );
  },
  {
    returnTo: "/admin",
  }
);

export default AdminPage;
