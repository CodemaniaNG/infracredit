import {
  Text,
  Grid,
  GridItem,
  Box,
  IconButton,
  HStack,
  Image,
  VStack,
  Input as ChakraInput,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import Layout from "@/components/dashboard/Layout";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import PageContent from "@/components/editor/PageContent";
import ReportDescription from "@/components/editor/ReportDescription";
import Comments from "@/components/editor/Comments";
import Tools from "@/components/editor/Tools";
import Pages from "@/components/editor/Pages";
import CeoReport from "@/components/templates/ceo-report";
import ManagementReport from "@/components/templates/management-report";
import { useState } from "react";
import Renumeration from "@/components/templates/renumeration";
import Modal from "@/components/ui/Modal";
import { Formik, Form, FieldArray } from "formik";
import Input from "@/components/ui/Input2";
import { FiTrash2 } from "react-icons/fi";

const Editor = () => {
  const router = useRouter();
  const { template, role } = router.query;
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [file, setFile] = useState<any>(null);

  const handleModal = () => {
    setIsOpen(!isOpen);
    setFile(null);
  };

  const handleModal2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleModal3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleModal4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleModal5 = () => {
    setIsOpen5(!isOpen5);
    setFile(null);
  };

  const handleModal6 = () => {
    setIsOpen6(!isOpen6);
  };

  const handleModal7 = () => {
    setIsOpen7(!isOpen7);
  };

  return (
    <>
      <Layout showSidebar={false}>
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

            {template === "report" && role === "user-reports" && (
              <HStack justify="flex-end">
                {isEdit && (
                  <Button
                    text={"Cancel Edit"}
                    bg="transparent"
                    border="#FFCB8A"
                    color="#FF8F00"
                    borderWidth="1px"
                    px={6}
                    onClick={() => setIsEdit(!isEdit)}
                  />
                )}
                {!isEdit && (
                  <Button
                    text="Share Report"
                    bg="#F0FFFF"
                    border="#8CDBB4"
                    color="greens.100"
                    borderWidth="1px"
                    px={6}
                  />
                )}
                <Button
                  text={isEdit ? "Save" : "Edit Report"}
                  onClick={() => setIsEdit(!isEdit)}
                />
              </HStack>
            )}

            {template === "report" && role === "manager" && (
              <HStack justify="flex-end">
                <Button
                  text="Disapprove"
                  bg="transparent"
                  border="#FF9D98"
                  color="#FF3B30"
                  borderWidth="1px"
                  px={6}
                  variant="outline"
                  onClick={handleModal4}
                />
                <Button text={"Approve"} onClick={handleModal3} />
              </HStack>
            )}

            {template === "contract" && role === "user-contracts" && (
              <HStack justify="flex-end">
                <Button
                  text="Share Contract"
                  bg="#F0FFFF"
                  border="#8CDBB4"
                  color="greens.100"
                  borderWidth="1px"
                  onClick={handleModal2}
                />
                <Button
                  text="Re-Upload Contract"
                  px={6}
                  onClick={handleModal}
                />
              </HStack>
            )}

            {template === "contract" && role === "manager" && (
              <HStack justify="flex-end">
                <Button
                  text="Download Document"
                  bg="#F0FFFF"
                  border="#8CDBB4"
                  color="greens.100"
                  borderWidth="1px"
                />
                <Button
                  text="Upload Signed PDF"
                  px={6}
                  onClick={handleModal5}
                />
              </HStack>
            )}

            {template === "report" && role === "supervisor" && (
              <HStack justify="flex-end">
                {isEdit && (
                  <Button
                    text={"Cancel Edit"}
                    bg="transparent"
                    border="#FFCB8A"
                    color="#FF8F00"
                    borderWidth="1px"
                    px={6}
                    onClick={() => setIsEdit(!isEdit)}
                  />
                )}
                {!isEdit && (
                  <Button
                    text={"Return"}
                    bg="transparent"
                    border="#FF9D98"
                    color="#FF3B30"
                    borderWidth="1px"
                    px={6}
                    onClick={handleModal6}
                  />
                )}
                <Button
                  text={isEdit ? "Save" : "Edit Report"}
                  bg="#F0FFFF"
                  color="greens.100"
                  px={6}
                  onClick={() => setIsEdit(!isEdit)}
                />
                {!isEdit && (
                  <Button text={"Submit"} px={6} onClick={handleModal7} />
                )}
              </HStack>
            )}
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
            <GridItem
              colSpan={1}
              sx={{
                position: "sticky",
                top: "0",
                zIndex: "1",
              }}
            >
              {/* <Tools /> */}
              <Pages />
            </GridItem>

            <GridItem colSpan={3}>
              <Box>
                {template === "report" && <CeoReport isEdit={isEdit} />}
                {template === "contract" && <CeoReport isEdit={isEdit} />}
                {template === "management-report" && (
                  <ManagementReport isEdit={isEdit} />
                )}
                {template === "renumeration" && (
                  <Renumeration isEdit={isEdit} />
                )}
              </Box>
            </GridItem>

            <GridItem colSpan={1} position="sticky" right="0">
              <PageContent />
              <ReportDescription />
              <Comments />
            </GridItem>
          </Grid>
        </Box>
      </Layout>

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
              Re-Upload Contract
            </Text>

            {!file && (
              <>
                <Text
                  fontSize="16px"
                  fontWeight={500}
                  color="subText.200"
                  fontFamily={"body"}
                >
                  Upload File
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
                          Upload your File
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

            {file && <Button text="Re-Upload" py={4} type="submit" />}
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
              Share Contract
            </Text>

            <VStack w={"100%"} align="flex-start">
              <Text
                color={"subText.200"}
                fontSize={"14px"}
                fontWeight={"500"}
                fontFamily={"body"}
              >
                Title
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
                  Contractual Agreement | January 3, 2023
                </Text>
              </VStack>
            </VStack>
            <Formik
              initialValues={{
                description: "",
                recipients: ["colaborator1@gmail.com"],
                comment: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Input
                      label="Document Description"
                      name="description"
                      type="text"
                      placeholder="Document Description"
                    />

                    <FieldArray
                      name="recipients"
                      render={(arrayHelpers) => (
                        <VStack align="stretch" w={"100%"} mt={4}>
                          {props.values.recipients.map((email, index) => (
                            <VStack key={index} position="relative">
                              <Input
                                label="Recipient’s Email"
                                name={`recipients.${index}`}
                                type="email"
                                placeholder="Recipient’s Email"
                              />
                              {index > 0 && (
                                <IconButton
                                  aria-label="delete recipient"
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
                            text="Add another recipient"
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

                    <Input
                      label="Comment for Recipient"
                      name="comment"
                      type="text"
                      placeholder="Comment for Recipient"
                    />

                    <VStack align="stretch" w={"100%"} mt={4}>
                      <Button text="Share" px={4} py={4} type="submit" />
                    </VStack>
                  </VStack>
                </Form>
              )}
            </Formik>
          </VStack>
        }
      />

      <Modal
        isOpen={isOpen3}
        onClose={handleModal3}
        body={
          <VStack align="flex-start" spacing={4} mt={10} mb={5}>
            <Text
              color={"greens.100"}
              fontSize={"24px"}
              fontWeight={"600"}
              fontFamily={"body"}
            >
              Approve Report
            </Text>

            <VStack w={"100%"} align="flex-start">
              <Text
                color={"subText.200"}
                fontSize={"14px"}
                fontWeight={"500"}
                fontFamily={"body"}
              >
                Title
              </Text>
              <VStack
                w={"100%"}
                align="flex-start"
                bg="bg.100"
                p={3}
                borderRadius={8}
                mt={-1}
              >
                <Text
                  color={"secondary"}
                  fontSize={"12px"}
                  fontWeight={"500"}
                  fontFamily={"body"}
                >
                  Contractual Agreement | January 3, 2023
                </Text>
              </VStack>
            </VStack>

            <VStack align="flex-start">
              <Text
                fontSize={"14px"}
                fontFamily={"body"}
                fontWeight={"500"}
                color={"subText.600"}
                mb={-1}
              >
                Creator
              </Text>
              <HStack spacing={2}>
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize={"13px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"maintText.200"}
                  >
                    Segun Adebayo
                  </Text>
                  <Text
                    fontSize={"11px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    USER
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            <HStack w={"100%"} justify="space-between">
              <Button
                text="Cancel"
                px={4}
                py={4}
                type="submit"
                variant="outline"
                bg="transparent"
                color="#FF3B30"
                border="#FF9D98"
                onClick={handleModal3}
              />

              <Button text="Approve" px={4} py={4} type="submit" />
            </HStack>
          </VStack>
        }
      />

      <Modal
        isOpen={isOpen4}
        onClose={handleModal4}
        body={
          <VStack align="flex-start" spacing={4} mt={10} mb={5}>
            <Text
              color={"greens.100"}
              fontSize={"24px"}
              fontWeight={"600"}
              fontFamily={"body"}
            >
              Disapprove Report
            </Text>

            <VStack w={"100%"} align="flex-start">
              <Text
                color={"subText.200"}
                fontSize={"14px"}
                fontWeight={"500"}
                fontFamily={"body"}
              >
                Title
              </Text>
              <VStack
                w={"100%"}
                align="flex-start"
                bg="bg.100"
                p={3}
                borderRadius={8}
                mt={-1}
              >
                <Text
                  color={"secondary"}
                  fontSize={"12px"}
                  fontWeight={"500"}
                  fontFamily={"body"}
                >
                  Contractual Agreement | January 3, 2023
                </Text>
              </VStack>
            </VStack>

            <VStack align="flex-start">
              <Text
                fontSize={"14px"}
                fontFamily={"body"}
                fontWeight={"500"}
                color={"subText.600"}
                mb={-1}
              >
                Creator
              </Text>
              <HStack spacing={2}>
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize={"13px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"maintText.200"}
                  >
                    Segun Adebayo
                  </Text>
                  <Text
                    fontSize={"11px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    USER
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            <VStack align="flex-start">
              <Text
                fontSize={"14px"}
                fontFamily={"body"}
                fontWeight={"500"}
                color={"subText.600"}
                mb={-1}
              >
                Assign to
              </Text>
              <HStack spacing={2}>
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize={"13px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"maintText.200"}
                  >
                    Segun Adebayo
                  </Text>
                  <Text
                    fontSize={"11px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    USER
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            <Formik
              initialValues={{
                comment: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Input
                      label="Comment"
                      name="comment"
                      type="text"
                      placeholder="Comment"
                    />

                    {/* <VStack align="stretch" w={"100%"} mt={4}>
                      <Button text="Share" px={4} py={4} type="submit" />
                    </VStack> */}
                  </VStack>
                </Form>
              )}
            </Formik>

            <HStack w={"100%"} justify="space-between">
              <Button
                text="Cancel"
                px={4}
                py={4}
                type="submit"
                variant="outline"
                bg="transparent"
                color="#FF3B30"
                border="#FF9D98"
                onClick={handleModal4}
              />

              <Button
                text="Disapprove"
                px={4}
                py={4}
                type="submit"
                bg="#FF3B30"
              />
            </HStack>
          </VStack>
        }
      />

      <Modal
        isOpen={isOpen5}
        onClose={handleModal5}
        body={
          <VStack align="flex-start" spacing={4} mt={10} mb={5}>
            <Text
              color={"greens.100"}
              fontSize={"24px"}
              fontWeight={"600"}
              fontFamily={"body"}
            >
              Upload Signed PDF
            </Text>

            {!file && (
              <>
                <Text
                  fontSize="16px"
                  fontWeight={500}
                  color="subText.200"
                  fontFamily={"body"}
                >
                  Upload Sgnature
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
                    accept=".pdf"
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
                          Upload your signed PDF
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
                          .pdf
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
        isOpen={isOpen6}
        onClose={handleModal6}
        body={
          <VStack align="flex-start" spacing={4} mt={10} mb={5}>
            <Text
              color={"greens.100"}
              fontSize={"24px"}
              fontWeight={"600"}
              fontFamily={"body"}
            >
              Return Report
            </Text>

            <VStack w={"100%"} align="flex-start">
              <Text
                color={"subText.200"}
                fontSize={"14px"}
                fontWeight={"500"}
                fontFamily={"body"}
              >
                Title
              </Text>
              <VStack
                w={"100%"}
                align="flex-start"
                bg="bg.100"
                p={3}
                borderRadius={8}
                mt={-1}
              >
                <Text
                  color={"secondary"}
                  fontSize={"12px"}
                  fontWeight={"500"}
                  fontFamily={"body"}
                >
                  Contractual Agreement | January 3, 2023
                </Text>
              </VStack>
            </VStack>

            <VStack align="flex-start">
              <Text
                fontSize={"14px"}
                fontFamily={"body"}
                fontWeight={"500"}
                color={"subText.600"}
                mb={-1}
              >
                Creator
              </Text>
              <HStack spacing={2}>
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize={"13px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"maintText.200"}
                  >
                    Segun Adebayo
                  </Text>
                  <Text
                    fontSize={"11px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    USER
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            <VStack align="flex-start">
              <Text
                fontSize={"14px"}
                fontFamily={"body"}
                fontWeight={"500"}
                color={"subText.600"}
                mb={-1}
              >
                Assign to
              </Text>
              <HStack spacing={2}>
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize={"13px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"maintText.200"}
                  >
                    Segun Adebayo
                  </Text>
                  <Text
                    fontSize={"11px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    USER
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            <Formik
              initialValues={{
                comment: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form style={{ width: "100%" }}>
                  <VStack>
                    <Input
                      label="Comment"
                      name="comment"
                      type="text"
                      placeholder="Comment"
                    />

                    {/* <VStack align="stretch" w={"100%"} mt={4}>
                      <Button text="Share" px={4} py={4} type="submit" />
                    </VStack> */}
                  </VStack>
                </Form>
              )}
            </Formik>

            <HStack w={"100%"} justify="space-between">
              <Button
                text="Cancel"
                px={4}
                py={4}
                type="submit"
                variant="outline"
                bg="transparent"
                color="#FF3B30"
                border="#FF9D98"
                onClick={handleModal6}
              />

              <Button text="Return" px={4} py={4} type="submit" bg="#FF3B30" />
            </HStack>
          </VStack>
        }
      />

      <Modal
        isOpen={isOpen7}
        onClose={handleModal7}
        body={
          <VStack align="flex-start" spacing={4} mt={10} mb={5}>
            <Text
              color={"greens.100"}
              fontSize={"24px"}
              fontWeight={"600"}
              fontFamily={"body"}
            >
              Submit Report
            </Text>

            <VStack w={"100%"} align="flex-start">
              <Text
                color={"subText.200"}
                fontSize={"14px"}
                fontWeight={"500"}
                fontFamily={"body"}
              >
                Title
              </Text>
              <VStack
                w={"100%"}
                align="flex-start"
                bg="bg.100"
                p={3}
                borderRadius={8}
                mt={-1}
              >
                <Text
                  color={"secondary"}
                  fontSize={"12px"}
                  fontWeight={"500"}
                  fontFamily={"body"}
                >
                  Contractual Agreement | January 3, 2023
                </Text>
              </VStack>
            </VStack>

            <VStack align="flex-start">
              <Text
                fontSize={"14px"}
                fontFamily={"body"}
                fontWeight={"500"}
                color={"subText.600"}
                mb={-1}
              >
                Creator
              </Text>
              <HStack spacing={2}>
                <Avatar
                  size="sm"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                >
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <VStack align="flex-start" spacing={0}>
                  <Text
                    fontSize={"13px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"maintText.200"}
                  >
                    Segun Adebayo
                  </Text>
                  <Text
                    fontSize={"11px"}
                    fontFamily={"body"}
                    fontWeight={"500"}
                    color={"subText.600"}
                  >
                    USER
                  </Text>
                </VStack>
              </HStack>
            </VStack>

            <HStack w={"100%"} justify="space-between">
              <Button
                text="Cancel"
                px={4}
                py={4}
                type="submit"
                variant="outline"
                bg="transparent"
                color="#FF3B30"
                border="#FF9D98"
                onClick={handleModal7}
              />

              <Button text="Submit" px={4} py={4} type="submit" />
            </HStack>
          </VStack>
        }
      />
    </>
  );
};

export default Editor;
