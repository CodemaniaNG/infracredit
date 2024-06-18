import * as yup from "yup";

export const createStaffSchema = yup.object().shape({
  // Name: yup.string().required("Name is required"),
  // Username: yup.string().required("Username is required"),
  RoleId: yup.string().required("Role is required"),
  DepartmentId: yup.string().required("Department is required"),
  LevelId: yup.string().required("Level is required"),
  Email: yup.string().required("Email is required").email(),
  Phone: yup.string().required("Phone is required"),
});

export const createDeptSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  // Description: yup.string().required("Description is required"),
});

export const createDeptLevelSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
});

export const creatCommentSchema = yup.object().shape({
  Content: yup.string().required("Comment is required"),
});

export const createReviwerSchema = yup.object().shape({
  UserId: yup.string().required("Reviewer is required"),
});

export const createReportSchema = yup.object().shape({
  TemplateId: yup.string().required("Template is required"),
  ManagerId: yup.string().required("Manager is required"),
  SupervisorId: yup.string().required("Supervisor is required"),
  Title: yup.string().required("Title is required"),
  Description: yup.string().required("Description is required"),
  Month: yup.string().required("Month is required"),
  Year: yup.string().required("Year is required"),
  Body: yup.string().required("Body is required"),
  UserIds: yup.array().of(yup.string()).min(1, "Atleast one user is required"),
});

export const rejectReportSchema = yup.object().shape({
  Comment: yup.string().required("Comment is required"),
});

export const createFolderSchema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  Description: yup.string().required("Description is required"),
  UserIds: yup.array().of(yup.string()).min(1, "Atleast one user is required"),
});

export const createResourceSchema = yup.object().shape({
  FolderId: yup.string().required("Folder is required"),
});
