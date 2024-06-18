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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ReportDescription from "@/components/editor/ReportDescription";
import Comments from "@/components/editor/Comments";
import CeoReport from "@/components/templates/ceo-report";
import ManagementReport from "@/components/templates/management-report";
import { useState, useEffect, useRef, memo } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import Loader from "@/components/ui/Loader";
import {
  useGetReportByIdQuery,
  useGetCommentsQuery,
  useUpdateReportMutation,
} from "@/redux/services/reports.service";
import ActionBtns from "@/components/editor/ActionBtns";
import TemplateModals from "@/components/editor/TemplateModals";
import Renumeration from "@/components/templates/renumeration";
import Credit from "@/components/templates/credit";
import { useReactToPrint } from "react-to-print";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

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
  const [type, setType] = useState<any>(null);

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

  useEffect(() => {
    if (templateData) {
      setReportToEdit(JSON.parse(templateData?.body));
      setType(templateData?.type);
    }
  }, [templateData, dispatch]);

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
      <DashboardLayout showSidebar={false}>
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
              <GridItem colSpan={1}>
                <ReportDescription
                  templateData={templateData}
                  setReportTitle={setReportTitle}
                  reportTitle={reportTitle}
                  handleUpdateReport={handleUpdateReport}
                  updateReportLoading={updateReportLoading}
                />
              </GridItem>

              <GridItem colSpan={3}>
                {reportToEdit && type ? (
                  <Box ref={componentRef}>
                    {type === 1 && (
                      <CeoReport
                        isEdit={isEdit}
                        reportToEdit={reportToEdit}
                        setReportToEdit={setReportToEdit}
                      />
                    )}

                    {type === 2 && (
                      <ManagementReport
                        isEdit={isEdit}
                        reportToEdit={reportToEdit}
                        setReportToEdit={setReportToEdit}
                      />
                    )}

                    {type === 3 && (
                      <Renumeration
                        isEdit={isEdit}
                        reportToEdit={reportToEdit}
                        setReportToEdit={setReportToEdit}
                      />
                    )}

                    {type === 4 && (
                      <Renumeration
                        isEdit={isEdit}
                        reportToEdit={reportToEdit}
                        setReportToEdit={setReportToEdit}
                      />
                    )}
                    {type === 5 && (
                      <Renumeration
                        isEdit={isEdit}
                        reportToEdit={reportToEdit}
                        setReportToEdit={setReportToEdit}
                      />
                    )}

                    {type === 6 && (
                      <Credit
                        isEdit={isEdit}
                        reportToEdit={reportToEdit}
                        setReportToEdit={setReportToEdit}
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
              </GridItem>

              <GridItem colSpan={1}>
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
      </DashboardLayout>
    </>
  );
};

export default memo(Editor);
