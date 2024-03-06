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
  const role = userInfo?.role;

  return (
    <>
      <Layout>
        {role === "user-reports" && <DocumentsReport />}
        {role === "user-contracts" && <DocumentsContract />}
        {role === "manager" && <DocumentsManager />}
        {role === "supervisor" && <DocumentsSupervisor />}
        {role === "viewer" && <DocumentsViewer />}
        {role === "admin" && <DocumentsAdmin />}
      </Layout>
    </>
  );
}
