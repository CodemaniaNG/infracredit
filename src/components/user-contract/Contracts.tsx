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
} from "@chakra-ui/react";
import ContractCard from "@/components/contracts/ContractCard";
import Button from "@/components/ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input2";
import Select from "@/components/ui/Select2";

const Contracts = () => {
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

  const tabs = [
    {
      title: "All Contracts",
    },
    {
      title: "My Contracts",
    },
  ];

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const roles = [
    { value: "current", label: "Current Guarantee Porfolio Contract" },
    { value: "new", label: "New Guarantee Porfolio Contract" },
  ];

  const industries = [
    { value: "education", label: "Education" },
    { value: "health", label: "Health" },
    { value: "agriculture", label: "Agriculture" },
    { value: "finance", label: "Finance" },
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
            Contracts
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
            text="Create New Contract"
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
        <Tabs>
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
                {tasks.map((task, index) => (
                  <GridItem colSpan={1} key={index}>
                    <ContractCard title={task.title} desc={task.desc} />
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
                {tasks.map((task, index) => (
                  <GridItem colSpan={1} key={index}>
                    <ContractCard
                      title={task.title}
                      desc={task.desc}
                      role="user-contracts"
                    />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
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
              Create New Contract
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
                    <Select
                      label="Select Template"
                      name="role"
                      options={roles}
                      placeholder="Select template"
                    />

                    <Input
                      label="Date"
                      name="date"
                      type="date"
                      placeholder="Your email address"
                    />

                    <Input
                      label="Client Name"
                      name="clientName"
                      type="text"
                      placeholder="Your email address"
                    />

                    <Select
                      label="Select Industry"
                      name="industry"
                      options={industries}
                      placeholder="Select industry"
                    />

                    <VStack align="stretch" w={"100%"} mt={4}>
                      <Button
                        text="Create Contract"
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

export default Contracts;
