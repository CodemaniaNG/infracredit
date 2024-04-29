import {
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import TaskCard from "@/components/dashboard/TaskCard";
import TaskStack from "@/components/task/TaskStack";
import DepartmentCard from "./DepartmentCard";
import TemplateCard from "./TemplateCard";
import Button from "@/components/ui/Button";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import AddDepartment from "../modals/AddDepartment";
import { useAppSelector } from "@/redux/store";
import { useGetDepartmentsQuery } from "@/redux/services/department.service";
import { useGetTemplatesQuery } from "@/redux/services/templates.service";
import { useRouter } from "next/router";
import Loader from "../ui/Loader";
import { useGetReportsQuery } from "@/redux/services/reports.service";

const tabs = [
  {
    title: "Departments",
  },
  {
    title: "Reports",
  },
  {
    title: "Templates",
  },
];

const Tasks = () => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.app.auth);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { data: departmentsData, isLoading: departmentsLoading } =
    useGetDepartmentsQuery(token);
  const departments = departmentsData?.data;

  const { data: templatesData, isLoading: templatesLoading } =
    useGetTemplatesQuery(token);
  const templates = templatesData?.data;

  const { data: reportsData, isLoading: reportsLoading } =
    useGetReportsQuery(token);
  const reports = reportsData?.data;

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    router.push(`/dashboard/tasks?tab=${index}`);
  };

  useEffect(() => {
    const query = router.query;
    if (query?.tab) {
      setActiveIndex(Number(query.tab));
    }
  }, [router.query]);

  const EmptyState = ({ title, desc, buttonTitle, onClick }: any) => (
    <Stack dir="column" align="center" justify="center">
      <Image src="/images/empty.svg" alt="empty" />
      <Stack dir="column" spacing={0}>
        <Text
          color="maintText.400"
          fontSize={{ base: "24px", sm: "28px" }}
          fontWeight={600}
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          color="subText.400"
          fontSize={{ base: "16px", sm: "16px" }}
          lineHeight="24px"
          textAlign="center"
        >
          {desc}
        </Text>
      </Stack>
      {buttonTitle && (
        <Stack>
          <Button
            text={buttonTitle}
            icon="/images/add3.svg"
            iconPosition="left"
            onClick={onClick}
          />
        </Stack>
      )}
    </Stack>
  );

  return (
    <>
      {departmentsLoading || templatesLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader title="My Tasks">
            {activeIndex === 0 && (
              <Button
                text="Add New Department"
                bg="#F0FFFF"
                border="red.500"
                color="greens.100"
                icon="/images/add.svg"
                iconPosition="left"
                onClick={handleModal}
              />
            )}
          </DashboardHeader>

          <>
            <>
              <Tabs
                onChange={(index) => handleTabChange(index)}
                defaultIndex={activeIndex}
                isLazy
              >
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
                      w="140px"
                    >
                      {tab.title}
                    </Tab>
                  ))}
                </TabList>

                <TabPanels px={0}>
                  <TabPanel px={0}>
                    {departments?.length > 0 ? (
                      <Grid
                        templateColumns={{
                          sm: "repeat(1, 1fr)",
                          md: "repeat(2, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                        gap={2}
                        mb={5}
                      >
                        {departments.map((dept: any, index: any) => (
                          <GridItem colSpan={1} key={index}>
                            <DepartmentCard
                              title={dept?.name}
                              desc={dept?.desc}
                              id={dept?.id}
                            />
                          </GridItem>
                        ))}
                      </Grid>
                    ) : (
                      <EmptyState
                        title="No department added yet"
                        desc="You can create a new department to this section here."
                        buttonTitle="Add New Department"
                        onClick={handleModal}
                      />
                    )}
                  </TabPanel>

                  <TabPanel px={0}>
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
                          <TaskStack
                            title="To Do"
                            count={5}
                            borderColor="#FF3B30"
                          >
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
                          <TaskStack
                            title="Completed"
                            count={5}
                            borderColor="#34C759"
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
                      </Grid>
                    ) : (
                      <EmptyState
                        title="No report added yet"
                        desc="Your reports will be displayed here."
                      />
                    )}
                  </TabPanel>

                  <TabPanel px={0}>
                    {templates?.length > 0 ? (
                      <Grid
                        templateColumns={{
                          sm: "repeat(1, 1fr)",
                          md: "repeat(2, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                        gap={2}
                        mb={5}
                      >
                        {templates?.map((template: any, index: any) => (
                          <GridItem colSpan={1} key={index}>
                            <TemplateCard item={template} />
                          </GridItem>
                        ))}
                      </Grid>
                    ) : (
                      <EmptyState
                        title="No template added yet"
                        desc="Your templates will be displayed here."
                      />
                    )}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          </>

          <Modal
            isOpen={isOpen}
            onClose={handleModal}
            body={<AddDepartment setIsOpen={setIsOpen} />}
          />
        </>
      )}
    </>
  );
};

export default Tasks;
