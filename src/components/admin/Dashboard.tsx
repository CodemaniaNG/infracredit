import { useAppSelector } from "@/redux/store";
import { Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import DocumentCard from "@/components/documents/DocumentCard";
import { formatDate2 } from "@/utils/functions";
import Loader from "../ui/Loader";
import { useGetReportsQuery } from "@/redux/services/reports.service";

const Dashboard = () => {
  const { userInfo, token } = useAppSelector((state) => state.app.auth);
  const { data: reportsData, isLoading: reportsLoading } =
    useGetReportsQuery(token);
  const reports = reportsData?.data;

  const data = [
    // {
    //   sn: "1",
    //   title: "Annual report",
    //   editedBy: "Olusanya Ezekiel",
    //   editedOn: "12th May, 2021",
    //   currentUser: "Wale Peter",
    // },
  ] as any;

  return (
    <>
      {reportsLoading ? (
        <Loader />
      ) : (
        <>
          <VStack align="flex-start" mb={"3"}>
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
              Welcome back,
              <Text
                as="span"
                fontSize={{
                  base: "20px",
                  md: "24px",
                  lg: "32px",
                }}
                fontWeight="600"
                color="secondary"
                fontFamily={"body"}
                textTransform={"capitalize"}
              >
                {" "}
                {userInfo?.name}
              </Text>
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight="500"
              color="subText.400"
              mt={-2}
              fontFamily={"body"}
            >
              {formatDate2(new Date().toISOString())}
            </Text>
          </VStack>
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
                  label={"Total Teams"}
                  value={0}
                  isPrefix={false}
                  image="/images/reports.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Pending Teams"}
                  value={0}
                  isPrefix={false}
                  image="/images/drafted.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Closed Out"}
                  value={0}
                  isPrefix={false}
                  image="/images/deleted2.svg"
                />
              </GridItem>
              <GridItem colSpan={1}>
                <DashboardCard
                  label={"Collaborators"}
                  value={0}
                  isPrefix={false}
                  image="/images/collaborators.svg"
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
                Report Templates
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
                {reports?.slice(0, 4)?.map((report: any, index: any) => (
                  <GridItem colSpan={1} key={index}>
                    <DocumentCard
                      title={report?.title}
                      desc={report?.description}
                    />
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
                Activity Log
              </Text>

              <DashboardTable data={data} />
            </>
          </>
        </>
      )}
    </>
  );
};

export default Dashboard;
