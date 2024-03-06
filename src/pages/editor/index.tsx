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
  IconButton,
  HStack,
  Image,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";

const Editor = () => {
  const router = useRouter();
  return (
    <>
      <Box p="6" overflowY="auto" bg="bg.100">
        <HStack justify="space-between" mb={"6"}>
          <HStack>
            <IconButton
              icon={<Image src="/images/undo.svg" alt="back" />}
              bg="white"
              onClick={() => router.back()}
              aria-label="back"
              borderWidth={1}
              borderColor="border.100"
            />
            <Text
              fontSize={{
                base: "16px",
                md: "18px",
                lg: "20px",
              }}
              fontWeight="600"
              color="maintText.200"
              fontFamily={"body"}
            >
              CEO REPORT
            </Text>
          </HStack>

          <HStack justify="flex-end">
            <Button
              text="Cancel Edit"
              bg="transparent"
              border="#FFCB8A"
              color="#FF8F00"
              borderWidth="1px"
              px={6}
            />
            <Button
              text="Save"
              bg="#F0FFFF"
              border="#8CDBB4"
              color="greens.100"
              borderWidth="1px"
              px={6}
            />
            <Button text="Submit" px={6} />
          </HStack>
        </HStack>

        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={2}
          mb={5}
        >
          <GridItem colSpan={1}>
            <Box p="6" overflowY="auto" bg="white" />
          </GridItem>
          <GridItem colSpan={3}>
            <Box p="6" overflowY="auto" bg="white" />
          </GridItem>
          <GridItem colSpan={1}>
            <VStack
              align="flex-start"
              bg="white"
              p={3}
              borderRadius="16px"
              borderWidth={1}
              borderColor="border.100"
              spacing={3}
              w="100%"
              mb={5}
            >
              <HStack justify="space-between" align="center" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="greens.100"
                  fontFamily={"body"}
                >
                  Collaborators (5)
                </Text>

                <IconButton
                  icon={<Image src="/images/arrow-down.svg" alt="export" />}
                  variant={"ghost"}
                  bg="transparent"
                  aria-label="export"
                  p={0}
                  m={0}
                />
              </HStack>

              <HStack justify="space-between" align="center" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="greens.100"
                  fontFamily={"body"}
                >
                  Supervisors (5)
                </Text>

                <IconButton
                  icon={<Image src="/images/arrow-down.svg" alt="export" />}
                  variant={"ghost"}
                  bg="transparent"
                  aria-label="export"
                  p={0}
                  m={0}
                />
              </HStack>

              <VStack align="flex-start" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="greens.100"
                  fontFamily={"body"}
                >
                  Reviewers
                </Text>

                <VStack align="flex-start">
                  <Avatar
                    size="sm"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>

                  <Text
                    fontSize={"12px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    Segun
                  </Text>
                </VStack>
              </VStack>

              <HStack justify="space-between" align="center" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="subText.300"
                  fontFamily={"body"}
                >
                  Add New Reviewer
                </Text>

                <IconButton
                  icon={<Image src="/images/add.svg" alt="export" />}
                  bg="#F0FFFF"
                  aria-label="export"
                  size={"sm"}
                  borderRadius={"full"}
                />
              </HStack>
            </VStack>

            <VStack
              align="flex-start"
              bg="white"
              p={3}
              borderRadius="16px"
              borderWidth={1}
              borderColor="border.100"
              spacing={3}
              w="100%"
            >
              <HStack justify="space-between" align="center" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="greens.100"
                  fontFamily={"body"}
                >
                  Collaborators (5)
                </Text>

                <IconButton
                  icon={<Image src="/images/arrow-down.svg" alt="export" />}
                  variant={"ghost"}
                  bg="transparent"
                  aria-label="export"
                  p={0}
                  m={0}
                />
              </HStack>

              <HStack justify="space-between" align="center" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="greens.100"
                  fontFamily={"body"}
                >
                  Supervisors (5)
                </Text>

                <IconButton
                  icon={<Image src="/images/arrow-down.svg" alt="export" />}
                  variant={"ghost"}
                  bg="transparent"
                  aria-label="export"
                  p={0}
                  m={0}
                />
              </HStack>

              <VStack align="flex-start" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="greens.100"
                  fontFamily={"body"}
                >
                  Reviewers
                </Text>

                <VStack align="flex-start">
                  <Avatar
                    size="sm"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>

                  <Text
                    fontSize={"12px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    Segun
                  </Text>
                </VStack>
              </VStack>

              <HStack justify="space-between" align="center" w="100%">
                <Text
                  fontSize={"14px"}
                  fontWeight="500"
                  color="subText.300"
                  fontFamily={"body"}
                >
                  Add New Reviewer
                </Text>

                <IconButton
                  icon={<Image src="/images/add.svg" alt="export" />}
                  bg="#F0FFFF"
                  aria-label="export"
                  size={"sm"}
                  borderRadius={"full"}
                />
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Editor;
