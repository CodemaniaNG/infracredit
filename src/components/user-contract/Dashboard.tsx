import {
  Text,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import ContractCard from "@/components/contracts/ContractCard";
import DashboardHeader from "../dashboard/DashboardHeader";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import CreateContractLegal from "../modals/CreateContractLegal";
import { useAppSelector } from "@/redux/store";
import { useGetContractsQuery } from "@/redux/services/contract.service";
import Loader from "../ui/Loader";
import Empty2 from "../admin/Empty2";

const Dashboard = () => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data, isLoading } = useGetContractsQuery(token);
  const contracts = data?.data;

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const tabs = [
    {
      title: "All Contracts",
    },
    {
      title: "My Contracts",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader title="Contract System">
            <Button
              text="Create New Contract"
              bg="#F0FFFF"
              border="#8CDBB4"
              color="greens.100"
              icon="/images/export.svg"
              iconPosition="left"
              onClick={handleModal}
            />
          </DashboardHeader>
          <>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={2}
              mb={5}
            >
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Contracts Created"}
                  value={0}
                  isPrefix={false}
                  image="/images/reports.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Contracts Drafted"}
                  value={0}
                  isPrefix={false}
                  image="/images/drafted.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Contracts Deleted"}
                  value={0}
                  isPrefix={false}
                  image="/images/deleted2.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Collaborators"}
                  value={0}
                  isPrefix={false}
                  image="/images/collaborators.svg"
                />
              </GridItem>
            </Grid>

            <>
              <Tabs mb={5}>
                <TabList>
                  {tabs.map((tab, index) => (
                    <Tab
                      key={index}
                      _selected={{
                        color: "greens.100",
                        bg: "white",
                        fontWeight: "700",
                        fontSize: "16px",
                        borderBottom: "2px solid #287750",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        borderBottomEndRadius: "0px",
                        borderBottomStartRadius: "0px",
                      }}
                      px={4}
                      py={2}
                      color="subText.400"
                      fontFamily={"body"}
                      fontWeight="500"
                      fontSize={"16px"}
                      mr={3}
                      w={"150px"}
                    >
                      {tab.title}
                    </Tab>
                  ))}
                </TabList>

                <TabPanels px={0}>
                  <TabPanel px={0}>
                    {contracts?.length === 0 && (
                      <Empty2
                        title="No Contracts"
                        desc="Create a new contract to get started"
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
                      {contracts?.map((task: any, index: any) => (
                        <GridItem colSpan={1} key={index}>
                          <ContractCard
                            title={task.title}
                            desc={task.description}
                            id={task.id}
                            serialNo={task.serialNo}
                          />
                        </GridItem>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel px={0}>
                    {contracts?.length === 0 && (
                      <Empty2
                        title="No Contracts"
                        desc="Create a new contract to get started"
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
                      {contracts?.map((task: any, index: any) => (
                        <GridItem colSpan={1} key={index}>
                          <ContractCard
                            title={task.title}
                            desc={task.description}
                            id={task.id}
                            serialNo={task.serialNo}
                          />
                        </GridItem>
                      ))}
                    </Grid>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>

            <>
              <Text
                fontSize={{
                  base: "16px",
                  md: "18px",
                  lg: "20px",
                }}
                fontWeight="600"
                color="subText.400"
                fontFamily={"body"}
                mb={3}
              >
                Closed Out Contracts
              </Text>
              {contracts?.length === 0 && (
                <Empty2
                  title="No Closed Out Contracts"
                  desc="Create a new contract to get started"
                />
              )}
              <Grid
                templateColumns={{
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={2}
              >
                {contracts?.map((task: any, index: any) => (
                  <GridItem colSpan={1} key={index}>
                    <ContractCard
                      title={task.title}
                      desc={task.description}
                      id={task.id}
                      serialNo={task.serialNo}
                    />
                  </GridItem>
                ))}
              </Grid>
            </>
          </>
        </>
      )}

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<CreateContractLegal setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default Dashboard;
