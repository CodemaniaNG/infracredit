import {
  Text,
  VStack,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import TaskCard from "@/components/dashboard/TaskCard";
import TaskStack from "@/components/task/TaskStack";
import DepartmentCard from "./DepartmentCard";
import TemplateCard from "./TemplateCard";
import Button from "@/components/ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";
import DashboardHeader from "../dashboard/DashboardHeader";

const Tasks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
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

  const tasks2 = [
    {
      title: "HR",
      desc: "This is a commment, This is a commment, This is a commment",
    },
    {
      title: "Finance",
      desc: "This is a commment, This is a commment, This is a commment",
    },
    {
      title: "Procurement",
      desc: "This is a commment, This is a commment, This is a commment",
    },
    {
      title: "Legal",
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

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          <Tabs onChange={(index) => setActiveIndex(index)}>
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
                  {tasks2.map((task, index) => (
                    <GridItem colSpan={1} key={index}>
                      <DepartmentCard title={task.title} desc={task.desc} />
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
                    <TaskStack title="To Do" count={5} borderColor="#FF3B30">
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
        body={
          <VStack align="flex-start" spacing={4} mt={10} mb={5}>
            <Text
              color={"greens.100"}
              fontSize={"24px"}
              fontWeight={"600"}
              fontFamily={"body"}
            >
              Add New Department
            </Text>
            <Formik
              initialValues={{
                departmentName: "",
                departmentDescription: "",
                levels: ["level 1"],
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Input
                      label="Department Name"
                      name="departmentName"
                      type="text"
                      placeholder="Department Name"
                    />
                    <Input
                      label="Department Description"
                      name="departmentDescription"
                      type="text"
                      placeholder="Department Description"
                    />

                    <FieldArray
                      name="levels"
                      render={(arrayHelpers) => (
                        <VStack align="stretch" w={"100%"}>
                          {props.values.levels.map((level, index) => (
                            <VStack key={index} position="relative">
                              <Input
                                label="Level"
                                name={`levels.${index}`}
                                type="text"
                                placeholder="Level"
                              />
                              {index > 0 && (
                                <IconButton
                                  aria-label="delete level"
                                  position="absolute"
                                  right="-2"
                                  top="-2"
                                  icon={<FiTrash2 size={20} color="#FF3B30" />}
                                  onClick={() => arrayHelpers.remove(index)}
                                  variant="ghost"
                                  _hover={{ bg: "transparent" }}
                                />
                              )}
                            </VStack>
                          ))}
                          <Button
                            text="Add another level"
                            size="sm"
                            fontSize={10}
                            onClick={() => arrayHelpers.push("")}
                            variant="outline"
                            bg="transparent"
                            color="subText.400"
                            border="border.100"
                            borderStyle="dashed"
                          />
                        </VStack>
                      )}
                    />

                    <VStack align="stretch" w={"100%"} mt={4}>
                      <Button
                        text="Add New Department"
                        px={4}
                        py={4}
                        type="submit"
                      />
                    </VStack>
                  </VStack>
                </Form>
              )}
            </Formik>
          </VStack>
        }
      />
    </>
  );
};

export default Tasks;
