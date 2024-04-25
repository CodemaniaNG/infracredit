import {
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
import { useRouter } from "next/router";
import Loader from "../ui/Loader";

const tasks = [
  {
    title: "Annual report",
    desc: "This is a commment, This is a commment, This is a commment",
  },
  {
    title: "Annual report",
    desc: "This is a commment, This is a commment, This is a commment",
  },
  {
    title: "Annual report",
    desc: "This is a commment, This is a commment, This is a commment",
  },
  {
    title: "Annual report",
    desc: "This is a commment, This is a commment, This is a commment",
  },
];

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

  return (
    <>
      {departmentsLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader title="My Tasks">
            {activeIndex === 0 && (
              <Button
                text="Add New Department"
                bg="#F0FFFF"
                border="#8CDBB4"
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
                  </TabPanel>

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
                      <GridItem colSpan={1}>
                        <TaskStack
                          title="To Do"
                          count={5}
                          borderColor="#FF3B30"
                        >
                          {tasks.map((task, index) => (
                            <TaskCard
                              title={task.title}
                              desc={task.desc}
                              key={index}
                              isStack={true}
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
                          {tasks.map((task, index) => (
                            <TaskCard
                              title={task.title}
                              desc={task.desc}
                              key={index}
                              isStack={true}
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
                          {tasks.map((task, index) => (
                            <TaskCard
                              title={task.title}
                              desc={task.desc}
                              key={index}
                              isStack={true}
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
                          {tasks.map((task, index) => (
                            <TaskCard
                              title={task.title}
                              desc={task.desc}
                              key={index}
                              isStack={true}
                            />
                          ))}
                        </TaskStack>
                      </GridItem>
                    </Grid>
                  </TabPanel>

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
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <GridItem colSpan={1} key={index}>
                            <TemplateCard />
                          </GridItem>
                        ))}
                    </Grid>
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
