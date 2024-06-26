import { Text, VStack, Spinner, Stack, useToast } from "@chakra-ui/react";
import Button from "@/components/ui/Button";
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input2";
import Select from "@/components/ui/Select2";
import {
  useGetDepartmentsQuery,
  useGetDepartmentLevelsQuery,
} from "@/redux/services/department.service";
import { useAppSelector } from "@/redux/store";
import { useState, useEffect } from "react";
import { createStaffSchema } from "@/schemas/admin.schema";
import {
  useGetUserRolesQuery,
  useOnboardUserMutation,
  useGetUserByEmailQuery,
} from "@/redux/services/onboard.service";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const CreateStaff = ({ setIsOpen }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);
  const [deptId, setDeptId] = useState<string>("");
  const [email, setEmail] = useState<any>(null);
  const [name, setName] = useState<any>(null);

  const [onboardUser, { isLoading: onboardUserLoading }] =
    useOnboardUserMutation();

  const { data: rolesData, isLoading: rolesLoading } = useGetUserRolesQuery({
    token,
  });

  const roles = rolesData?.data?.map((role: any) => ({
    value: role.id,
    label: role.name,
  }));

  const { data: departmentsData, isLoading: departmentsLoading } =
    useGetDepartmentsQuery(token);

  const depts = departmentsData?.data?.map((dept: any) => ({
    value: dept.id,
    label: dept.name,
  }));

  const {
    data: departmentLevelsData,
    isLoading: departmentLevelsLoading,
    refetch: refetchDepartmentLevels,
  } = useGetDepartmentLevelsQuery({
    token,
    id: deptId,
  });

  const departmentLevels = departmentLevelsData?.data?.levels?.map(
    (level: any) => ({
      value: level.id,
      label: level.name,
    }),
  );

  const {
    data,
    error,
    isLoading: loadingFetchUser,
    refetch,
  } = useGetUserByEmailQuery({
    token: token,
    email: email,
  });

  const userDetail = data;
  const userError = error as any;

  useEffect(() => {
    if (deptId) {
      refetchDepartmentLevels();
    }
  }, [deptId, refetchDepartmentLevels]);

  useEffect(() => {
    if (email) {
      refetch();
    }
  }, [email, refetch]);

  useEffect(() => {
    if (userDetail?.data?.displayName) {
      setName(userDetail?.data?.displayName);
    }
  }, [userDetail]);

  const handleCreateStaff = async (values: any) => {
    await onboardUser({
      token,
      body: {
        Name: name,
        Username: name,
        RoleId: values.RoleId,
        DepartmentId: values.DepartmentId,
        LevelId: values.LevelId,
        Email: email,
        Phone: values.Phone,
      },
    })
      .unwrap()
      .then(() => {
        toast({
          title: "Staff created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        if (error.data && error.data.errors) {
          const errorMessages = Object.values(error.data.errors)
            .flat()
            .join("\n");

          toast({
            title: errorMessages,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Something went wrong",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
      });
  };

  return (
    <VStack align="flex-start" spacing={4} mt={10} mb={5}>
      <Text
        color={"greens.100"}
        fontSize={"24px"}
        fontWeight={"600"}
        fontFamily={"body"}
      >
        Onboard Staff
      </Text>
      <Formik
        initialValues={{
          Name: "",
          Username: "",
          RoleId: "",
          DepartmentId: "",
          LevelId: "",
          Email: "",
          Phone: "",
        }}
        onSubmit={(values) => {
          console.log(values, "values");
          handleCreateStaff(values);
        }}
        validationSchema={createStaffSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Stack direction={"row"} align="center" w={"100%"} spacing={1}>
                <Input
                  label="Email"
                  name="Email"
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e: any) => {
                    if (
                      e.target.value &&
                      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                        e.target.value,
                      )
                    ) {
                      setEmail(e.target.value);
                    }
                  }}
                />
                {loadingFetchUser && email && (
                  <Spinner size="sm" color="green.500" mt={5} />
                )}
                {userDetail?.status === "success" &&
                  email &&
                  !loadingFetchUser && (
                    <FaRegCircleCheck
                      color="green"
                      fontSize="20px"
                      style={{
                        marginTop: "25px",
                      }}
                    />
                  )}
                {userError?.data?.status === 404 &&
                  email &&
                  !loadingFetchUser && (
                    <RxCrossCircled
                      color="red"
                      fontSize="20px"
                      style={{
                        marginTop: "25px",
                      }}
                    />
                  )}
              </Stack>

              <Input
                label="Name"
                name="Name"
                type="text"
                placeholder="Enter full name"
                isReadOnly={true}
                value={name}
              />

              <Input
                label="Username"
                name="Username"
                type="text"
                placeholder="Enter username"
                isReadOnly={true}
                value={name}
              />

              <Stack direction={"row"} align="center" w={"100%"} spacing={1}>
                <Select
                  label="Role"
                  name="RoleId"
                  options={roles}
                  placeholder="Select user role"
                />
                {rolesLoading && <Spinner size="sm" color="green.500" mt={5} />}
              </Stack>

              <Stack direction={"row"} align="center" w={"100%"} spacing={1}>
                <Select
                  label="Department"
                  name="DepartmentId"
                  options={depts}
                  placeholder="Select user department"
                  onChange={(e: any) => {
                    setDeptId(e.target.value);
                  }}
                />
                {departmentsLoading && (
                  <Spinner size="sm" color="green.500" mt={5} />
                )}
              </Stack>

              <Stack direction={"row"} align="center" w={"100%"} spacing={1}>
                <Select
                  label="Level"
                  name="LevelId"
                  options={departmentLevels}
                  placeholder="Select department level"
                />
                {departmentLevelsLoading && (
                  <Spinner size="sm" color="green.500" mt={5} />
                )}
              </Stack>

              <Input
                label="Phone Number"
                name="Phone"
                type="tel"
                placeholder="Enter user phone"
              />

              <VStack align="stretch" w={"100%"} mt={4}>
                <Button
                  text="Create Staff"
                  px={4}
                  py={4}
                  type="submit"
                  isLoading={onboardUserLoading}
                  isDisabled={onboardUserLoading}
                />
              </VStack>
            </VStack>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default CreateStaff;
