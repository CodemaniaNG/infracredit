import {
  Box,
  Text,
  VStack,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import DashboardTable from "@/components/dashboard/DashboardTable";
import DocumentCard from "@/components/documents/DocumentCard";
import Button from "@/components/ui/Button";

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
];

const data = [
  {
    sn: "1",
    title: "Annual report",
    editedBy: "Olusanya Ezekiel",
    editedOn: "12th May, 2021",
    currentUser: "Wale Peter",
  },
  {
    sn: "1",
    title: "Annual report",
    editedBy: "Olusanya Ezekiel",
    editedOn: "12th May, 2021",
    currentUser: "Wale Peter",
  },
  {
    sn: "1",
    title: "Annual report",
    editedBy: "Olusanya Ezekiel",
    editedOn: "12th May, 2021",
    currentUser: "Wale Peter",
  },
  {
    sn: "1",
    title: "Annual report",
    editedBy: "Olusanya Ezekiel",
    editedOn: "12th May, 2021",
    currentUser: "Wale Peter",
  },
  {
    sn: "1",
    title: "Annual report",
    editedBy: "Olusanya Ezekiel",
    editedOn: "12th May, 2021",
    currentUser: "Wale Peter",
  },
];

const tabs = [
  {
    title: "All Documents",
  },
  {
    title: "Reports",
  },
  {
    title: "Microsoft Word",
  },
  {
    title: "PDFs",
  },
];

const Documents = () => {
  return (
    <>
      <HStack justify="space-between" mb={"3"}>
        <VStack align="flex-start">
          <Text
            fontSize={{
              base: "20px",
              md: "24px",
              lg: "32px",
            }}
            fontWeight="600"
            color="maintText.200"
            fontFamily={"body"}
          >
            Documents
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight="500"
            color="subText.400"
            mt={-2}
            fontFamily={"body"}
          >
            All of your documents are managed here
          </Text>
        </VStack>

        <HStack justify="flex-end">
          <Button
            text="Upload New Document"
            bg="#F0FFFF"
            border="#8CDBB4"
            color="greens.100"
            icon="/images/add.svg"
            iconPosition="left"
          />
        </HStack>
      </HStack>

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
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
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
            All Documents
          </Text>
          <Tabs>
            <TabList>
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  _selected={{
                    color: "greens.100",
                    bg: "white",
                    fontWeight: "700",
                    fontSize: "16px",
                    borderBottom: "2px solid #287750",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    borderBottomEndRadius: "0px",
                    borderBottomStartRadius: "0px",
                  }}
                  px={4}
                  py={2}
                  color="subText.400"
                  fontFamily={"body"}
                  fontWeight="500"
                  fontSize={"16px"}
                  mr={3}
                >
                  {tab.title}
                </Tab>
              ))}
            </TabList>

            <TabPanels px={0}>
              <TabPanel px={0}>
                <DashboardTable data={data} />
              </TabPanel>
              <TabPanel px={0}>
                <DashboardTable data={data} />
              </TabPanel>
              <TabPanel px={0}>
                <DashboardTable data={data} />
              </TabPanel>
              <TabPanel px={0}>
                <DashboardTable data={data} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      </>
    </>
  );
};

export default Documents;
