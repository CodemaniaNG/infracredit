import {
  Text,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import MemberTable from "@/components/admin/MemberTable";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import CreateStaff from "../modals/CreateStaff";
import OrganizationTask from "./OrganizationTask";

import { useAppSelector } from "@/redux/store";
import { useGetUsersQuery } from "@/redux/services/onboard.service";
import Loader from "../ui/Loader";
import { useMemo } from "react";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAppSelector((state) => state.app.auth);

  const { data: users, isLoading: usersLoading } = useGetUsersQuery({
    token: token,
  });

  const allUsers = useMemo(() => {
    return users?.data;
  }, [users]);

  const adminUsers = useMemo(() => {
    return allUsers?.filter((user: any) => user.role.name === "Admin");
  }, [allUsers]);

  const managerUsers = useMemo(() => {
    return allUsers?.filter((user: any) => user.role.name === "Manager");
  }, [allUsers]);

  const supervisorUsers = useMemo(() => {
    return allUsers?.filter((user: any) => user.role.name === "Supervisor");
  }, [allUsers]);

  const userUsers = useMemo(() => {
    return allUsers?.filter((user: any) => user.role.name === "User");
  }, [allUsers]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const tabs = [
    {
      title: "All",
    },
    {
      title: "User",
    },
    {
      title: "Supervisor",
    },
    {
      title: "Administrator",
    },
    {
      title: "Manager",
    },
  ];

  return (
    <>
      {usersLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardHeader title="Staff">
            <Button
              text="Onboard Staff"
              icon="/images/add2.svg"
              iconPosition="left"
              onClick={handleModal}
            />
          </DashboardHeader>
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
                  label={"Users"}
                  value={userUsers?.length}
                  isPrefix={false}
                  image="/images/reports.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Supervisors"}
                  value={supervisorUsers?.length}
                  isPrefix={false}
                  image="/images/drafted.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Administrators"}
                  value={adminUsers?.length}
                  isPrefix={false}
                  image="/images/deleted2.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Managers"}
                  value={managerUsers?.length}
                  isPrefix={false}
                  image="/images/collaborators.svg"
                />
              </GridItem>
            </Grid>

            <OrganizationTask />

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
              <Tabs>
                <TabList>
                  {tabs.map((tab, index) => (
                    <Tab
                      key={index}
                      _selected={{
                        color: "greens.100",
                        bg: "bg.500",
                        fontWeight: "700",
                        fontSize: "16px",
                        borderBottom: "2px solid #287750",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                        borderBottomEndRadius: "0px",
                        borderBottomStartRadius: "0px",
                        px: 6,
                      }}
                      px={4}
                      py={2}
                      color="subText.400"
                      fontFamily={"body"}
                      fontWeight="500"
                      fontSize={"16px"}
                      mr={3}
                      w={150}
                      borderRadius={0}
                    >
                      {tab.title}
                    </Tab>
                  ))}
                </TabList>

                <TabPanels px={0}>
                  <TabPanel px={0}>
                    <MemberTable data={allUsers} />
                  </TabPanel>
                  <TabPanel px={0}>
                    <MemberTable data={userUsers} />
                  </TabPanel>
                  <TabPanel px={0}>
                    <MemberTable data={supervisorUsers} />
                  </TabPanel>
                  <TabPanel px={0}>
                    <MemberTable data={adminUsers} />
                  </TabPanel>
                  <TabPanel px={0}>
                    <MemberTable data={managerUsers} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          </>
        </>
      )}
      <Modal
        isOpen={isOpen}
        onClose={handleModal}
        body={<CreateStaff setIsOpen={setIsOpen} />}
      />
    </>
  );
};

export default Admin;
