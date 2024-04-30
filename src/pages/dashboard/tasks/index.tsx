import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import TasksReports from "@/components/user-report/Tasks";
import TasksManager from "@/components/manager/Tasks";
import TasksSupervisor from "@/components/supervisor/Tasks";
import TasksAdmin from "@/components/admin/Tasks";

export default function Tasks() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  return (
    <>
      <Layout>
        {role === "User" && <TasksReports />}
        {role === "Manager" && <TasksManager />}
        {role === "Supervisor" && <TasksSupervisor />}
        {role === "Admin" && <TasksAdmin />}
      </Layout>
    </>
  );
}
