import * as yup from "yup";

export const createStaffSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  Username: yup.string().required("Username is required"),
  RoleId: yup.string().required("Role is required"),
  DepartmentId: yup.string().required("Department is required"),
  LevelId: yup.string().required("Level is required"),
  Email: yup.string().required("Email is required").email(),
  Phone: yup.string().required("Phone is required"),
});

export const createDeptSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  Description: yup.string().required("Description is required"),
});

export const createDeptLevelSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
});
