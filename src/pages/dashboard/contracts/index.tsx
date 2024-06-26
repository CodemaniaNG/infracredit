import { useAppSelector } from "@/redux/store";
import ContractsC from "@/components/user-report/Contracts";
import ContractsAdmin from "@/components/admin/Contracts";
import ContractsManager from "@/components/manager/Contracts";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import ContractSupervisor from "@/components/supervisor/Contracts";

export default function Contracts() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;
  const department = userInfo?.department?.name?.trim();

  return (
    <>
      <DashboardLayout>
        {role === "User" && department !== "Legal" && <ContractsC />}
        {role === "Admin" && <ContractsAdmin />}
        {role === "Manager" && <ContractsManager />}
        {role === "Supervisor" && <ContractSupervisor />}
      </DashboardLayout>
    </>
  );
}
