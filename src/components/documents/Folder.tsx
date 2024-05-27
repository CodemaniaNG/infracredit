import { Card, CardBody, Image, VStack, Text, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

type TaskCardProps = {
  title: string;
  desc: string;
  id: string;
};

const Folder = ({ title, id }: TaskCardProps) => {
  const router = useRouter();
  return (
    <>
      <Card
        variant="outline"
        maxW="sm"
        bg="#fff"
        borderRadius={16}
        cursor={"pointer"}
        onClick={() => router.push(`/dashboard/documents/folder/${id}`)}
      >
        <CardBody px={0}>
          <Image src="/images/folder.svg" alt="Document" />
          <Divider borderColor="border.200" />
          <VStack align="flex-start" spacing={4} p={2}>
            <VStack align="flex-start">
              <Text
                fontSize={{
                  base: "16px",
                  md: "18px",
                  lg: "18px",
                }}
                fontWeight="600"
                color="maintText.100"
                fontFamily={"body"}
              >
                {title}
              </Text>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default Folder;
