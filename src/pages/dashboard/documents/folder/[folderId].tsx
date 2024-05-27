import Layout from "@/components/dashboard/Layout";
import {
  Text,
  Grid,
  GridItem,
  IconButton,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DocumentCard from "@/components/documents/DocumentCard";
import { useAppSelector } from "@/redux/store";
import { useGetFolderByIdQuery } from "@/redux/services/document.service";
import Loader from "@/components/ui/Loader";
import Empty from "@/components/admin/Empty";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

const SingleFolder = () => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.app.auth);
  const folderId = router.query.folderId;

  const { data, isLoading } = useGetFolderByIdQuery({
    token,
    id: folderId as string,
  });
  const folder = data?.data;

  return (
    <DashboardLayout showSidebar={false}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                {folder?.name}
              </Text>
            </HStack>

            <HStack justify="flex-end"></HStack>
          </HStack>

          {folder?.documents === null && (
            <Empty
              title="No documents found"
              desc="You have not uploaded any documents in this folder"
              // buttonTitle="Upload New Document"
              // onClick={() => router.push("/dashboard/documents")}
            />
          )}

          {folder?.documents !== null && folder?.documents.length > 0 && (
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={2}
              mb={5}
            >
              {folder?.documents?.map((task: any, index: any) => (
                <GridItem colSpan={1} key={index}>
                  <DocumentCard
                    title={task.name}
                    desc={task.description}
                    id={index.toString()}
                  />
                </GridItem>
              ))}
            </Grid>
          )}
        </>
      )}
    </DashboardLayout>
  );
};

export default SingleFolder;
