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
  Box,
  HStack,
} from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import MemberTable from "@/components/admin/MemberTable";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input2";
import Select from "@/components/ui/Select2";
import DashboardHeader from "../dashboard/DashboardHeader";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    {
      sn: "1",
      name: "Olusanya Ezekiel",
      email: "olusanya@gamil.com",
      role: "Manager",
      joinedOn: "12th May, 2021",
    },
    {
      sn: "1",
      name: "Olusanya Ezekiel",
      email: "olusanya@gamil.com",
      role: "Manager",
      joinedOn: "12th May, 2021",
    },
    {
      sn: "1",
      name: "Olusanya Ezekiel",
      email: "olusanya@gamil.com",
      role: "Manager",
      joinedOn: "12th May, 2021",
    },
    {
      sn: "1",
      name: "Olusanya Ezekiel",
      email: "olusanya@gamil.com",
      role: "Manager",
      joinedOn: "12th May, 2021",
    },
    {
      sn: "1",
      name: "Olusanya Ezekiel",
      email: "olusanya@gamil.com",
      role: "Manager",
      joinedOn: "12th May, 2021",
    },
  ];

  const tabs = [
    {
      title: "All",
    },
    {
      title: "User",
    },
    {
      title: "Supervisor",
    },
    {
      title: "Administrator",
    },
    {
      title: "Manager",
    },
  ];

  const roles = [
    { value: "user-reports", label: "User Report" },
    { value: "user-contracts", label: "User Contracts" },
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "supervisor", label: "Supervisor" },
    { value: "viewer", label: "Viewer" },
  ];

  return (
    <>
      <DashboardHeader title="Staff">
        <Button
          text="Create New Staff"
          icon="/images/add2.svg"
          iconPosition="left"
          onClick={handleModal}
        />
      </DashboardHeader>
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
              label={"Users"}
              value={20}
              isPrefix={false}
              image="/images/reports.svg"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DashboardCard
              label={"Supervisors"}
              value={40}
              isPrefix={false}
              image="/images/drafted.svg"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DashboardCard
              label={"Administrators"}
              value={63}
              isPrefix={false}
              image="/images/deleted2.svg"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DashboardCard
              label={"Managers"}
              value={30}
              isPrefix={false}
              image="/images/collaborators.svg"
            />
          </GridItem>
        </Grid>

        <Box bg="white" p={4} borderRadius="16px" mb={5}>
          <Text
            fontSize={{
              base: "16px",
              md: "18px",
              lg: "20px",
            }}
            fontWeight="600"
            color="maintText.200"
            fontFamily={"body"}
            mb={3}
          >
            Manage Organizational Tasks
          </Text>
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={2}
          >
            <GridItem colSpan={1}>
              <VStack align="flex-start">
                <Box w="100%" h={"27px"} bg="#FF170A" borderRadius="16px" />
                <Text
                  fontSize={"16px"}
                  fontWeight="600"
                  color="#FF3B30"
                  fontFamily={"body"}
                  mb={3}
                >
                  To-Do
                  <Text
                    as="span"
                    fontSize={"16px"}
                    fontWeight="700"
                    color="#FF3B30"
                    fontFamily={"body"}
                    mb={3}
                  >
                    (344)
                  </Text>
                </Text>
              </VStack>
            </GridItem>

            <GridItem colSpan={1}>
              <VStack align="flex-start">
                <Box w="100%" h={"27px"} bg="#3C76F1" borderRadius="16px" />
                <Text
                  fontSize={"16px"}
                  fontWeight="600"
                  color="#3C76F1"
                  fontFamily={"body"}
                  mb={3}
                >
                  In Progress
                  <Text
                    as="span"
                    fontSize={"16px"}
                    fontWeight="700"
                    color="#3C76F1"
                    fontFamily={"body"}
                    mb={3}
                  >
                    (344)
                  </Text>
                </Text>
              </VStack>
            </GridItem>

            <GridItem colSpan={1}>
              <VStack align="flex-start">
                <Box w="100%" h={"27px"} bg="#E88200" borderRadius="16px" />
                <Text
                  fontSize={"16px"}
                  fontWeight="600"
                  color="#E88200"
                  fontFamily={"body"}
                  mb={3}
                >
                  Under Review
                  <Text
                    as="span"
                    fontSize={"16px"}
                    fontWeight="700"
                    color="#E88200"
                    fontFamily={"body"}
                    mb={3}
                  >
                    (344)
                  </Text>
                </Text>
              </VStack>
            </GridItem>

            <GridItem colSpan={1}>
              <VStack align="flex-start">
                <Box w="100%" h={"27px"} bg="#2EAE4E" borderRadius="16px" />
                <Text
                  fontSize={"16px"}
                  fontWeight="600"
                  color="#2EAE4E"
                  fontFamily={"body"}
                  mb={3}
                >
                  Completed
                  <Text
                    as="span"
                    fontSize={"16px"}
                    fontWeight="700"
                    color="#2EAE4E"
                    fontFamily={"body"}
                    mb={3}
                  >
                    (344)
                  </Text>
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Box>

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
            Manage members
          </Text>
          <Tabs>
            <TabList>
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  _selected={{
                    color: "greens.100",
                    bg: "bg.500",
                    fontWeight: "700",
                    fontSize: "16px",
                    borderBottom: "2px solid #287750",
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderBottomEndRadius: "0px",
                    borderBottomStartRadius: "0px",
                    px: 6,
                  }}
                  px={4}
                  py={2}
                  color="subText.400"
                  fontFamily={"body"}
                  fontWeight="500"
                  fontSize={"16px"}
                  mr={3}
                  w={150}
                  borderRadius={0}
                >
                  {tab.title}
                </Tab>
              ))}
            </TabList>

            <TabPanels px={0}>
              <TabPanel px={0}>
                <MemberTable data={data} />
              </TabPanel>
              <TabPanel px={0}>
                <MemberTable data={data} />
              </TabPanel>
              <TabPanel px={0}>
                <MemberTable data={data} />
              </TabPanel>
              <TabPanel px={0}>
                <MemberTable data={data} />
              </TabPanel>
              <TabPanel px={0}>
                <MemberTable data={data} />
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
              Create New Staff
            </Text>
            <Formik
              initialValues={{
                role: "",
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Input
                      label="Name"
                      name="email"
                      type="text"
                      placeholder="Enter user name"
                    />

                    <Select
                      label="Role"
                      name="role"
                      options={roles}
                      placeholder="Select user role"
                    />

                    <Select
                      label="Level"
                      name="role"
                      options={roles}
                      placeholder="Select user level"
                    />

                    <Select
                      label="Department"
                      name="role"
                      options={roles}
                      placeholder="Select user department"
                    />

                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter user address"
                    />

                    <Input
                      label="Phone Number"
                      name="email"
                      type="phone"
                      placeholder="Enter user phone"
                    />

                    <VStack align="stretch" w={"100%"} mt={4}>
                      <Button text="Create Staff" px={4} py={4} type="submit" />
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

export default Admin;
