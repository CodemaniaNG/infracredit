import { Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import DeletedCard from "../deleted/DeletedCard";
import DashboardHeader from "../dashboard/DashboardHeader";
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
const Deleted = () => {
  return (
    <>
      <DashboardHeader title="Deleted Reports" />

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
            Recent
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
                <DeletedCard
                  title={task.title}
                  desc={task.desc}
                  id={index.toString()}
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
            Last Month
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
                <DeletedCard
                  title={task.title}
                  desc={task.desc}
                  id={index.toString()}
                />
              </GridItem>
            ))}
          </Grid>
        </>
      </>
    </>
  );
};

export default Deleted;
