import {
  Text,
  Grid,
  GridItem,
  Box,
  IconButton,
  HStack,
  Image,
} from "@chakra-ui/react";
import CeoReport from "@/components/templates/ceo-report";
import ManagementReport from "@/components/templates/management-report";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { useGetTemplateByIdQuery } from "@/redux/services/templates.service";
import Loader from "@/components/ui/Loader";
import Renumeration from "@/components/templates/renumeration";
import Credit from "@/components/templates/credit";
import NDA from "@/components/templates/nda";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

const Editor = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [reportToEdit, setReportToEdit] = useState<any>(null);
  const [type, setType] = useState<any>(null);
  const { template } = router.query;
  const { token } = useAppSelector((state) => state.app.auth);

  const { data, isLoading } = useGetTemplateByIdQuery({
    token: token,
    id: template,
  });

  const templateData = data?.data;

  useEffect(() => {
    if (templateData) {
      setReportToEdit(JSON.parse(templateData?.body));
      setType(templateData?.type);
    }
  }, [templateData, dispatch]);

  return (
    <>
      <DashboardLayout showSidebar={false}>
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

                  {type === 7 && (
                    <NDA
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
      </DashboardLayout>
    </>
  );
};

export default Editor;
