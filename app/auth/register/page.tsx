'use client';
import { useFormik } from "formik";
import { register } from "../../services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerSchema } from "../../utils/registerSchema";
import Link from "next/link";
export default function Register() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            password_confirmation: "",
            mobile: "",
            mobile_country_code: "+971",
        },
        validationSchema: registerSchema,
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
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Join us and start your journey
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
                            placeholder="Full Name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            placeholder="Email Address"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password_confirmation}
                            className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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
                                placeholder="+20"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.mobile_country_code}
                                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                placeholder="Phone Number"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.mobile}
                                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    {isLoading ? "Creating account..." : "Sign Up"}
                </button>

                <p className="text-center text-sm mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link
                        href="/auth/login"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>

    );
}
