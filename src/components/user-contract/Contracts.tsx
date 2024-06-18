import {
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ContractCardTemplate from "@/components/contracts/ContractCardTemplate";
import ContractCard from "@/components/contracts/ContractCard";
import { useState } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";

const Contracts = () => {
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
      title: "Templates",
    },
    {
      title: "Ongoing",
    },
  ];

  return (
    <>
      <DashboardHeader title="Contracts" />

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
                w={"150px"}
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
                    <ContractCardTemplate title={task.title} desc={task.desc} />
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
    </>
  );
};

export default Contracts;
