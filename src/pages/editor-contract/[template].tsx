import {
  Text,
  Grid,
  GridItem,
  Box,
  IconButton,
  HStack,
  Image,
  useToast,
  Spinner,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Comments from "@/components/editor/Comments";
import { useState, useEffect, useRef, memo } from "react";
import { useAppSelector } from "@/redux/store";
import Loader from "@/components/ui/Loader";
import { useReactToPrint } from "react-to-print";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import TemplateModalsContract from "@/components/editor/TemplateModalsContract";
import ContractDescription from "@/components/editor/ContractDescription";
import {
  useGetContractByIdQuery,
  useGetCommentsQuery,
  useUpdateContractMutation,
} from "@/redux/services/contract.service";
import NDA from "@/components/templates/nda";
import CommentsContract from "@/components/editor/CommentsContract";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const Editor = () => {
  const componentRef = useRef() as any;
  const toast = useToast();
  const router = useRouter();
  const { template } = router.query;

  const { token, userInfo } = useAppSelector((state) => state.app.auth);

  const department = userInfo?.department?.name?.trim();

  const [isEdit, setIsEdit] = useState(false);
  const [contractToDisplay, setContractToDisplay] = useState<any>(null);
  const [description, setDescription] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyRegNo, setCompanyRegNo] = useState("");
  const [contractDate, setContractDate] = useState("");
  const [contractFiles, setContractFiles] = useState<any>([]);
  const [type, setType] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  const [updateContract, { isLoading: updateContractLoading }] =
    useUpdateContractMutation();

  const { data: commentsData, isLoading: commentsLoading } =
    useGetCommentsQuery({
      token: token,
      id: template,
    });

  const comments = commentsData?.data;

  const {
    data,
    isLoading: contractsLoading,
    refetch,
  } = useGetContractByIdQuery({
    id: template,
    token,
  });

  const contractData = data?.data;

  useEffect(() => {
    if (contractData) {
      setContractFiles(
        contractData?.contractFiles.map((file: any) => {
          const meta = JSON.parse(file.meta);
          return {
            uri: meta["webUrl"],
            // uri: meta["@microsoft.graph.downloadUrl"],
            fileType: meta["fileType"],
            resource: file?.resource,
          };
        }),
      );
    }
  }, [contractData]);

  useEffect(() => {
    if (contractData) {
      setDescription(contractData?.title);
    }
  }, [contractData]);

  useEffect(() => {
    if (contractData) {
      setContractToDisplay(JSON.parse(contractData?.meta));
      setType(contractData?.templateType || 7);
    }
  }, [contractData]);

  useEffect(() => {
    if (contractToDisplay) {
      setCompanyAddress(contractToDisplay?.CompanyAddress);
      setCompanyName(contractToDisplay?.CompanyName);
      setCompanyRegNo(contractToDisplay?.CompanyRegistration);
      setContractDate(contractToDisplay?.ContractMetaDate);
    }
  }, [contractToDisplay]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleModal2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleModal3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleModal5 = () => {
    setIsOpen5(!isOpen5);
  };

  const handleModal8 = () => {
    setIsOpen8(!isOpen8);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: contractData?.title,
  });

  const menuItems = [
    {
      icon: "/images/download.svg",
      title: "Download Contract",
      onClick: () => {
        if (department === "Legal") {
          console.log("Download Contract");
        } else {
          handlePrint();
        }
      },
      isVisible: true,
    },
    // {
    //   icon: "/images/upload2.svg",
    //   title: "Upload Signed PDF",
    //   onClick: () => {
    //     handleModal5();
    //   },
    //   isVisible: department === "ESG",
    // },
    {
      icon: "/images/re-upload.svg",
      title: "Re-Upload Contract",
      onClick: () => {
        handleModal();
      },
      isVisible: true,
    },
    // {
    //   icon: "/images/share.svg",
    //   title: "Share Contract",
    //   onClick: () => {
    //     handleModal2();
    //   },
    //   isVisible: department === "Legal",
    // },
    {
      icon: "/images/archive.svg",
      title: "View Contracts Archives",
      onClick: () => {
        console.log("View Contracts Archives");
      },
      isVisible: true,
    },
  ];

  const handleUpdateContract = async () => {
    const data = [
      {
        op: "replace",
        path: "Description",
        value: description,
      },
    ];

    await updateContract({
      token,
      id: template,
      body: data,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Contract updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsEdit(false);
        refetch();
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error?.data?.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <DashboardLayout showSidebar={false}>
        {contractsLoading || commentsLoading ? (
          <Loader />
        ) : (
          <Box p="6" overflowY="auto" bg="bg.100">
            <HStack justify="space-between" mb={"6"}>
              <HStack>
                <IconButton
                  icon={<Image src="/images/undo.svg" alt="back" />}
                  bg="white"
                  onClick={() => {
                    router.back();
                  }}
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
                  {contractData?.title}
                </Text>
              </HStack>

              <HStack>
                {department === "Legal" && (
                  <IconButton
                    icon={<Image src="/images/chats.svg" alt="back" />}
                    variant="ghost"
                    aria-label="chats"
                    onClick={handleModal3}
                  />
                )}

                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<Image src="/images/menu.svg" alt="back" />}
                    variant="ghost"
                  />
                  <MenuList bg="white" color="#545764" fontSize="14px" p="2">
                    {menuItems.map((item, index) => (
                      <MenuItem
                        key={index}
                        icon={<Image src={item.icon} alt={item.title} />}
                        onClick={item.onClick}
                        fontWeight="600"
                        bg="#F4F7FF"
                        borderRadius="8px"
                        mb="2"
                        display={item.isVisible ? "block" : "none"}
                      >
                        {item.title}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
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
                <ContractDescription
                  contractData={contractData}
                  setDescription={setDescription}
                  description={description}
                  handleUpdateContract={handleUpdateContract}
                  updateContractLoading={updateContractLoading}
                />
              </GridItem>

              <GridItem colSpan={3}>
                {contractData?.meta && (
                  <>
                    {contractToDisplay && type ? (
                      <Box ref={componentRef}>
                        {type === 7 && (
                          <NDA
                            isEdit={isEdit}
                            contractToDisplay={contractToDisplay?.Body}
                            setContractToDisplay={setContractToDisplay}
                            companyAddress={companyAddress}
                            companyName={companyName}
                            companyRegNo={companyRegNo}
                            contractDate={contractDate}
                            contractData={contractToDisplay}
                          />
                        )}
                      </Box>
                    ) : (
                      <VStack align="center" justify="center" h="100%">
                        <Spinner
                          thickness="4px"
                          speed="0.65s"
                          emptyColor="gray.200"
                          color="greens.200"
                          size="lg"
                        />
                      </VStack>
                    )}
                  </>
                )}

                {contractData?.contractFiles && (
                  <Box mt={5}>
                    <Text
                      fontSize="16px"
                      fontWeight="600"
                      color="maintText.200"
                      fontFamily={"body"}
                    >
                      Attached Files
                    </Text>

                    {/* <VStack mt={3} align="flex-start" spacing="10">
                      {contractFiles.map((file: any, index: number) => (
                        <HStack
                          key={index}
                          align="center"
                          spacing={4}
                          cursor="pointer"
                          onClick={() => {
                            window.open(file.uri, "_blank");
                          }}
                        >
                          <Image
                            src="/images/pdf.svg"
                            alt="file"
                            boxSize={10}
                            cursor="pointer"
                          />
                          <Text
                            fontSize="14px"
                            fontWeight="600"
                            color="maintText.200"
                            fontFamily={"body"}
                          >
                            {file.resource}
                          </Text>
                        </HStack>
                      ))}
                    </VStack> */}

                    <DocViewer
                      documents={contractFiles}
                      pluginRenderers={DocViewerRenderers}
                      config={{
                        header: {
                          disableHeader: false,
                          disableFileName: false,
                        },
                      }}
                    />
                  </Box>
                )}
              </GridItem>

              <GridItem colSpan={1}>
                <CommentsContract id={contractData?.id} comments={comments} />
              </GridItem>
            </Grid>
          </Box>
        )}
        <TemplateModalsContract
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleModal={handleModal}
          isOpen2={isOpen2}
          setIsOpen2={setIsOpen2}
          handleModal2={handleModal2}
          isOpen3={isOpen3}
          setIsOpen3={setIsOpen3}
          handleModal3={handleModal3}
          isOpen5={isOpen5}
          setIsOpen5={setIsOpen5}
          handleModal5={handleModal5}
          isOpen8={isOpen8}
          setIsOpen8={setIsOpen8}
          handleModal8={handleModal8}
          contractData={contractData}
        />
      </DashboardLayout>
    </>
  );
};

export default memo(Editor);
