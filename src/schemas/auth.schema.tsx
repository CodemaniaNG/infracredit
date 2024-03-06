import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    role: yup.string().required("Role is required"),
    email: yup.string().required("Email is required").email(),
});

export const registerSchema1 = yup.object().shape({
    organizationName: yup.string().required("Organization name is required"),
    emailAddress: yup.string().required("Email is required").email(),
    // phoneNumber: yup.string().required("Phone number is required").matches(/^[0-9]{11}$/, "Phone number must be 11 digits"),
    phoneNumber: yup.string().required("Phone number is required").matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits"),
    password: yup.string().required("Password is required"),
    rcNumber: yup.string().required("RC number is required"),
});

export const registerSchema2 = yup.object().shape({
    address: yup.string().required("Address is required"),
    staffNumber: yup.string().required("Staff number is required"),
    branches: yup.string().required("Branches is required"),
    sector: yup.string().required("Sector is required"),
});

export const forgotPasswordSchema = yup.object().shape({
    emailAddress: yup.string().required("Email is required").email(),
});

export const resetPasswordSchema = yup.object().shape({
    email: yup.string().required("Email is required").email(),
    otp: yup.string().required("OTP is required"),
    newPassword: yup.string().required("New password is required"),
});