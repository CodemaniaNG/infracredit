import { Text, VStack, Grid, GridItem, Box } from "@chakra-ui/react";

const OrganizationTask = () => {
  return (
    <>
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
                  (0)
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
                  (0)
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
                  (0)
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
                  (0)
                </Text>
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default OrganizationTask;
