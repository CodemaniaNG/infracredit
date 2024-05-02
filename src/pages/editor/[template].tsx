import {
  Text,
  Grid,
  GridItem,
  Box,
  IconButton,
  HStack,
  Image,
} from "@chakra-ui/react";
import Layout from "@/components/dashboard/Layout";
import { useRouter } from "next/router";
import PageContent from "@/components/editor/PageContent";
import ReportDescription from "@/components/editor/ReportDescription";
import Comments from "@/components/editor/Comments";
import Tools from "@/components/editor/Tools";
import Pages from "@/components/editor/Pages";
import CeoReport from "@/components/templates/ceo-report";
import ManagementReport from "@/components/templates/management-report";
import { useState, useEffect, use } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import Loader from "@/components/ui/Loader";
import { useGetReportByIdQuery } from "@/redux/services/reports.service";
import { useGetCommentsQuery } from "@/redux/services/reports.service";
import {
  setCeoReport,
  setManagementReport,
} from "@/redux/slices/templateSlice";
import ActionBtns from "@/components/editor/ActionBtns";
import TemplateModals from "@/components/editor/TemplateModals";

const Editor = () => {
  const dispatch = useAppDispatch();
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

  const { ceoReport, managementReport } = useAppSelector(
    (state) => state.app.template,
  );

  const { token, userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  const { data, isLoading: reportsLoading } = useGetReportByIdQuery({
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
    if (templateData?.title?.toLowerCase().includes("ceo")) {
      dispatch(setCeoReport(JSON.parse(templateData.body)));
    }
  }, [templateData, dispatch]);

  useEffect(() => {
    if (templateData?.title?.toLowerCase().includes("management")) {
      dispatch(setManagementReport(JSON.parse(templateData.body)));
    }
  }, [templateData, dispatch]);

  useEffect(() => {
    if (ceoReport) {
      setReportToEdit(ceoReport);
    }
  }, [ceoReport]);

  useEffect(() => {
    if (managementReport) {
      setReportToEdit(managementReport);
    }
  }, [managementReport]);

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
                    dispatch(setCeoReport(null));
                    dispatch(setManagementReport(null));
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
                {/* <Tools /> */}
                <Pages />
              </GridItem>

              <GridItem colSpan={3}>
                <Box>
                  {templateData?.title?.toLowerCase().includes("ceo") && (
                    <CeoReport
                      isEdit={isEdit}
                      reportToEdit={reportToEdit}
                      setReportToEdit={setReportToEdit}
                    />
                  )}

                  {templateData?.title
                    ?.toLowerCase()
                    .includes("management") && (
                    <ManagementReport
                      isEdit={isEdit}
                      managementReport={managementReport}
                    />
                  )}
                  {/* {template === "renumeration" && (
                  <Renumeration isEdit={isEdit} />
                )} */}
                </Box>
              </GridItem>

              <GridItem colSpan={1} position="sticky" right="0">
                {/* <PageContent /> */}
                <ReportDescription templateData={templateData} />
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
        />
      </Layout>
    </>
  );
};

export default Editor;
