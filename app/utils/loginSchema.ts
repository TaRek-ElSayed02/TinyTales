
import * as Yup from "yup";

export const getLoginSchema = (locale: 'en' | 'ar') => {
  const translations = {
    en: {
      emailRequired: "Email is required",
      invalidEmail: "Invalid email address",
      passwordRequired: "Password is required"
    },
    ar: {
      emailRequired: "البريد الإلكتروني مطلوب",
      invalidEmail: "عنوان البريد الإلكتروني غير صالح",
      passwordRequired: "كلمة المرور مطلوبة"
    }
  };

  return Yup.object({
    email: Yup.string()
      .email(translations[locale].invalidEmail)
      .required(translations[locale].emailRequired),

    password: Yup.string()
      .required(translations[locale].passwordRequired),
  });
};