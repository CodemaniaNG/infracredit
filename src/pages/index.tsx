import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import DashboardReports from "@/components/user-report/Dashboard";
import DashboardContracts from "@/components/user-contract/Dashboard";
import DashboardManager from "@/components/manager/Dashboard";
import DashboardSupervisor from "@/components/supervisor/Dashboard";
import DashboardViewer from "@/components/viewer/Dashboard";
import DashboardAdmin from "@/components/admin/Dashboard";

export default function Home() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role;

  return (
    <>
      <Layout>
        {role === "user-reports" && <DashboardReports />}
        {role === "user-contracts" && <DashboardContracts />}
        {role === "manager" && <DashboardManager />}
        {role === "supervisor" && <DashboardSupervisor />}
        {role === "viewer" && <DashboardViewer />}
        {role === "admin" && <DashboardAdmin />}
      </Layout>
    </>
  );
}
