import * as Yup from "yup";

export const getRegisterSchema = (locale: 'en' | 'ar') => {
  const translations: any = {
    en: {
      fullNameMin: "Full name must be at least 3 characters",
      fullNamePattern: "Full name must contain only letters without symbols",
      fullNameRequired: "Full name is required",
      invalidEmail: "Invalid email address",
      emailRequired: "Email is required",
      passwordMin: "Password must be at least 8 characters",
      passwordLower: "Password must contain at least one lowercase letter",
      passwordUpper: "Password must contain at least one uppercase letter",
      passwordNumber: "Password must contain at least one number",
      passwordSpecial: "Password must contain at least one special character",
      passwordRequired: "Password is required",
      passwordConfirmMismatch: "Passwords do not match",
      passwordConfirmationRequired: "Password confirmation is required",
      countryCodePattern: "Country code must start with +",
      countryCodeRequired: "Country code is required",
      phonePattern: "Phone number must contain only digits",
      phoneRequired: "Phone number is required",
    },
    ar: {
      fullNameMin: "الاسم يجب أن يكون 3 أحرف على الأقل",
      fullNamePattern: "الاسم يجب أن يحتوي حروف فقط بدون رموز",
      fullNameRequired: "الاسم الكامل مطلوب",
      invalidEmail: "عنوان البريد الإلكتروني غير صالح",
      emailRequired: "البريد الإلكتروني مطلوب",
      passwordMin: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
      passwordLower: "كلمة المرور يجب أن تحتوي على حرف صغير واحد على الأقل",
      passwordUpper: "كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل",
      passwordNumber: "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل",
      passwordSpecial: "كلمة المرور يجب أن تحتوي على رمز خاص واحد على الأقل",
      passwordRequired: "كلمة المرور مطلوبة",
      passwordConfirmMismatch: "كلمات المرور غير متطابقة",
      passwordConfirmationRequired: "تأكيد كلمة المرور مطلوب",
      countryCodePattern: "رمز الدولة يجب أن يبدأ بـ +",
      countryCodeRequired: "رمز الدولة مطلوب",
      phonePattern: "رقم الهاتف يجب أن يحتوي أرقام فقط",
      phoneRequired: "رقم الهاتف مطلوب",
    },
  };

  const t = translations[locale];

  return Yup.object({
    fullName: Yup.string()
      .min(3, t.fullNameMin)
      .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, t.fullNamePattern)
      .required(t.fullNameRequired),

    email: Yup.string()
      .email(t.invalidEmail)
      .required(t.emailRequired),

    password: Yup.string()
      .min(8, t.passwordMin)
      .matches(/[a-z]/, t.passwordLower)
      .matches(/[A-Z]/, t.passwordUpper)
      .matches(/[0-9]/, t.passwordNumber)
      .matches(/[@$!%*?&#]/, t.passwordSpecial)
      .required(t.passwordRequired),

    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], t.passwordConfirmMismatch)
      .required(t.passwordConfirmationRequired),

    mobile_country_code: Yup.string()
      .matches(/^\+\d+$/, t.countryCodePattern)
      .required(t.countryCodeRequired),

    mobile: Yup.string()
      .matches(/^\d+$/, t.phonePattern)
      .required(t.phoneRequired),
  });
};