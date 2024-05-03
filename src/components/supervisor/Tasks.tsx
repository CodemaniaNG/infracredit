import { Grid, GridItem } from "@chakra-ui/react";
import TaskCard from "@/components/dashboard/TaskCard";
import TaskStack from "@/components/task/TaskStack";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useGetReportsQuery } from "@/redux/services/reports.service";
import Loader from "../ui/Loader";
import DashboardHeader from "../dashboard/DashboardHeader";
import Empty from "../admin/Empty";
import AssignReport from "../modals/AssignReport";

const Tasks = () => {
  const { token } = useAppSelector((state) => state.app.auth);
  const [isOpen, setIsOpen] = useState(false);

  const { data: reportsData, isLoading: reportsLoading } =
    useGetReportsQuery(token);
  const reports = reportsData?.data;

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
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
      {reportsLoading ? (
        <Loader />
      ) : (
        <>
          {reports?.length > 0 ? (
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={2}
              mb={5}
            >
              <GridItem colSpan={1}>
                <TaskStack
                  title="To Do"
                  count={
                    reports?.filter((report: any) => report?.status === 0)
                      .length
                  }
                  borderColor="#FF3B30"
                >
                  {reports?.map((report: any) => (
                    <>
                      {report?.status === 0 && (
                        <TaskCard
                          title={report?.title}
                          desc={report?.description}
                          key={report?.id}
                          isStack={true}
                          status={report?.status}
                          id={report?.id}
                          commentCount={report?.commentCount}
                        />
                      )}
                    </>
                  ))}
                </TaskStack>
              </GridItem>

              <GridItem colSpan={1}>
                <TaskStack
                  title="In Progress"
                  count={
                    reports?.filter((report: any) => report?.status === 1)
                      .length
                  }
                  borderColor="#3C76F1"
                >
                  {reports?.map((report: any) => (
                    <>
                      {report?.status === 1 && (
                        <TaskCard
                          title={report?.title}
                          desc={report?.description}
                          key={report?.id}
                          isStack={true}
                          status={report?.status}
                          id={report?.id}
                          commentCount={report?.commentCount}
                        />
                      )}
                    </>
                  ))}
                </TaskStack>
              </GridItem>

              <GridItem colSpan={1}>
                <TaskStack
                  title="Under Review"
                  count={
                    reports?.filter((report: any) => report?.status === 2)
                      .length
                  }
                  borderColor="#FF8F00"
                >
                  {reports?.map((report: any) => (
                    <>
                      {report?.status === 2 && (
                        <TaskCard
                          title={report?.title}
                          desc={report?.description}
                          key={report?.id}
                          isStack={true}
                          status={report?.status}
                          id={report?.id}
                          commentCount={report?.commentCount}
                        />
                      )}
                    </>
                  ))}
                </TaskStack>
              </GridItem>

              <GridItem colSpan={1}>
                <TaskStack
                  title="Awaiting Approval"
                  count={
                    reports?.filter((report: any) => report?.status === 3)
                      .length
                  }
                  borderColor="#FF9500"
                >
                  {reports?.map((report: any) => (
                    <>
                      {report?.status === 3 && (
                        <TaskCard
                          title={report?.title}
                          desc={report?.description}
                          key={report?.id}
                          isStack={true}
                          status={report?.status}
                          id={report?.id}
                          commentCount={report?.commentCount}
                        />
                      )}
                    </>
                  ))}
                </TaskStack>
              </GridItem>

              <GridItem colSpan={1}>
                <TaskStack
                  title="Completed"
                  count={
                    reports?.filter((report: any) => report?.status === 4)
                      .length
                  }
                  borderColor="#34C759"
                >
                  {reports?.map((report: any) => (
                    <>
                      {report?.status === 4 && (
                        <TaskCard
                          title={report?.title}
                          desc={report?.description}
                          key={report?.id}
                          isStack={true}
                          status={report?.status}
                          id={report?.id}
                          commentCount={report?.commentCount}
                        />
                      )}
                    </>
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
      )}

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<AssignReport setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default Tasks;
