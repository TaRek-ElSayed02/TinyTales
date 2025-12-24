'use client';
import { useFormik } from "formik";
import { login } from "../../services/authService";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { loginSchema } from "../../utils/loginSchema";
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                setError("");
                setIsLoading(true);

                const res = await login(values.email, values.password);
                console.log("Login Response:", res);

                if (res.status && res.data?.token) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("verify_email", values.email);
                    document.cookie = `token=${res.data.token}; path=/; max-age=86400`;
                    const userName = res.data.name ||
                        res.data.user?.name ||
                        values.email.split('@')[0];
                    localStorage.setItem("userName", userName);
                    router.push("/dashboard");
                } else {
                    setError(res.message || "Login failed. Please check your credentials.");
                }
            } catch (error: any) {
                console.error("Login error:", error);
                setError(
                    error?.response?.data?.message ||
                    error?.message ||
                    "An error occurred. Please try again."
                );
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
            <div className="max-w-md w-full rounded-2xl">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden ">
                    <div className="bg-white p-6 text-center text-black">
                        <h1 className="text-2xl font-bold text-black">Welcome Back</h1>
                        <p className="text-black mt-2">Sign in to your account</p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="p-6 space-y-4">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-gray-700 text-sm font-medium">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-blue-600 text-sm hover:text-blue-800"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    {showPassword ? (
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-xs mt-1">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition duration-200 ${isLoading
                                ? "bg-blue-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </div>
                            ) : (
                                "Sign In"
                            )}
                        </button>


                        <div className="text-center mt-6">
                            <p className="text-gray-600">
                                Don't have an account?{' '}
                                <Link
                                    href="/auth/register"
                                    className="text-blue-600 font-medium hover:text-blue-800"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}