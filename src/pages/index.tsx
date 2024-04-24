import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import DashboardReports from "@/components/user-report/Dashboard";
import DashboardContracts from "@/components/user-contract/Dashboard";
import DashboardManager from "@/components/manager/Dashboard";
import DashboardSupervisor from "@/components/supervisor/Dashboard";
import DashboardViewer from "@/components/viewer/Dashboard";
import DashboardAdmin from "@/components/admin/Dashboard";

export default function Home() {
  const { userInfo, roles } = useAppSelector((state) => state.app.auth);
  const roleId = userInfo?.roleId;

  return (
    <>
      <Layout>
        {/* {roleId === "user-reports" && <DashboardReports />}
        {roleId === "user-contracts" && <DashboardContracts />}
        {roleId === "manager" && <DashboardManager />}
        {roleId === "supervisor" && <DashboardSupervisor />}
        {roleId === "viewer" && <DashboardViewer />}
        {roleId === "538d1ca3-0148-443c-b663-9c555e0d48f5" && (
          <DashboardAdmin />
        )} */}
        {roles?.map((role: any) => {
          if (roleId === role.id) {
            switch (role?.value) {
              case "Admin":
                return <DashboardAdmin />;
              case "Manager":
                return <DashboardManager />;
              case "Supervisor":
                return <DashboardSupervisor />;
              case "User":
                return <DashboardReports />;
              case "Viewer":
                return <DashboardViewer />;
              default:
                return <DashboardReports />;
            }
          }
        })}
      </Layout>
    </>
  );
}
