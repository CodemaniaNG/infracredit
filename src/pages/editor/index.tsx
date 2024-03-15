import {
  Text,
  Grid,
  GridItem,
  Box,
  IconButton,
  HStack,
  Image,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import PageContent from "@/components/editor/PageContent";
import ReportDescription from "@/components/editor/ReportDescription";
import Comments from "@/components/editor/Comments";
import Tools from "@/components/editor/Tools";
import Pages from "@/components/editor/Pages";
import CeoReport from "@/components/templates/ceo-report";
import { ceoReportData } from "@/utils/data";

const Editor = () => {
  const router = useRouter();
  return (
    <>
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

          <HStack justify="flex-end">
            <Button
              text="Cancel Edit"
              bg="transparent"
              border="#FFCB8A"
              color="#FF8F00"
              borderWidth="1px"
              px={6}
            />
            <Button
              text="Save"
              bg="#F0FFFF"
              border="#8CDBB4"
              color="greens.100"
              borderWidth="1px"
              px={6}
            />
            <Button text="Submit" px={6} />
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
            <Tools />
            <Pages />
          </GridItem>

          <GridItem colSpan={3}>
            <Box>
              <CeoReport data={ceoReportData} />
            </Box>
          </GridItem>

          <GridItem colSpan={1} position="sticky" right="0">
            <PageContent />
            <ReportDescription />
            <Comments />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Editor;
