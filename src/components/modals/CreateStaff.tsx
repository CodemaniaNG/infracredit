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
} from "@/redux/services/onboard.service";

const CreateStaff = ({ setIsOpen }: any) => {
  const toast = useToast();
  const { token } = useAppSelector((state) => state.app.auth);
  const [deptId, setDeptId] = useState<string>("");

  const [onboardUser, { isLoading: onboardUserLoading }] =
    useOnboardUserMutation();

  const { data: rolesData, isLoading: rolesLoading } = useGetUserRolesQuery({
    token,
  });

  const roles = rolesData?.data?.map((role: any) => ({
    value: role.id,
    label: role.value,
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
    })
  );

  useEffect(() => {
    if (deptId) {
      refetchDepartmentLevels();
    }
  }, [deptId, refetchDepartmentLevels]);

  const handleCreateStaff = async (values: any) => {
    await onboardUser({
      token,
      body: values,
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
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
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
        Create New Staff
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
          handleCreateStaff(values);
        }}
        validationSchema={createStaffSchema}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <VStack>
              <Input
                label="Name"
                name="Name"
                type="text"
                placeholder="Enter full name"
              />

              <Input
                label="Username"
                name="Username"
                type="text"
                placeholder="Enter username"
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
                  placeholder="Select user level"
                />
                {departmentLevelsLoading && (
                  <Spinner size="sm" color="green.500" mt={5} />
                )}
              </Stack>

              <Input
                label="Email"
                name="Email"
                type="email"
                placeholder="Enter user address"
              />

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
