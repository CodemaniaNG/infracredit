import { useAppSelector } from "@/redux/store";
import Layout from "@/components/dashboard/Layout";
import ContractsC from "@/components/user-contract/Contracts";
import ContractsAdmin from "@/components/admin/Contracts";
import ContractsManager from "@/components/manager/Contracts";

export default function Contracts() {
  // const { userInfo } = useAppSelector((state) => state.app.auth);
  // const role = userInfo?.role;

  const { userInfo, roles } = useAppSelector((state) => state.app.auth);
  const roleId = userInfo?.roleId;

  return (
    <>
      <Layout>
        {/* {role === "user-contracts" && <ContractsC />}
        {role === "admin" && <ContractsAdmin />}
        {role === "manager" && <ContractsManager />} */}

        {roles?.map((role: any) => {
          if (roleId === role.id) {
            switch (role?.value) {
              case "Admin":
                return <ContractsAdmin />;
              case "Manager":
                return <ContractsManager />;
              case "User":
                return <ContractsC />;
              default:
                return <ContractsC />;
            }
          }
        })}
      </Layout>
    </>
  );
}
