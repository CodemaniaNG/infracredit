import { Text, Grid, GridItem, HStack } from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import TaskCard from "@/components/dashboard/TaskCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import Loader from "../ui/Loader";
import { useGetLogsQuery } from "@/redux/services/logs.service";
import { useGetReportsQuery } from "@/redux/services/reports.service";
import { useAppSelector } from "@/redux/store";
import Welcome from "../dashboard/Welcome";
import AssignReport2 from "../modals/AssignReport2";

const Dashboard = () => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data: logsData, isLoading: logsLoading } = useGetLogsQuery(token);
  const logs = logsData?.data;

  const { data: reportsData, isLoading: reportsLoading } =
    useGetReportsQuery(token);
  const reports = reportsData?.data;

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HStack justify="space-between" mb={"3"}>
        <Welcome />

        <HStack justify="flex-end">
          <Button
            text="Create New Report"
            bg="#F0FFFF"
            border="#8CDBB4"
            color="greens.100"
            icon="/images/export.svg"
            iconPosition="left"
            onClick={handleModal}
          />
        </HStack>
      </HStack>
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

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<AssignReport2 setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default Dashboard;
