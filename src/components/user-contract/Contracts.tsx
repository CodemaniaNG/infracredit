import {
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ContractCardTemplate from "@/components/contracts/ContractCardTemplate";
import ContractCard from "@/components/contracts/ContractCard";
import DashboardHeader from "../dashboard/DashboardHeader";
import { useAppSelector } from "@/redux/store";
import { useGetContractsQuery } from "@/redux/services/contract.service";
import Loader from "../ui/Loader";
import Empty2 from "../admin/Empty2";
import { useGetTemplatesQuery } from "@/redux/services/templates.service";

const Contracts = () => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data, isLoading } = useGetContractsQuery(token);
  const contracts = data?.data;

  const { data: templatesData, isLoading: loadingTemplates } =
    useGetTemplatesQuery(token);
  const templates = templatesData?.data;
  const filteredTemplates = templates?.filter(
    (template: any) => template.type >= 7,
  );

  const tabs = [
    {
      title: "Templates",
    },
    {
      title: "Ongoing",
    },
  ];

  return (
    <>
      {isLoading || loadingTemplates ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader title="Contracts" />

          <>
            <Tabs>
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
                  <Grid
                    templateColumns={{
                      sm: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(4, 1fr)",
                    }}
                    gap={2}
                    mb={5}
                  >
                    {filteredTemplates?.map((template: any, index: any) => (
                      <GridItem colSpan={1} key={index}>
                        <ContractCardTemplate
                          title={template.title}
                          body={template.body}
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
                          desc={task.desc}
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
        </>
      )}
    </>
  );
};

export default Contracts;
