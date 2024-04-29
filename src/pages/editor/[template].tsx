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
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import PageContent from "@/components/editor/PageContent";
import ReportDescription from "@/components/editor/ReportDescription";
import Comments from "@/components/editor/Comments";
import Tools from "@/components/editor/Tools";
import Pages from "@/components/editor/Pages";
import CeoReport from "@/components/templates/ceo-report";
import ManagementReport from "@/components/templates/management-report";
import { useState, useEffect } from "react";
import Renumeration from "@/components/templates/renumeration";
import Modal from "@/components/ui/Modal";
import ReUpload from "@/components/modals/ReUpload";
import ShareContract from "@/components/modals/ShareContract";
import ShareReport from "@/components/modals/ShareReport";
import ApproveReport from "@/components/modals/ApproveReport";
import DisapproveReport from "@/components/modals/DisapproveReport";
import UploadSignedPDF from "@/components/modals/UploadSignedPDF";
import ReturnReport from "@/components/modals/ReturnReport";
import SubmitReport from "@/components/modals/SubmitReport";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import Loader from "@/components/ui/Loader";
import { useGetReportByIdQuery } from "@/redux/services/reports.service";
import {
  setCeoReport,
  setManagementReport,
} from "@/redux/slices/templateSlice";

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

  const { ceoReport, managementReport } = useAppSelector(
    (state) => state.app.template,
  );

  const { token, userInfo } = useAppSelector((state) => state.app.auth);
  const role = userInfo?.role.name;

  const { data, isLoading: reportsLoading } = useGetReportByIdQuery({
    token: token,
    id: template,
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
        {reportsLoading ? (
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
                    onClick={handleModal8}
                  />
                )}
                <Button
                  text={isEdit ? "Save" : "Edit Report"}
                  onClick={() => setIsEdit(!isEdit)}
                />
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
                      onClick={handleModal8}
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
                  {templateData?.title?.toLowerCase().includes("ceo") && (
                    <CeoReport isEdit={isEdit} ceoReport={ceoReport} />
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
                <ReportDescription />
                <Comments />
              </GridItem>
            </Grid>
          </Box>
        )}
      </Layout>

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<ReUpload setIsOpen={setIsOpen} />}
      />

      <Modal
        isOpen={isOpen2}
        onClose={handleModal2}
        body={<ShareContract setIsOpen={setIsOpen2} />}
      />
      <Modal
        isOpen={isOpen8}
        onClose={handleModal8}
        body={<ShareReport setIsOpen={setIsOpen8} />}
      />

      <Modal
        isOpen={isOpen3}
        onClose={handleModal3}
        body={<ApproveReport setIsOpen={setIsOpen3} />}
      />

      <Modal
        isOpen={isOpen4}
        onClose={handleModal4}
        body={<DisapproveReport setIsOpen={setIsOpen4} />}
      />

      <Modal
        isOpen={isOpen5}
        onClose={handleModal5}
        body={<UploadSignedPDF setIsOpen={setIsOpen5} />}
      />

      <Modal
        isOpen={isOpen6}
        onClose={handleModal6}
        body={<ReturnReport setIsOpen={setIsOpen6} />}
      />

      <Modal
        isOpen={isOpen7}
        onClose={handleModal7}
        body={<SubmitReport setIsOpen={setIsOpen7} />}
      />
    </>
  );
};

export default Editor;
