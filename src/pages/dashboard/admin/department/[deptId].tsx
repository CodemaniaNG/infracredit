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
import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import Layout from "@/components/dashboard/Layout";
import { FiTrash2 } from "react-icons/fi";

const Department = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { deptId } = router.query;

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

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
      <Layout showSidebar={false}>
        <Box p="6" overflowY="auto" bg="bg.100">
          <HStack justify="space-between" mb={"3"}>
            <HStack>
              <IconButton
                icon={<Image src="/images/undo.svg" alt="back" />}
                bg="white"
                onClick={() => router.push("/dashboard/tasks")}
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
                {deptId}
              </Text>
            </HStack>

            <HStack justify="flex-end">
              <Button
                text="Add New Level"
                bg="#F0FFFF"
                border="#8CDBB4"
                color="greens.100"
                icon="/images/add.svg"
                iconPosition="left"
                onClick={handleModal}
              />
            </HStack>
          </HStack>

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
                  label={"Members"}
                  value={20}
                  isPrefix={false}
                  image="/images/reports.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Reports Draft "}
                  value={40}
                  isPrefix={false}
                  image="/images/drafted.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Reports Created"}
                  value={63}
                  isPrefix={false}
                  image="/images/deleted2.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Reports Completed"}
                  value={30}
                  isPrefix={false}
                  image="/images/deleted2.svg"
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
                Manage members
              </Text>
              {/*  */}

              <Grid
                templateColumns={{
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={4}
                mb={5}
              >
                <GridItem colSpan={3}>
                  <DashboardTable data={data} />
                </GridItem>

                <GridItem colSpan={1}>
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
                    Overview
                  </Text>

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
                        icon={
                          <Image src="/images/arrow-down.svg" alt="export" />
                        }
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
                        icon={
                          <Image src="/images/arrow-down.svg" alt="export" />
                        }
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
            </>
          </>
        </Box>
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
                Add New Level
              </Text>

              <VStack w={"100%"} align="flex-start">
                <Text
                  color={"subText.200"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                  fontFamily={"body"}
                >
                  Department Name
                </Text>
                <VStack
                  w={"100%"}
                  align="flex-start"
                  bg="bg.100"
                  p={3}
                  borderRadius={8}
                >
                  <Text
                    color={"secondary"}
                    fontSize={"12px"}
                    fontWeight={"500"}
                    fontFamily={"body"}
                  >
                    HR Department
                  </Text>
                </VStack>
              </VStack>

              <Formik
                initialValues={{
                  levels: ["level 1"],
                }}
                onSubmit={(values, actions) => {
                  console.log(values);
                }}
              >
                {(props) => (
                  <Form style={{ width: "100%" }}>
                    <VStack>
                      <FieldArray
                        name="levels"
                        render={(arrayHelpers) => (
                          <VStack align="stretch" w={"100%"}>
                            {props.values.levels.map((level, index) => (
                              <VStack key={index} position="relative">
                                <Input
                                  label="Level"
                                  name={`levels.${index}`}
                                  type="text"
                                  placeholder="Level"
                                />
                                {index > 0 && (
                                  <IconButton
                                    aria-label="delete level"
                                    position="absolute"
                                    right="-2"
                                    top="-2"
                                    icon={
                                      <FiTrash2 size={20} color="#FF3B30" />
                                    }
                                    onClick={() => arrayHelpers.remove(index)}
                                    variant="ghost"
                                    _hover={{ bg: "transparent" }}
                                  />
                                )}
                              </VStack>
                            ))}
                            <Button
                              text="Add another level"
                              size="sm"
                              fontSize={10}
                              onClick={() => arrayHelpers.push("")}
                              variant="outline"
                              bg="transparent"
                              color="subText.400"
                              border="border.100"
                              borderStyle="dashed"
                            />
                          </VStack>
                        )}
                      />

                      <VStack align="stretch" w={"100%"} mt={4}>
                        <Button text="Add Level" px={4} py={4} type="submit" />
                      </VStack>
                    </VStack>
                  </Form>
                )}
              </Formik>
            </VStack>
          }
        />
      </Layout>
    </>
  );
};

export default Department;
