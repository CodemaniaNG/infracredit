import { Text, Grid, GridItem } from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import TaskCard from "@/components/dashboard/TaskCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import Loader from "../ui/Loader";
import { useGetLogsQuery } from "@/redux/services/logs.service";
import { useGetReportsQuery } from "@/redux/services/reports.service";
import { useAppSelector } from "@/redux/store";
import Empty from "../admin/Empty2";
import DashboardHeader from "../dashboard/DashboardHeader";

const Dashboard = () => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data: logsData, isLoading: logsLoading } = useGetLogsQuery(token);
  const logs = logsData?.data;

  const { data: reportsData, isLoading: reportsLoading } =
    useGetReportsQuery(token);
  const reports = reportsData?.data;

  return (
    <>
      <DashboardHeader title="Reports" />
      {logsLoading || reportsLoading ? (
        <Loader />
      ) : (
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
                label={"Reports Created"}
                value={0}
                isPrefix={false}
                image="/images/reports.svg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <DashboardCard
                label={"Reports Drafted"}
                value={0}
                isPrefix={false}
                image="/images/drafted.svg"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <DashboardCard
                label={"Reports Deleted"}
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
              Current Tasks
            </Text>
            {reports?.length === 0 ||
              (!reports && (
                <Empty
                  title="No reports found"
                  desc="All ongoing reports will be displayed here."
                />
              ))}
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={2}
              mb={5}
            >
              {reports?.slice(0, 4)?.map((report: any) => (
                <GridItem colSpan={1} key={report?.id}>
                  <TaskCard
                    title={report?.title}
                    desc={report?.description}
                    key={report?.id}
                    status={report?.status}
                    id={report?.id}
                    commentCount={report?.commentCount}
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
              color="subText.400"
              fontFamily={"body"}
              mb={3}
            >
              History
            </Text>

            <DashboardTable data={logs} />
          </>
        </>
      )}
    </>
  );
};

export default Dashboard;
