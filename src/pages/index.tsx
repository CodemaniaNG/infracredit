import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import DashboardReports from "@/components/user-report/Dashboard";
import DashboardContracts from "@/components/user-contract/Dashboard";
import DashboardManager from "@/components/manager/Dashboard";
import DashboardSupervisor from "@/components/supervisor/Dashboard";
import DashboardViewer from "@/components/viewer/Dashboard";
import DashboardAdmin from "@/components/admin/Dashboard";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

export default function Home() {
  const { userInfo, token } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  return (
    <>
      <DashboardLayout>
        {role === "User" && <DashboardReports />}
        {/* {role === "user-contracts" && <DashboardContracts />} */}
        {role === "Manager" && <DashboardManager />}
        {role === "Supervisor" && <DashboardSupervisor />}
        {role === "Viewer" && <DashboardViewer />}
        {role === "Admin" && <DashboardAdmin />}
      </DashboardLayout>
    </>
  );
}
