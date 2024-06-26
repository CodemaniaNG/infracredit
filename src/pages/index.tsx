import { useAppSelector } from "@/redux/store";
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
  const department = userInfo?.department?.name?.trim();

  return (
    <>
      <DashboardLayout>
        {role === "User" && department !== "Legal" && department !== "ESG" && (
          <DashboardReports />
        )}
        {role === "User" && department === "Legal" && <DashboardContracts />}
        {role === "Manager" && <DashboardManager />}
        {role === "Supervisor" && <DashboardSupervisor />}
        {role === "User" && department === "ESG" && <DashboardViewer />}
        {role === "Admin" && <DashboardAdmin />}
      </DashboardLayout>
    </>
  );
}
