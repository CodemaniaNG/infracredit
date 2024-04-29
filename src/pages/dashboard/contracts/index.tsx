import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import ContractsC from "@/components/user-contract/Contracts";
import ContractsAdmin from "@/components/admin/Contracts";
import ContractsManager from "@/components/manager/Contracts";

export default function Contracts() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  return (
    <>
      <Layout>
        {role === "User" && <ContractsC />}
        {role === "Admin" && <ContractsAdmin />}
        {role === "Manager" && <ContractsManager />}
      </Layout>
    </>
  );
}
