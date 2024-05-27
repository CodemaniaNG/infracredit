import Layout from "@/components/dashboard/Layout";
import AdminDashboard from "@/components/admin/Admin";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

export default function Admin() {
  return (
    <>
      <DashboardLayout>
        <AdminDashboard />
      </DashboardLayout>
    </>
  );
}
