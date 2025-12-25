'use client';
import { useFormik } from "formik";
import { register } from "../../services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getRegisterSchema } from "../../utils/registerSchema";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";
import { t } from "../../i18n";
export default function Register() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { locale, toggleLocale } = useLanguage();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            password_confirmation: "",
            mobile: "",
            mobile_country_code: "+971",
        },
        validationSchema: getRegisterSchema(locale),
        onSubmit: async (values) => {
            try {
                setError("");
                setIsLoading(true);

                const res = await register(values);
                console.log("Register Success:", res);

                if (res.status && res.data?.token) {
                    localStorage.setItem("userName", values.fullName);
                    localStorage.setItem("session_token", res.data.token);
                    localStorage.setItem("verify_email", values.email);
                    router.push("/auth/verify");
                } else {
                    setError(res.message || "Registration failed");
                }
            } catch (error: any) {
                console.error(error);
                setError(
                    error?.response?.data?.message ||
                    error.message ||
                    "An error occurred"
                );
            } finally {
                setIsLoading(false);
            }
        },

    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
            <form
                onSubmit={formik.handleSubmit}
                className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
            >
                <div className="flex justify-end mb-4">
                    <button
                        onClick={toggleLocale}
                        type="button"
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition-colors"
                    >
                        {locale === 'en' ? t('common.switchToArabic', locale) : t('common.switchToEnglish', locale)}
                    </button>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">{t('register.createAccount', locale)}</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        {t('register.joinStart', locale)}
                    </p>
                </div>

                {error && (
                    <div className="mb-6 text-center text-sm p-3 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <input
                            name="fullName"
                            placeholder={t('register.fullName', locale)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            dir={locale === 'ar' ? 'rtl' : 'ltr'}
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.fullName}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder={t('common.email', locale)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            dir={locale === 'ar' ? 'rtl' : 'ltr'}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder={t('common.password', locale)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                                dir={locale === 'ar' ? 'rtl' : 'ltr'}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={`absolute top-1/2 -translate-y-1/2 px-3 text-gray-500 hover:text-gray-700 transition ${
                                    locale === 'ar' ? 'left-3' : 'right-3'
                                }`}
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-2.288m5.149-5.038A9.954 9.954 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.079 10.079 0 01-1.563 2.288m-9.32 3.577a3 3 0 114.242-4.243M9.88 9.88l4.242 4.242M12 5v.01M3 3l18 18" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="password_confirmation"
                                placeholder={t('register.confirmPassword', locale)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password_confirmation}
                                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                                dir={locale === 'ar' ? 'rtl' : 'ltr'}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className={`absolute top-1/2 -translate-y-1/2 px-3 text-gray-500 hover:text-gray-700 transition ${
                                    locale === 'ar' ? 'left-3' : 'right-3'
                                }`}
                            >
                                {showConfirmPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-2.288m5.149-5.038A9.954 9.954 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.079 10.079 0 01-1.563 2.288m-9.32 3.577a3 3 0 114.242-4.243M9.88 9.88l4.242 4.242M12 5v.01M3 3l18 18" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {formik.touched.password_confirmation &&
                            formik.errors.password_confirmation && (
                                <p className="text-red-500 text-xs mt-1">
                                    {formik.errors.password_confirmation}
                                </p>
                            )}
                    </div>

                    <div className="flex gap-3">
                        <div className="w-1/3">
                            <input
                                name="mobile_country_code"
                                placeholder={t('register.countryCode', locale)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.mobile_country_code}
                                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                dir={locale === 'ar' ? 'rtl' : 'ltr'}
                            />
                            {formik.touched.mobile_country_code &&
                                formik.errors.mobile_country_code && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {formik.errors.mobile_country_code}
                                    </p>
                                )}
                        </div>

                        <div className="w-2/3">
                            <input
                                name="mobile"
                                placeholder={t('register.phoneNumber', locale)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.mobile}
                                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                dir={locale === 'ar' ? 'rtl' : 'ltr'}
                            />
                            {formik.touched.mobile && formik.errors.mobile && (
                                <p className="text-red-500 text-xs mt-1">
                                    {formik.errors.mobile}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-8 h-12 rounded-lg bg-blue-600 text-white font-semibold
                 hover:bg-blue-700 transition disabled:opacity-60"
                >
                    {isLoading ? t('register.creatingAccount', locale) : t('common.signUp', locale)}
                </button>

                <p className="text-center text-sm mt-6 text-gray-600">
                    {t('common.dontHaveAccount', locale)}{" "}
                    <Link
                        href="/auth/login"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {t('common.signIn', locale)}
                    </Link>
                </p>
            </form>
        </div>

    );
}
