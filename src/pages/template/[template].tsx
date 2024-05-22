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
import CeoReport from "@/components/templates/ceo-report";
import ManagementReport from "@/components/templates/management-report";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { useGetTemplateByIdQuery } from "@/redux/services/templates.service";
import Loader from "@/components/ui/Loader";
import { setTemplateContent, setType } from "@/redux/slices/templateSlice";
import Renumeration from "@/components/templates/renumeration";
import Credit from "@/components/templates/credit";
import { templateIDs } from "@/utils/constant";

const Editor = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [reportToEdit, setReportToEdit] = useState<any>(null);
  const { template } = router.query;
  const { token } = useAppSelector((state) => state.app.auth);
  const { templateContent, type } = useAppSelector(
    (state) => state.app.template,
  );

  const { data, isLoading } = useGetTemplateByIdQuery({
    token: token,
    id: template,
  });

  const templateData = data?.data;

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
      const matchedTemplate = templateIDs.find((t) => t.id === template);
      if (matchedTemplate) {
        dispatch(setTemplateContent(JSON.parse(templateData?.body)));
        dispatch(setType(matchedTemplate?.title));
      }
    }
  }, [templateData, dispatch, template]);

  useEffect(() => {
    if (templateContent) {
      setReportToEdit(templateContent);
    }
  }, [templateContent]);

  return (
    <>
      <Layout showSidebar={false}>
        {isLoading ? (
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
                {/*  */}
              </GridItem>

              <GridItem colSpan={3}>
                <Box>
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
                {/*  */}
              </GridItem>
            </Grid>
          </Box>
        )}
      </Layout>
    </>
  );
};

export default Editor;
