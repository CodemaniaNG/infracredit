import Welcome from "@/components/dashboard/Welcome";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import { VStack, HStack, Avatar, Text, Grid, GridItem } from "@chakra-ui/react";
import { useAppSelector } from "@/redux/store";
import HomeCard from "@/components/dashboard/HomeCard";

const Home = () => {
  const { userInfo } = useAppSelector((state) => state.app.auth);
  return (
    <DashboardLayout showSidebar={false} bgColor="bg.300">
      <Welcome isHome />

      <VStack
        bg="bg.100"
        p={4}
        borderRadius={8}
        w="100%"
        borderWidth={1}
        borderColor="border.100"
        align="flex-start"
        mb={5}
      >
        <HStack align="center" spacing={4}>
          <Avatar
            size="xl"
            name={userInfo?.name}
            src={userInfo?.avatar}
            bg="primary"
            color="white"
          />

          <VStack align="flex-start" spacing={0}>
            <Text
              fontSize="24px"
              fontWeight={600}
              color="maintText.100"
              textTransform="capitalize"
            >
              {userInfo?.name}
            </Text>
            <Text fontSize="18px" fontWeight={600} color="greens.200">
              {userInfo?.role?.name}
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <Text fontSize="24px" fontWeight={600} color="maintText.200" mb="5">
        Systems
      </Text>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={2}
        mb={5}
      >
        <GridItem colSpan={1}>
          <HomeCard
            text="Report Management System"
            description="Centralized platform for generating, tracking and analyzing reports and data insights"
            image="/images/report.svg"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <HomeCard
            text="Report Management System"
            description="Centralized platform for generating, tracking and analyzing reports and data insights"
            image="/images/contract2.svg"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <HomeCard
            text="Report Management System"
            description="Centralized platform for generating, tracking and analyzing reports and data insights"
            image="/images/documents2.svg"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Home;
