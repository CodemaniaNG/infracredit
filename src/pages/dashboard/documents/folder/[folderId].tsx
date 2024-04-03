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

const SingleFolder = () => {
  const router = useRouter();
  const tasks = [
    {
      title: "Annual report",
      desc: "This is a commment, This is a commment, This is a commment",
    },
    {
      title: "Annual report",
      desc: "This is a commment, This is a commment, This is a commment",
    },
    {
      title: "Annual report",
      desc: "This is a commment, This is a commment, This is a commment",
    },
    {
      title: "Annual report",
      desc: "This is a commment, This is a commment, This is a commment",
    },
    {
      title: "Annual report",
      desc: "This is a commment, This is a commment, This is a commment",
    },
  ];
  return (
    <Layout showSidebar={false}>
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
            Annual Report - FY2023
          </Text>
        </HStack>

        <HStack justify="flex-end"></HStack>
      </HStack>

      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={2}
        mb={5}
      >
        {tasks.map((task, index) => (
          <GridItem colSpan={1} key={index}>
            <DocumentCard title={task.title} desc={task.desc} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
};

export default SingleFolder;
