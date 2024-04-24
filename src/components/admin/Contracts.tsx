import { Text, Grid, GridItem } from "@chakra-ui/react";
import ContractCard from "@/components/contracts/ContractCard";
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

  return (
    <>
      <DashboardHeader title="Contracts" />

      <>
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
          Ongoing Contracts
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
              <ContractCard title={task.title} desc={task.desc} />
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
          color="maintText.200"
          fontFamily={"body"}
          mb={3}
        >
          Closed Out Contracts
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
              <ContractCard title={task.title} desc={task.desc} />
            </GridItem>
          ))}
        </Grid>
      </>
    </>
  );
};

export default Contracts;
