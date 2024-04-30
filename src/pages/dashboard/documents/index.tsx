import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import DocumentsReport from "@/components/user-report/Documents";
import DocumentsContract from "@/components/user-contract/Documents";
import DocumentsManager from "@/components/manager/Documents";
import DocumentsSupervisor from "@/components/supervisor/Documents";
import DocumentsViewer from "@/components/viewer/Documents";
import DocumentsAdmin from "@/components/admin/Documents";

export default function Documents() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  return (
    <>
      <Layout>
        {role === "User" && <DocumentsReport />}
        {/* {role === "user-contracts" && <DocumentsContract />} */}
        {role === "Manager" && <DocumentsManager />}
        {role === "Supervisor" && <DocumentsSupervisor />}
        {role === "Viewer" && <DocumentsViewer />}
        {role === "Admin" && <DocumentsAdmin />}
      </Layout>
    </>
  );
}
