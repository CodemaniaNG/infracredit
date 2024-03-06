import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import ContractsC from "@/components/user-contract/Contracts";
import ContractsAdmin from "@/components/admin/Contracts";

export default function Contracts() {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role;

  return (
    <>
      <Layout>
      {role === "user-contracts" && <ContractsC />}
      {role === "admin" && <ContractsAdmin />}
      </Layout>
    </>
  );
}
