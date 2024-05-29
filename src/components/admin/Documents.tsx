import { Text, Grid, GridItem } from "@chakra-ui/react";
import DocumentCard from "@/components/documents/DocumentCard";
import Button from "@/components/ui/Button";
import Folder from "../documents/Folder";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import UploadDocument from "../modals/UploadDocument";
import CreateFolder from "../modals/CreateFolder";
import DashboardHeader from "../dashboard/DashboardHeader";
import { useAppSelector } from "@/redux/store";
import {
  useGetResourcesQuery,
  useGetFoldersQuery,
} from "@/redux/services/document.service";
import Loader from "../ui/Loader";

const Documents = () => {
  const { token } = useAppSelector((state) => state.app.auth);

  const { data: resources, isLoading: resourcesLoading } =
    useGetResourcesQuery(token);
  const allDocuments = resources?.data;

  const { data: folders, isLoading: foldersLoading } =
    useGetFoldersQuery(token);
  const allFolders = folders?.data;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleModal2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <>
      {resourcesLoading || foldersLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader
            title="Documents"
            description="All of your documents are managed here"
          >
            <Button
              text="Upload New Document"
              bg="#F0FFFF"
              border="#8CDBB4"
              color="greens.100"
              px={5}
              onClick={handleModal}
            />
            <Button text="Create New Folder" onClick={handleModal2} />
          </DashboardHeader>

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
                <Text
                  fontSize={16}
                  color="subText.400"
                  fontFamily={"body"}
                  mb={3}
                >
                  No documents found
                </Text>
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
                  {allDocuments?.map((task: any, index: any) => (
                    <GridItem colSpan={1} key={index}>
                      <DocumentCard
                        title={task.resource}
                        desc={task.description}
                        id={index.toString()}
                        meta={task.meta}
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
                <Text
                  fontSize={16}
                  color="subText.400"
                  fontFamily={"body"}
                  mb={3}
                >
                  No folders found
                </Text>
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

      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<UploadDocument setIsOpen={setIsOpen} />}
      />

      <Modal
        isOpen={isOpen2}
        onClose={handleModal2}
        body={<CreateFolder setIsOpen={setIsOpen2} />}
      />
    </>
  );
};

export default Documents;
