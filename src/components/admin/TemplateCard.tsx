import { Card, CardBody, Image, VStack, Text, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

const TemplateCard = ({ item }: any) => {
  const router = useRouter();
  return (
    <>
      <Card
        variant="outline"
        maxW="sm"
        bg="#fff"
        borderRadius={16}
        onClick={() => {
          router.push(`/template/${item?.id}`);
        }}
        cursor="pointer"
      >
        <CardBody p={2}>
          <Image src="/images/template.svg" alt="Document" />
          <Divider borderColor="border.200" />
          <VStack align="flex-start" spacing={4} py={2}>
            <VStack align="flex-start">
              <Text
                fontSize={"16px"}
                fontWeight="600"
                color="maintText.100"
                fontFamily={"body"}
              >
                {item?.title}
              </Text>
              {/* <Text
                fontSize={"10px"}
                fontWeight="500"
                color="subText.300"
                fontFamily={"body"}
                mt={-2}
              >
                This is the report description for the template, what they are
                supposed to work on
              </Text> */}
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default TemplateCard;
