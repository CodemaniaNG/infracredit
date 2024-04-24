import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import TasksReports from "@/components/user-report/Tasks";
import TasksManager from "@/components/manager/Tasks";
import TasksSupervisor from "@/components/supervisor/Tasks";
import TasksAdmin from "@/components/admin/Tasks";

export default function Tasks() {
  // const { userInfo } = useAppSelector((state) => state.app.auth);
  // const role = userInfo?.role;

  const { userInfo, roles } = useAppSelector((state) => state.app.auth);
  const roleId = userInfo?.roleId;

  return (
    <>
      <Layout>
        {/* {role === "user-reports" && <TasksReports />}
        {role === "manager" && <TasksManager />}
        {role === "supervisor" && <TasksSupervisor />}
        {role === "admin" && <TasksAdmin />} */}

        {roles?.map((role: any) => {
          if (roleId === role.id) {
            switch (role?.value) {
              case "Admin":
                return <TasksAdmin />;
              case "Manager":
                return <TasksManager />;
              case "Supervisor":
                return <TasksSupervisor />;
              case "User":
                return <TasksReports />;
              default:
                return <TasksReports />;
            }
          }
        })}
      </Layout>
    </>
  );
}
