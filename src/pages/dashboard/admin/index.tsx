import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import AdminDashboard from "@/components/admin/Admin";

export default function Admin() {


  return (
    <>
      <Layout>
        <AdminDashboard />
      </Layout>
    </>
  );
}
