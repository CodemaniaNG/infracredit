import {
  Text,
  VStack,
  HStack,
  IconButton,
  Image,
  Input as ChakraInput,
  useToast,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useCreateResourceMutation } from "@/redux/services/document.service";
import { useAppSelector } from "@/redux/store";

const UploadDocument = ({ setIsOpen }: any) => {
  const [file, setFile] = useState<any>(null);
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);

  const [createResource, { isLoading: createResourceLoading }] =
    useCreateResourceMutation();

  const handleCreateResource = async () => {
    const formData = new FormData();
    formData.append("file", file);

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
        <Button
          text="Upload"
          py={4}
          type="button"
          onClick={handleCreateResource}
          isLoading={createResourceLoading}
          isDisabled={createResourceLoading}
        />
      )}
    </VStack>
  );
};

export default UploadDocument;
