import {
  Text,
  IconButton,
  HStack,
  Image,
  VStack,
  Input as ChakraInput,
} from "@chakra-ui/react";
import Button from "../ui/Button";
import { useState } from "react";

const UploadSignedPDF = ({ setIsOpen }: any) => {
  const [file, setFile] = useState<any>(null);
  return (
    <VStack align="flex-start" spacing={4} mt={10} mb={5}>
      <Text
        color={"greens.100"}
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"body"}
      >
        Upload Signed PDF
      </Text>

      {!file && (
        <>
          <Text
            fontSize="16px"
            fontWeight={500}
            color="subText.200"
            fontFamily={"body"}
          >
            Upload Sgnature
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
              accept=".pdf"
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
                    Upload your signed PDF
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
                    .pdf
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

      {file && <Button text="Upload" py={4} type="submit" />}
    </VStack>
  );
};

export default UploadSignedPDF;
