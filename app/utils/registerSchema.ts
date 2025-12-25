import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .matches(
      /^[\u0600-\u06FFa-zA-Z\s]+$/,
      "Full name must contain only letters without symbols"
    )
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character")
    .required("Password is required"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Password confirmation is required"),

  mobile_country_code: Yup.string()
    .matches(/^\+\d+$/, "Country code must start with +")
    .required("Country code is required"),

  mobile: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
});