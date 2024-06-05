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
  AvatarBadge,
} from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import Layout from "@/components/dashboard/Layout";
import AddLevel from "@/components/modals/AddLevel";
import { useAppSelector } from "@/redux/store";
import { useGetDepartmentByIdQuery } from "@/redux/services/department.service";
import Loader from "@/components/ui/Loader";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

const Department = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { deptId } = router.query;

  const { token } = useAppSelector((state) => state.app.auth);

  const { data: departmentData, isLoading: departmentLoading } =
    useGetDepartmentByIdQuery({ token, id: deptId });
  const department = departmentData?.data;

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DashboardLayout showSidebar={false}>
        {departmentLoading ? (
          <Loader />
        ) : (
          <Box p="6" overflowY="auto" bg="bg.100">
            <HStack justify="space-between" mb={"3"}>
              <HStack>
                <IconButton
                  icon={<Image src="/images/undo.svg" alt="back" />}
                  bg="white"
                  onClick={() => router.push("/dashboard/tasks")}
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
                  {department?.name}
                </Text>
              </HStack>

              <HStack justify="flex-end">
                <Button
                  text="Add New Level"
                  bg="#F0FFFF"
                  border="#8CDBB4"
                  color="greens.100"
                  icon="/images/add.svg"
                  iconPosition="left"
                  onClick={handleModal}
                />
              </HStack>
            </HStack>

            <>
              <Grid
                templateColumns={{
                  sm: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={2}
                mb={5}
              >
                <GridItem colSpan={1}>
                  <DashboardCard
                    label={"Members"}
                    value={0}
                    isPrefix={false}
                    image="/images/reports.svg"
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <DashboardCard
                    label={"Reports Draft "}
                    value={0}
                    isPrefix={false}
                    image="/images/drafted.svg"
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <DashboardCard
                    label={"Reports Created"}
                    value={0}
                    isPrefix={false}
                    image="/images/deleted2.svg"
                  />
                </GridItem>
                <GridItem colSpan={1}>
                  <DashboardCard
                    label={"Reports Completed"}
                    value={0}
                    isPrefix={false}
                    image="/images/deleted2.svg"
                  />
                </GridItem>
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
                  Manage members
                </Text>
                {/*  */}

                <DashboardTable data={department?.users} />
              </>
            </>
          </Box>
        )}
        <Modal
          isOpen={isOpen}
          onClose={handleModal}
          body={
            <AddLevel
              setIsOpen={setIsOpen}
              deptId={deptId}
              name={department?.name}
            />
          }
        />
      </DashboardLayout>
    </>
  );
};

export default Department;
