import {
  Text,
  VStack,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Input as ChakraInput,
} from "@chakra-ui/react";
import DocumentCard from "@/components/documents/DocumentCard";
import Button from "@/components/ui/Button";
import Folder from "../documents/Folder";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";

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

const Documents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [file, setFile] = useState<any>(null);

  const handleModal = () => {
    setIsOpen(!isOpen);
    setFile(null);
  };
  const handleModal2 = () => {
    setIsOpen2(!isOpen2);
  };
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
            Documents
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight="500"
            color="subText.400"
            mt={-2}
            fontFamily={"body"}
          >
            All of your documents are managed here
          </Text>
        </VStack>

        <HStack justify="flex-end">
          <Button
            text="Upload New Document"
            bg="#F0FFFF"
            border="#8CDBB4"
            color="greens.100"
            px={5}
            onClick={handleModal}
          />
          <Button text="Create New Folder" onClick={handleModal2} />
        </HStack>
      </HStack>

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
            Recent Documents
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
                <DocumentCard title={task.title} desc={task.desc} />
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
            Folders
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
                <Folder title={task.title} desc={task.desc} />
              </GridItem>
            ))}
          </Grid>
        </>
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
              Upload new Document
            </Text>

            {!file && (
              <>
                <Text
                  fontSize="16px"
                  fontWeight={500}
                  color="subText.200"
                  fontFamily={"body"}
                >
                  Upload Document
                </Text>
                <VStack
                  align="center"
                  spacing={4}
                  borderWidth={1}
                  borderColor="border.200"
                  borderRadius="10px"
                  borderStyle="dashed"
                  w="100%"
                  h="180px"
                  justifyContent="center"
                  cursor="pointer"
                  position="relative"
                >
                  <ChakraInput
                    type="file"
                    w="100%"
                    h="100%"
                    position="absolute"
                    opacity="0"
                    zIndex="1"
                    onChange={(e: any) => setFile(e.target.files[0])}
                    accept=".doc,.docx,.pdf"
                  />

                  <VStack>
                    <Image
                      src="/images/upload.svg"
                      alt="empty"
                      w="35px"
                      h="auto"
                    />
                    <VStack>
                      <Text
                        fontSize="13px"
                        fontWeight={500}
                        color="subText.400"
                        fontFamily={"body"}
                      >
                        Click to{" "}
                        <Text as="span" color="primary2">
                          Upload your Documents
                        </Text>
                      </Text>

                      <Text
                        fontSize="13px"
                        fontWeight={500}
                        color="subText.600"
                        fontFamily={"body"}
                      >
                        Max Size:{" "}
                        <Text as="span" fontWeight={700} color="subText.200">
                          1MB,
                        </Text>{" "}
                        Format:{" "}
                        <Text as="span" fontWeight={700} color="subText.200">
                          .doc, .docx, .pdf
                        </Text>
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
              </>
            )}

            {file && (
              <HStack
                w="100%"
                justify="space-between"
                bg="bg.100"
                px={4}
                py={2}
              >
                <Text
                  fontSize="14px"
                  fontWeight={500}
                  color="subText.500"
                  fontFamily={"body"}
                >
                  {file.name}
                </Text>
                <IconButton
                  icon={<Image src="/images/trash.svg" alt="close" />}
                  bg="transparent"
                  onClick={() => setFile(null)}
                  aria-label="close"
                  variant="ghost"
                  _hover={{ bg: "transparent" }}
                />
              </HStack>
            )}

            {file && <Button text="Upload" py={4} type="submit" />}
          </VStack>
        }
      />

      <Modal
        isOpen={isOpen2}
        onClose={handleModal2}
        body={
          <VStack align="flex-start" spacing={4} mt={10} mb={5}>
            <Text
              color={"greens.100"}
              fontSize={"24px"}
              fontWeight={"600"}
              fontFamily={"body"}
            >
              Create New Folder
            </Text>
            <Formik
              initialValues={{
                folderName: "",
                department: ["HR"],
                users: ["colaborator1@gmail.com"],
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Input
                      label="Folder Name"
                      name="folderName"
                      type="text"
                      placeholder="Folder Name"
                    />

                    <FieldArray
                      name="department"
                      render={(arrayHelpers) => (
                        <VStack align="stretch" w={"100%"} mt={4}>
                          {props.values.department.map((dept, index) => (
                            <VStack key={index} position="relative">
                              <Input
                                label="Add Department"
                                name={`department.${index}`}
                                type="text"
                                placeholder="Department"
                              />
                              {index > 0 && (
                                <IconButton
                                  aria-label="delete department"
                                  position="absolute"
                                  right="-2"
                                  top="-2"
                                  icon={<FiTrash2 size={20} color="#FF3B30" />}
                                  onClick={() => arrayHelpers.remove(index)}
                                  variant="ghost"
                                  _hover={{ bg: "transparent" }}
                                />
                              )}
                            </VStack>
                          ))}
                          <Button
                            text="Add another department"
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

                    <FieldArray
                      name="users"
                      render={(arrayHelpers) => (
                        <VStack align="stretch" w={"100%"} mt={4}>
                          {props.values.users.map((user, index) => (
                            <VStack key={index} position="relative">
                              <Input
                                label="Add a user"
                                name={`users.${index}`}
                                type="text"
                                placeholder="Users"
                              />
                              {index > 0 && (
                                <IconButton
                                  aria-label="delete user"
                                  position="absolute"
                                  right="-2"
                                  top="-2"
                                  icon={<FiTrash2 size={20} color="#FF3B30" />}
                                  onClick={() => arrayHelpers.remove(index)}
                                  variant="ghost"
                                  _hover={{ bg: "transparent" }}
                                />
                              )}
                            </VStack>
                          ))}
                          <Button
                            text="Add another user"
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
                      <Button
                        text="Create Folder"
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

export default Documents;
