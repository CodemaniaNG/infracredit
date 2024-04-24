import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import DeletedReport from "@/components/user-report/Deleted";
import DeletedContract from "@/components/user-contract/Deleted";
import DeletedManager from "@/components/manager/Deleted";
import DeletedSupervisor from "@/components/supervisor/Deleted";
import DeletedAdmin from "@/components/admin/Deleted";

export default function Deleted() {
  // const { userInfo } = useAppSelector((state) => state.app.auth);
  // const role = userInfo?.role;

  const { userInfo, roles } = useAppSelector((state) => state.app.auth);
  const roleId = userInfo?.roleId;

  return (
    <>
      <Layout>
        {/* {role === "user-reports" && <DeletedReport />}
        {role === "user-contracts" && <DeletedContract />}
        {role === "manager" && <DeletedManager />}
        {role === "supervisor" && <DeletedSupervisor />}
        {role === "admin" && <DeletedAdmin />} */}

        {roles?.map((role: any) => {
          if (roleId === role.id) {
            switch (role?.value) {
              case "Admin":
                return <DeletedAdmin />;
              case "Manager":
                return <DeletedManager />;
              case "Supervisor":
                return <DeletedSupervisor />;
              case "User":
                return <DeletedReport />;
              default:
                return <DeletedReport />;
            }
          }
        })}
      </Layout>
    </>
  );
}
