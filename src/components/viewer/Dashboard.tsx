import { Text, Grid, GridItem } from "@chakra-ui/react";
import ContractCard from "@/components/contracts/ContractCard";
import DashboardHeader from "../dashboard/DashboardHeader";
import { useAppSelector } from "@/redux/store";
import { useGetContractsQuery } from "@/redux/services/contract.service";
import Loader from "../ui/Loader";
import Empty2 from "../admin/Empty2";
import Welcome from "../dashboard/Welcome";

const Dashboard = () => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data, isLoading } = useGetContractsQuery(token);
  const contracts = data?.data;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <DashboardHeader title="Contracts" /> */}
          <Welcome />

          <>
            <Text
              fontSize={{
                base: "16px",
                md: "18px",
                lg: "20px",
              }}
              fontWeight="600"
              color="maintText.200"
              fontFamily={"body"}
              mb={3}
            >
              Ongoing Contracts
            </Text>
            {contracts?.length === 0 && (
              <Empty2
                title="No Contracts"
                desc="All your contracts will appear here"
              />
            )}
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={2}
              mb={5}
            >
              {contracts?.map((contract: any, index: any) => (
                <GridItem colSpan={1} key={index}>
                  <ContractCard
                    title={contract.title}
                    desc={contract.description}
                    id={contract.id}
                    serialNo={contract.serialNo}
                  />
                </GridItem>
              ))}
            </Grid>
          </>

          <>
            <Text
              fontSize={{
                base: "16px",
                md: "18px",
                lg: "20px",
              }}
              fontWeight="600"
              color="maintText.200"
              fontFamily={"body"}
              mb={3}
            >
              Closed Out Contracts
            </Text>
            {contracts?.length === 0 && (
              <Empty2
                title="No Contracts"
                desc="All your contracts will appear here"
              />
            )}
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={2}
              mb={5}
            >
              {contracts?.map((contract: any, index: any) => (
                <GridItem colSpan={1} key={index}>
                  <ContractCard
                    title={contract.title}
                    desc={contract.description}
                    id={contract.id}
                    serialNo={contract.serialNo}
                  />
                </GridItem>
              ))}
            </Grid>
          </>
        </>
      )}
    </>
  );
};

export default Dashboard;
