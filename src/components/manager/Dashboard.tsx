import {
  Text,
  VStack,
  Grid,
  GridItem,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import TaskCard from "@/components/dashboard/TaskCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import Select from "@/components/ui/Select2";
import { FiTrash2 } from "react-icons/fi";

const Dashboard = () => {
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

  const data = [
    {
      sn: "1",
      title: "Annual report",
      editedBy: "Olusanya Ezekiel",
      editedOn: "12th May, 2021",
      currentUser: "Wale Peter",
    },
    {
      sn: "1",
      title: "Annual report",
      editedBy: "Olusanya Ezekiel",
      editedOn: "12th May, 2021",
      currentUser: "Wale Peter",
    },
    {
      sn: "1",
      title: "Annual report",
      editedBy: "Olusanya Ezekiel",
      editedOn: "12th May, 2021",
      currentUser: "Wale Peter",
    },
    {
      sn: "1",
      title: "Annual report",
      editedBy: "Olusanya Ezekiel",
      editedOn: "12th May, 2021",
      currentUser: "Wale Peter",
    },
    {
      sn: "1",
      title: "Annual report",
      editedBy: "Olusanya Ezekiel",
      editedOn: "12th May, 2021",
      currentUser: "Wale Peter",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const roles = [
    { value: "current", label: "Current Guarantee Porfolio Contract" },
    { value: "new", label: "New Guarantee Porfolio Contract" },
  ];
  return (
    <>
      <HStack justify="space-between" mb={"3"}>
        <VStack align="flex-start">
          <Text
            fontSize={{
              base: "20px",
              md: "24px",
              lg: "32px",
            }}
            fontWeight="600"
            color="maintText.200"
            fontFamily={"body"}
          >
            Welcome back,
            <Text
              as="span"
              fontSize={{
                base: "20px",
                md: "24px",
                lg: "32px",
              }}
              fontWeight="600"
              color="secondary"
              fontFamily={"body"}
            >
              Olusanya Ezekiel
            </Text>
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight="500"
            color="subText.400"
            mt={-2}
            fontFamily={"body"}
          >
            12th May, 2023
          </Text>
        </VStack>

        <HStack justify="flex-end">
          <Button
            text="Assign New Report"
            bg="#F0FFFF"
            border="#8CDBB4"
            color="greens.100"
            icon="/images/export.svg"
            iconPosition="left"
            onClick={handleModal}
          />
        </HStack>
      </HStack>
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
              value={20}
              isPrefix={false}
              image="/images/reports.svg"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DashboardCard
              label={"Reports Drafted"}
              value={40}
              isPrefix={false}
              image="/images/drafted.svg"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DashboardCard
              label={"Reports Deleted"}
              value={63}
              isPrefix={false}
              image="/images/deleted2.svg"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DashboardCard
              label={"Collaborators"}
              value={30}
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
            {tasks.map((task, index) => (
              <GridItem colSpan={1} key={index}>
                <TaskCard
                  title={task.title}
                  desc={task.desc}
                  role="manager"
                  status="review"
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

          <DashboardTable data={data} />
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
              Assign New Report
            </Text>
            <Formik
              initialValues={{
                title: "",
                reportTemplate: "",
                description: "",
                month: "",
                year: "",
                user: ["colaborator1@gmail.com"],
                supervisor: ["supervisor@gmail.com"],
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Input
                      label="Title"
                      name="title"
                      type="text"
                      placeholder="Report Title"
                    />

                    <Select
                      label="Select Report"
                      name="report-template"
                      options={roles}
                      placeholder="Select template"
                    />

                    <Input
                      label="Description"
                      name="description"
                      type="text"
                      placeholder="Report Description"
                    />

                    <HStack
                      w={"100%"}
                      justify="space-between"
                      align="flex-start"
                    >
                      <Input
                        label="Month"
                        name="month"
                        type="date"
                        placeholder="Month"
                      />

                      <Input
                        label="Year"
                        name="year"
                        type="text"
                        placeholder="Year"
                      />
                    </HStack>

                    <FieldArray
                      name="user"
                      render={(arrayHelpers) => (
                        <VStack align="stretch" w={"100%"} mt={4}>
                          {props.values.user.map((email, index) => (
                            <VStack key={index} position="relative">
                              <Input
                                label="User"
                                name={`user.${index}`}
                                type="text"
                                placeholder="User"
                              />
                              {index > 0 && (
                                <IconButton
                                  aria-label="delete user"
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
                            text="Add another user"
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

                    <FieldArray
                      name="supervisor"
                      render={(arrayHelpers) => (
                        <VStack align="stretch" w={"100%"} mt={4}>
                          {props.values.supervisor.map((email, index) => (
                            <VStack key={index} position="relative">
                              <Input
                                label="Supervisor"
                                name={`supervisor.${index}`}
                                type="email"
                                placeholder="Supervisor Email"
                              />
                              {index > 0 && (
                                <IconButton
                                  aria-label="delete supervisor"
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
                            text="Add another supervisor"
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
                        text="Assign Report"
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

export default Dashboard;
