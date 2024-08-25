import AddCategory from "@/components/Admin/AddCategory";
import AddProduct from "@/components/Admin/AddProduct";
import EditCategory from "@/components/Admin/EditCategory";
import EditProduct from "@/components/Admin/EditProduct";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// export default function page() {
//   return (
//     <section className="flex flex-col justify-center mx-auto p-8 max-w-[760px] gap-10">
//       <AddProduct />
//       <Separator />
//       <AddCategory />
//       <Separator />
//       <EditProduct />
//       <Separator />
//       <EditCategory />
//     </section>
//   );
// }

const AdminPage = withPageAuthRequired(
  async () => {
    return (
      <section className="flex flex-col justify-center mx-auto p-8 max-w-[760px] gap-10">
        <AddProduct />
        <Separator />
        <AddCategory />
        <Separator />
        <EditProduct />
        <Separator />
        <EditCategory />
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
