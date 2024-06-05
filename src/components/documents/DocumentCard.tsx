import React from "react";
import {
  Card,
  CardBody,
  Image,
  VStack,
  Text,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { BsThreeDotsVertical, BsFillCloudDownloadFill } from "react-icons/bs";

type TaskCardProps = {
  title: string;
  desc: string;
  id: string;
  meta?: string;
};

const DocumentCard = ({ title, desc, id, meta }: TaskCardProps) => {
  const handleDownload = async () => {
    if (!meta) {
      console.error("Metadata not available");
      return;
    }

    let parsedMeta;
    try {
      parsedMeta = JSON.parse(meta);
    } catch (error) {
      console.error("Failed to parse metadata", error);
      return;
    }

    const downloadUrl = parsedMeta["@microsoft.graph.downloadUrl"];
    if (!downloadUrl) {
      console.error("Download URL not available in metadata");
      return;
    }

    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = parsedMeta["name"] || "downloaded_file";
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download the file", error);
    }
  };

  return (
    <>
      <Card
        variant="outline"
        maxW="sm"
        bg="#fff"
        borderRadius={16}
        position="relative"
        overflow="hidden"
      >
        <CardBody p={2}>
          <Image src="/images/template.svg" alt="Document" />
          <Box position="absolute" top={2} right={1} zIndex={1}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsThreeDotsVertical color="white" size={24} />}
                variant="ghost"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              />
              <MenuList>
                <MenuItem
                  icon={
                    <BsFillCloudDownloadFill size={16} color="maintText.100" />
                  }
                  color="maintText.100"
                  fontFamily={"body"}
                  fontSize={14}
                  onClick={handleDownload}
                >
                  Download
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Divider borderColor="border.200" />
          <VStack align="flex-start" spacing={4} py={2}>
            <VStack align="flex-start">
              <Text
                fontSize={{
                  base: "16px",
                  md: "16px",
                  lg: "16px",
                }}
                fontWeight="600"
                color="maintText.100"
                fontFamily={"body"}
              >
                {title}
              </Text>
              <Text
                fontSize={"10px"}
                fontWeight="500"
                color="subText.300"
                fontFamily={"body"}
                mt={-2}
              >
                {desc}
              </Text>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DocumentCard;
