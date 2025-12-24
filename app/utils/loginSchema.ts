import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),

  password: Yup.string()
    .required("كلمة المرور مطلوبة"),
});