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
import Renumeration from "@/components/templates/renumeration";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { useGetTemplateByIdQuery } from "@/redux/services/templates.service";
import Loader from "@/components/ui/Loader";
import {
  setCeoReport,
  setManagementReport,
} from "@/redux/slices/templateSlice";

const Editor = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const { template } = router.query;
  const { token } = useAppSelector((state) => state.app.auth);
  const { ceoReport, managementReport } = useAppSelector(
    (state) => state.app.template,
  );

  const { data, isLoading } = useGetTemplateByIdQuery({
    token: token,
    id: template,
  });

  const templateData = data?.data;

  useEffect(() => {
    if (templateData?.title?.includes("Ceo")) {
      // dispatch(setCeoReport(templateData));
      dispatch(setCeoReport(JSON.parse(templateData.body)));
    }
  }, [templateData, dispatch]);

  useEffect(() => {
    if (templateData?.title?.includes("Management")) {
      // dispatch(setManagementReport(templateData));
      dispatch(setManagementReport(JSON.parse(templateData.body)));
    }
  }, [templateData, dispatch]);

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
                  {templateData?.title?.includes("Ceo") && (
                    <CeoReport isEdit={isEdit} ceoReport={ceoReport} />
                  )}

                  {templateData?.title?.includes("Management") && (
                    <ManagementReport
                      isEdit={isEdit}
                      managementReport={managementReport}
                    />
                  )}
                  {/* {template === "contract" && <CeoReport isEdit={isEdit} />}

                  {template === "renumeration" && (
                    <Renumeration isEdit={isEdit} />
                  )} */}
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
