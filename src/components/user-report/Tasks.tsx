import { Text, Grid, GridItem, Stack, Image } from "@chakra-ui/react";
import TaskCard from "@/components/dashboard/TaskCard";
import TaskStack from "@/components/task/TaskStack";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import CreateReport from "../modals/CreateReport";
import { useAppSelector } from "@/redux/store";
import { useGetReportsQuery } from "@/redux/services/reports.service";
import Loader from "../ui/Loader";
import DashboardHeader from "../dashboard/DashboardHeader";
import Empty from "../admin/Empty";

const Tasks = () => {
  const { token } = useAppSelector((state) => state.app.auth);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const { data: reportsData, isLoading: reportsLoading } =
    useGetReportsQuery(token);
  const reports = reportsData?.data;

  return (
    <>
      {reportsLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader title="My Tasks">
            <Button
              text="Create New Report"
              bg="#F0FFFF"
              border="#8CDBB4"
              color="greens.100"
              icon="/images/export.svg"
              iconPosition="left"
              onClick={handleModal}
            />
          </DashboardHeader>

          <>
            {reports?.length > 0 ? (
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
                  <TaskStack title="To Do" count={5} borderColor="#FF3B30">
                    {reports?.map((report: any) => (
                      <TaskCard
                        title={report?.title}
                        desc={report?.description}
                        key={report?.id}
                        isStack={true}
                        status={report?.status}
                        id={report?.id}
                      />
                    ))}
                  </TaskStack>
                </GridItem>

                <GridItem colSpan={1}>
                  <TaskStack
                    title="In Progress"
                    count={5}
                    borderColor="#3C76F1"
                  >
                    {reports?.map((report: any) => (
                      <TaskCard
                        title={report?.title}
                        desc={report?.description}
                        key={report?.id}
                        isStack={true}
                        status={report?.status}
                      />
                    ))}
                  </TaskStack>
                </GridItem>

                <GridItem colSpan={1}>
                  <TaskStack
                    title="Under Review"
                    count={5}
                    borderColor="#FF8F00"
                  >
                    {reports?.map((report: any) => (
                      <TaskCard
                        title={report?.title}
                        desc={report?.description}
                        key={report?.id}
                        isStack={true}
                        status={report?.status}
                      />
                    ))}
                  </TaskStack>
                </GridItem>

                <GridItem colSpan={1}>
                  <TaskStack title="Completed" count={5} borderColor="#34C759">
                    {reports?.map((report: any) => (
                      <TaskCard
                        title={report?.title}
                        desc={report?.description}
                        key={report?.id}
                        isStack={true}
                        status={report?.status}
                      />
                    ))}
                  </TaskStack>
                </GridItem>
              </Grid>
            ) : (
              <Empty
                title="No report added yet"
                desc="Your reports will be displayed here."
              />
            )}
          </>
        </>
      )}

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<CreateReport setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default Tasks;
