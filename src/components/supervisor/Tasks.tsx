import { Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import TaskCard from "@/components/dashboard/TaskCard";
import TaskStack from "@/components/task/TaskStack";

const Tasks = () => {
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
          My Tasks
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
            <TaskStack title="In Progress" count={5} borderColor="#3C76F1">
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
            <TaskStack title="Under Review" count={5} borderColor="#FF8F00">
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
            <TaskStack title="Completed" count={5} borderColor="#34C759">
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
      </>
    </>
  );
};

export default Tasks;
