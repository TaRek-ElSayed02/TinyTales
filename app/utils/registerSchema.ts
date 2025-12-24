import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "الاسم يجب أن يكون 3 أحرف على الأقل")
    .matches(
      /^[\u0600-\u06FFa-zA-Z\s]+$/,
      "الاسم يجب أن يحتوي على حروف فقط بدون رموز"
    )
    .required("الاسم بالكامل مطلوب"),

  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),

  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
    .matches(/[a-z]/, "كلمة المرور يجب أن تحتوي على حرف صغير")
    .matches(/[A-Z]/, "كلمة المرور يجب أن تحتوي على حرف كبير")
    .matches(/[0-9]/, "كلمة المرور يجب أن تحتوي على رقم")
    .matches(/[@$!%*?&#]/, "كلمة المرور يجب أن تحتوي على رمز خاص")
    .required("كلمة المرور مطلوبة"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "كلمتا المرور غير متطابقتين")
    .required("تأكيد كلمة المرور مطلوب"),

  mobile_country_code: Yup.string()
    .matches(/^\+\d+$/, "كود الدولة يجب أن يبدأ بعلامة +")
    .required("كود الدولة مطلوب"),

  mobile: Yup.string()
    .matches(/^\d+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط")
    .required("رقم الهاتف مطلوب"),
});
