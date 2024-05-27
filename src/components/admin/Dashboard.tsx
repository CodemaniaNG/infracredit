import { useAppSelector } from "@/redux/store";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import DocumentCard from "@/components/documents/DocumentCard";
import Loader from "../ui/Loader";
import { useGetTemplatesQuery } from "@/redux/services/templates.service";
import { useGetLogsQuery } from "@/redux/services/logs.service";
import Welcome from "../dashboard/Welcome";
import TemplateCard from "./TemplateCard";

const Dashboard = () => {
  const { token } = useAppSelector((state) => state.app.auth);
  const { data: templatesData, isLoading: templatesLoading } =
    useGetTemplatesQuery(token);
  const templates = templatesData?.data;

  const { data: logsData, isLoading: logsLoading } = useGetLogsQuery(token);
  const logs = logsData?.data;

  return (
    <>
      {templatesLoading || logsLoading ? (
        <Loader />
      ) : (
        <>
          <Welcome />
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
                  label={"Total Teams"}
                  value={0}
                  isPrefix={false}
                  image="/images/reports.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Pending Teams"}
                  value={0}
                  isPrefix={false}
                  image="/images/drafted.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Closed Out"}
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
                Report Templates
              </Text>
              <Grid
                templateColumns={{
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={2}
                mb={5}
              >
                {templates?.slice(0, 4)?.map((template: any, index: any) => (
                  <GridItem colSpan={1} key={index}>
                    <TemplateCard item={template} />
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
                color="subText.400"
                fontFamily={"body"}
                mb={3}
              >
                Activity Log
              </Text>

              <DashboardTable data={logs} />
            </>
          </>
        </>
      )}
    </>
  );
};

export default Dashboard;
