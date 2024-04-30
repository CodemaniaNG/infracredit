import { Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import TaskCard from "@/components/dashboard/TaskCard";
import DashboardTable from "@/components/dashboard/DashboardTable";

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
                <TaskCard title={task.title} desc={task.desc} status="todo" />
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
    </>
  );
};

export default Dashboard;
