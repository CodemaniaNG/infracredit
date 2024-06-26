import React from "react";
import { Card, CardBody, Image, VStack, Text, Divider } from "@chakra-ui/react";

type TaskCardProps = {
  title: string;
  desc: string;
  id: string;
};

const DeletedCard = ({ title, desc, id }: TaskCardProps) => {
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
          <Image src="/images/template.svg" alt="Document" w="full" />
          <Divider borderColor="border.200" />
          <VStack align="flex-start" spacing={4} py={2}>
            <VStack align="flex-start">
              <Text
                fontSize="14"
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

          <VStack align="flex-end">
            <Text
              fontSize={"14px"}
              fontWeight="600"
              color="secondary"
              fontFamily={"body"}
              cursor="pointer"
            >
              Edit
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default DeletedCard;
