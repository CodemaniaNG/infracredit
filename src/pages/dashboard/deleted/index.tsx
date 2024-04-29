import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import DeletedReport from "@/components/user-report/Deleted";
import DeletedContract from "@/components/user-contract/Deleted";
import DeletedManager from "@/components/manager/Deleted";
import DeletedSupervisor from "@/components/supervisor/Deleted";
import DeletedAdmin from "@/components/admin/Deleted";

export default function Deleted() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  return (
    <>
      <Layout>
        {role === "User" && <DeletedReport />}
        {/* {role === "user-contracts" && <DeletedContract />} */}
        {role === "Manager" && <DeletedManager />}
        {role === "Supervisor" && <DeletedSupervisor />}
        {role === "Admin" && <DeletedAdmin />}
      </Layout>
    </>
  );
}
