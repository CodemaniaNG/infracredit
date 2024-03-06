import { Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import ContractCard from "@/components/contracts/ContractCard";

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
  return (
    <>
      <VStack align="flex-start" mb={"3"}>
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
      <>
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
            color="subText.400"
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
    </>
  );
};

export default Dashboard;
