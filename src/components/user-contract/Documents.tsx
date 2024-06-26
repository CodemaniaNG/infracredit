import { Text, Grid, GridItem } from "@chakra-ui/react";
import DocumentCard from "@/components/documents/DocumentCard";
import Folder from "../documents/Folder";
import DashboardHeader from "../dashboard/DashboardHeader";
import { useAppSelector } from "@/redux/store";
import {
  useGetResourcesQuery,
  useGetFoldersQuery,
} from "@/redux/services/document.service";
import Loader from "../ui/Loader";
import Empty2 from "../admin/Empty2";

const Documents = () => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data: resources, isLoading: resourcesLoading } =
    useGetResourcesQuery(token);
  const allDocuments = resources?.data;

  const { data: folders, isLoading: foldersLoading } =
    useGetFoldersQuery(token);
  const allFolders = folders?.data;

  return (
    <>
      {resourcesLoading || foldersLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader
            title="Documents"
            description="All of your documents are managed here"
          />

          <>
            <>
              <Text
                fontSize={{
                  base: "16px",
                  md: "18px",
                  lg: "20px",
                }}
                fontWeight="600"
                color="subText.400"
                fontFamily={"body"}
                mb={3}
              >
                Recent Documents
              </Text>
              {allDocuments?.length === 0 && (
                <Empty2
                  title="No Documents"
                  desc="All your documents will appear here"
                />
              )}

              {allDocuments?.length > 0 && (
                <Grid
                  templateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                  }}
                  gap={2}
                  mb={5}
                >
                  {allDocuments?.map((task: any, index: any) => (
                    <GridItem colSpan={1} key={index}>
                      <DocumentCard
                        title={task.resource}
                        desc={task.description}
                        id={index.toString()}
                      />
                    </GridItem>
                  ))}
                </Grid>
              )}
            </>

            <>
              <Text
                fontSize={{
                  base: "16px",
                  md: "18px",
                  lg: "20px",
                }}
                fontWeight="600"
                color="subText.400"
                fontFamily={"body"}
                mb={3}
              >
                Folders
              </Text>
              {allFolders?.length === 0 && (
                <Empty2
                  title="No Folders"
                  desc="All your folders will appear here"
                />
              )}

              {allFolders?.length > 0 && (
                <Grid
                  templateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                  }}
                  gap={2}
                  mb={5}
                >
                  {allFolders?.map((task: any, index: any) => (
                    <GridItem colSpan={1} key={index}>
                      <Folder
                        title={task.name}
                        desc={task.description}
                        id={task.id}
                      />
                    </GridItem>
                  ))}
                </Grid>
              )}
            </>
          </>
        </>
      )}
    </>
  );
};

export default Documents;
