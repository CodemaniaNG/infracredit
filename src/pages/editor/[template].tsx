import {
  Text,
  Grid,
  GridItem,
  Box,
  IconButton,
  HStack,
  Image,
  useToast,
} from "@chakra-ui/react";
import Layout from "@/components/dashboard/Layout";
import { useRouter } from "next/router";
import ReportDescription from "@/components/editor/ReportDescription";
import Comments from "@/components/editor/Comments";
import CeoReport from "@/components/templates/ceo-report";
import ManagementReport from "@/components/templates/management-report";
import { useState, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import Loader from "@/components/ui/Loader";
import {
  useGetReportByIdQuery,
  useGetCommentsQuery,
  useUpdateReportMutation,
} from "@/redux/services/reports.service";
import { setTemplateContent, setType } from "@/redux/slices/templateSlice";
import ActionBtns from "@/components/editor/ActionBtns";
import TemplateModals from "@/components/editor/TemplateModals";
import Renumeration from "@/components/templates/renumeration";
import Credit from "@/components/templates/credit";
import { useReactToPrint } from "react-to-print";
import { templateIDs } from "@/utils/constant";

const Editor = () => {
  const dispatch = useAppDispatch();
  const componentRef = useRef() as any;
  const toast = useToast();
  const router = useRouter();
  const { template } = router.query;
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [reportToEdit, setReportToEdit] = useState<any>(null);
  const [reportTitle, setReportTitle] = useState("");

  const { templateContent, type } = useAppSelector(
    (state) => state.app.template,
  );

  const { token, userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  const [updateReport, { isLoading: updateReportLoading }] =
    useUpdateReportMutation();

  const {
    data,
    isLoading: reportsLoading,
    refetch,
  } = useGetReportByIdQuery({
    token: token,
    id: template,
  });

  const { data: commentsData, isLoading: commentsLoading } =
    useGetCommentsQuery({
      token: token,
      reportId: template,
    });

  const templateData = data?.data;

  useEffect(() => {
    if (templateData) {
      setReportTitle(templateData?.description);
    }
  }, [templateData]);

  // useEffect(() => {
  //   if (templateData?.title?.toLowerCase().includes("ceo")) {
  //     dispatch(setTemplateContent(JSON.parse(templateData.body)));
  //     dispatch(setType("ceo"));
  //   }
  //   if (templateData?.title?.toLowerCase().includes("management")) {
  //     dispatch(setTemplateContent(JSON.parse(templateData.body)));
  //     dispatch(setType("management"));
  //   }
  //   if (templateData?.title?.toLowerCase().includes("credit")) {
  //     dispatch(setTemplateContent(JSON.parse(templateData.body)));
  //     dispatch(setType("credit"));
  //   }
  //   if (templateData?.title?.toLowerCase().includes("renumeration")) {
  //     dispatch(setTemplateContent(JSON.parse(templateData.body)));
  //     dispatch(setType("renumeration"));
  //   }
  //   if (templateData?.title?.toLowerCase().includes("finance")) {
  //     dispatch(setTemplateContent(JSON.parse(templateData.body)));
  //     dispatch(setType("finance"));
  //   }
  //   if (templateData?.title?.toLowerCase().includes("risk")) {
  //     dispatch(setTemplateContent(JSON.parse(templateData.body)));
  //     dispatch(setType("risk"));
  //   }
  // }, [templateData, dispatch]);

  useEffect(() => {
    if (templateData) {
      const matchedTemplate = templateIDs.find(
        (t) => t.id === templateData?.templateId,
      );
      if (matchedTemplate) {
        dispatch(setTemplateContent(JSON.parse(templateData?.body)));
        dispatch(setType(matchedTemplate?.title));
      }
    }
  }, [templateData, dispatch]);

  useEffect(() => {
    if (templateContent) {
      setReportToEdit(templateContent);
    }
  }, [templateContent]);

  const handleModal = () => {
    setIsOpen(!isOpen);
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
  };

  const handleModal6 = () => {
    setIsOpen6(!isOpen6);
  };

  const handleModal7 = () => {
    setIsOpen7(!isOpen7);
  };

  const handleModal8 = () => {
    setIsOpen8(!isOpen8);
  };

  const handleUpdateReport = async () => {
    const data = [
      {
        op: "replace",
        path: "Description",
        value: reportTitle,
      },
      {
        op: "replace",
        path: "Body",
        value: JSON.stringify(reportToEdit),
      },
      {
        op: "replace",
        path: "Status",
        value: 1,
      },
    ];
    await updateReport({
      token,
      body: data,
      id: template,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Report updated successfully",
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
          description: error.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: templateData?.title,
  });

  return (
    <>
      <Layout showSidebar={false}>
        {reportsLoading || commentsLoading ? (
          <Loader />
        ) : (
          <Box p="6" overflowY="auto" bg="bg.100">
            <HStack justify="space-between" mb={"6"}>
              <HStack>
                <IconButton
                  icon={<Image src="/images/undo.svg" alt="back" />}
                  bg="white"
                  onClick={() => {
                    dispatch(setTemplateContent(null));
                    dispatch(setType(""));
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
                  {templateData?.title}
                </Text>
              </HStack>

              <ActionBtns
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                handleModal={handleModal}
                handleModal2={handleModal2}
                handleModal3={handleModal3}
                handleModal4={handleModal4}
                handleModal5={handleModal5}
                handleModal6={handleModal6}
                handleModal7={handleModal7}
                handleModal8={handleModal8}
                template={template}
                role={role}
                handleUpdateReport={handleUpdateReport}
                updateReportLoading={updateReportLoading}
                templateData={templateData}
                handlePrint={handlePrint}
              />
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
                <ReportDescription
                  templateData={templateData}
                  setReportTitle={setReportTitle}
                  reportTitle={reportTitle}
                  handleUpdateReport={handleUpdateReport}
                  updateReportLoading={updateReportLoading}
                />
              </GridItem>

              <GridItem colSpan={3}>
                <Box ref={componentRef}>
                  {type === "ceo" && (
                    <CeoReport
                      isEdit={isEdit}
                      reportToEdit={reportToEdit}
                      setReportToEdit={setReportToEdit}
                    />
                  )}

                  {type === "management" && (
                    <ManagementReport
                      isEdit={isEdit}
                      reportToEdit={reportToEdit}
                      setReportToEdit={setReportToEdit}
                    />
                  )}

                  {type === "credit" && (
                    <Credit
                      isEdit={isEdit}
                      reportToEdit={reportToEdit}
                      setReportToEdit={setReportToEdit}
                    />
                  )}

                  {type === "renumeration" && (
                    <Renumeration
                      isEdit={isEdit}
                      reportToEdit={reportToEdit}
                      setReportToEdit={setReportToEdit}
                    />
                  )}
                  {type === "risk" && (
                    <Renumeration
                      isEdit={isEdit}
                      reportToEdit={reportToEdit}
                      setReportToEdit={setReportToEdit}
                    />
                  )}
                  {type === "finance" && (
                    <Renumeration
                      isEdit={isEdit}
                      reportToEdit={reportToEdit}
                      setReportToEdit={setReportToEdit}
                    />
                  )}
                </Box>
              </GridItem>

              <GridItem colSpan={1} position="sticky" right="0">
                <Comments id={templateData?.id} comments={commentsData} />
              </GridItem>
            </Grid>
          </Box>
        )}

        <TemplateModals
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleModal={handleModal}
          isOpen2={isOpen2}
          setIsOpen2={setIsOpen2}
          handleModal2={handleModal2}
          isOpen3={isOpen3}
          setIsOpen3={setIsOpen3}
          handleModal3={handleModal3}
          isOpen4={isOpen4}
          setIsOpen4={setIsOpen4}
          handleModal4={handleModal4}
          isOpen5={isOpen5}
          setIsOpen5={setIsOpen5}
          handleModal5={handleModal5}
          isOpen6={isOpen6}
          setIsOpen6={setIsOpen6}
          handleModal6={handleModal6}
          isOpen7={isOpen7}
          setIsOpen7={setIsOpen7}
          handleModal7={handleModal7}
          isOpen8={isOpen8}
          setIsOpen8={setIsOpen8}
          handleModal8={handleModal8}
          templateData={templateData}
        />
      </Layout>
    </>
  );
};

export default Editor;
