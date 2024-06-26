import { useAppSelector } from "@/redux/store";
import DocumentsReport from "@/components/user-report/Documents";
import DocumentsContract from "@/components/user-contract/Documents";
import DocumentsManager from "@/components/manager/Documents";
import DocumentsSupervisor from "@/components/supervisor/Documents";
import DocumentsViewer from "@/components/viewer/Documents";
import DocumentsAdmin from "@/components/admin/Documents";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

export default function Documents() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;
  const department = userInfo?.department?.name?.trim();

  return (
    <>
      <DashboardLayout>
        {role === "User" && department !== "Legal" && <DocumentsReport />}
        {role === "User" && department === "Legal" && <DocumentsContract />}
        {role === "Manager" && <DocumentsManager />}
        {role === "Supervisor" && <DocumentsSupervisor />}
        {role === "Viewer" && <DocumentsViewer />}
        {role === "Admin" && <DocumentsAdmin />}
      </DashboardLayout>
    </>
  );
}
