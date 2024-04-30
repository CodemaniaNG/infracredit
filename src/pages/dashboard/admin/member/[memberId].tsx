import {
  Text,
  VStack,
  Grid,
  GridItem,
  Box,
  IconButton,
  HStack,
  Image,
  Avatar,
} from "@chakra-ui/react";
import ReportTable from "@/components/admin/ReportTable";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import MemberCard from "@/components/admin/MemberCard";
import Layout from "@/components/dashboard/Layout";

import { useAppSelector } from "@/redux/store";
import { useGetUserByIdQuery } from "@/redux/services/onboard.service";
import Loader from "@/components/ui/Loader";
import { formatDate2 } from "@/utils/functions";

const Member = () => {
  const router = useRouter();
  const { memberId } = router.query;

  const { token } = useAppSelector((state) => state.app.auth);

  const { data: user, isLoading: userLoading } = useGetUserByIdQuery({
    token: token,
    id: memberId as string,
  });
  const userDetail = user?.data;

  const data = [
    {
      sn: "1",
      report: "2023 Annual Financial Budget Report v1.0",
      Action: "Update",
      time: "01:57am",
      date: "23, May 2023",
    },
    {
      sn: "1",
      report: "2023 Annual Financial Budget Report v1.0",
      Action: "Update",
      time: "01:57am",
      date: "23, May 2023",
    },
    {
      sn: "1",
      report: "2023 Annual Financial Budget Report v1.0",
      Action: "Update",
      time: "01:57am",
      date: "23, May 2023",
    },
    {
      sn: "1",
      report: "2023 Annual Financial Budget Report v1.0",
      Action: "Update",
      time: "01:57am",
      date: "23, May 2023",
    },
    {
      sn: "1",
      report: "2023 Annual Financial Budget Report v1.0",
      Action: "Update",
      time: "01:57am",
      date: "23, May 2023",
    },
    {
      sn: "1",
      report: "2023 Annual Financial Budget Report v1.0",
      Action: "Update",
      time: "01:57am",
      date: "23, May 2023",
    },
    {
      sn: "1",
      report: "2023 Annual Financial Budget Report v1.0",
      Action: "Update",
      time: "01:57am",
      date: "23, May 2023",
    },
  ];

  const data2 = [
    {
      name: "Level",
      role: userDetail?.level?.name,
      btnText: "Edit",
    },
    {
      name: "Department",
      role: userDetail?.department?.name,
      btnText: "Edit",
    },
    {
      name: "Email",
      role: userDetail?.email,
      btnText: "Edit",
    },
    {
      name: "Phone Number",
      role: userDetail?.phone,
      btnText: "Edit",
    },
    {
      name: "Date Joined",
      role: formatDate2(userDetail?.createdAt),
      btnText: "",
    },
    {
      name: "Generate New Password",
      role: "",
      btnText: "GENERATE",
    },
  ];

  return (
    <Layout showSidebar={false}>
      {userLoading ? (
        <Loader />
      ) : (
        <Box p="6" overflowY="auto" bg="bg.100" h="100%">
          <HStack justify="space-between" mb={"5"}>
            <HStack>
              <IconButton
                icon={<Image src="/images/undo.svg" alt="back" />}
                bg="white"
                onClick={() => router.push("/dashboard/admin")}
                aria-label="back"
                borderWidth={1}
                borderColor="border.100"
              />
            </HStack>

            <HStack justify="flex-end">
              <Button
                text="Download Activity Log"
                bg="#F0FFFF"
                border="#8CDBB4"
                color="greens.100"
                icon="/images/import.svg"
                iconPosition="left"
              />
            </HStack>
          </HStack>

          <>
            <HStack mb={6}>
              <Avatar size="lg" name={userDetail?.name} bg="primary" />
              <VStack align="flex-start">
                <Text
                  fontSize="22px"
                  fontWeight="600"
                  color={"maintText.100"}
                  textTransform="capitalize"
                >
                  {userDetail?.name}
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight="600"
                  color="greens.100"
                  mt={-2}
                >
                  {userDetail?.role?.name}
                </Text>
              </VStack>
            </HStack>

            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={2}
              mb={5}
            >
              {data2.map((item, index) => (
                <GridItem colSpan={1} key={index}>
                  <MemberCard
                    name={item.name}
                    role={item.role}
                    btnText={item.btnText}
                  />
                </GridItem>
              ))}
            </Grid>

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
                Activity Log
              </Text>

              <ReportTable data={data} />
            </>
          </>
        </Box>
      )}
    </Layout>
  );
};

export default Member;
