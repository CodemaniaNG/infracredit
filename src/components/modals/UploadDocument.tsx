import {
  Text,
  VStack,
  HStack,
  IconButton,
  Image,
  Input as ChakraInput,
  useToast,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import {
  useCreateResourceMutation,
  useGetFoldersQuery,
} from "@/redux/services/document.service";
import { useAppSelector } from "@/redux/store";
import Select from "../ui/Select2";
import Button from "@/components/ui/Button";
import { Formik, Form } from "formik";
import { createResourceSchema } from "@/schemas/admin.schema";

const UploadDocument = ({ setIsOpen }: any) => {
  const [file, setFile] = useState<any>(null);
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [createResource, { isLoading: createResourceLoading }] =
    useCreateResourceMutation();

  const { data: folders, isLoading } = useGetFoldersQuery(token);

  const allFolders = useMemo(() => {
    return folders?.data.map((folder: any) => ({
      value: folder.id,
      label: folder.name,
    }));
  }, [folders]);

  const handleCreateResource = async (values: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("FolderId", values.FolderId);

    await createResource({
      token,
      body: formData,
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Document uploaded successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        toast({
          title: "An error occurred.",
          description: error.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <VStack align="flex-start" spacing={4} mt={10} mb={5}>
      <Text
        color={"greens.100"}
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"body"}
      >
        Upload new Document
      </Text>

      {!file && (
        <>
          <Text
            fontSize="16px"
            fontWeight={500}
            color="subText.200"
            fontFamily={"body"}
          >
            Upload Document
          </Text>
          <VStack
            align="center"
            spacing={4}
            borderWidth={1}
            borderColor="border.200"
            borderRadius="10px"
            borderStyle="dashed"
            w="100%"
            h="180px"
            justifyContent="center"
            cursor="pointer"
            position="relative"
          >
            <ChakraInput
              type="file"
              w="100%"
              h="100%"
              position="absolute"
              opacity="0"
              zIndex="1"
              onChange={(e: any) => setFile(e.target.files[0])}
              accept=".doc,.docx,.pdf"
            />

            <VStack>
              <Image src="/images/upload.svg" alt="empty" w="35px" h="auto" />
              <VStack>
                <Text
                  fontSize="13px"
                  fontWeight={500}
                  color="subText.400"
                  fontFamily={"body"}
                >
                  Click to{" "}
                  <Text as="span" color="primary2">
                    Upload your Documents
                  </Text>
                </Text>

                <Text
                  fontSize="13px"
                  fontWeight={500}
                  color="subText.600"
                  fontFamily={"body"}
                >
                  Max Size:{" "}
                  <Text as="span" fontWeight={700} color="subText.200">
                    1MB,
                  </Text>{" "}
                  Format:{" "}
                  <Text as="span" fontWeight={700} color="subText.200">
                    .doc, .docx, .pdf
                  </Text>
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </>
      )}

      {file && (
        <HStack w="100%" justify="space-between" bg="bg.100" px={4} py={2}>
          <Text
            fontSize="14px"
            fontWeight={500}
            color="subText.500"
            fontFamily={"body"}
          >
            {file.name}
          </Text>
          <IconButton
            icon={<Image src="/images/trash.svg" alt="close" />}
            bg="transparent"
            onClick={() => setFile(null)}
            aria-label="close"
            variant="ghost"
            _hover={{ bg: "transparent" }}
          />
        </HStack>
      )}

      {file && (
        <Formik
          initialValues={{
            FolderId: "",
          }}
          onSubmit={(values, actions) => {
            handleCreateResource(values);
          }}
          validationSchema={createResourceSchema}
        >
          {(props) => (
            <Form style={{ width: "100%" }}>
              <VStack>
                <Stack direction={"row"} align="center" w={"100%"} spacing={1}>
                  <Select
                    label="Select Folder"
                    name="FolderId"
                    options={allFolders}
                    placeholder="Select Folder"
                  />
                  {isLoading && <Spinner size="sm" color="green.500" mt={5} />}
                </Stack>

                <VStack align="stretch" w={"100%"} mt={4}>
                  <Button
                    text="Upload"
                    px={4}
                    py={4}
                    type="submit"
                    isLoading={createResourceLoading}
                    isDisabled={createResourceLoading}
                  />
                </VStack>
              </VStack>
            </Form>
          )}
        </Formik>
      )}
    </VStack>
  );
};

export default UploadDocument;
