'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { t } from "@/app/i18n";

export default function VerifyAccount() {
    const router = useRouter();
    const { locale, toggleLocale } = useLanguage();

    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const name = localStorage.getItem("userName");
        setUserName(name);
    }, []);

    const handleVerify = async () => {
        try {
            setError("");
            setIsLoading(true);

            if (code !== "123456") {
                setError(t('verify.invalidCode', locale));
                return;
            }

            router.push("/dashboard");
        } catch (err) {
            setError(t('verify.verificationFailed', locale));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gray-100 p-4 ${locale === 'ar' ? 'rtl' : 'ltr'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className="max-w-md w-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">

                    <div className="bg-white p-6 text-center">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold text-black flex-1">
                                {t('verify.verifyAccount', locale)}
                            </h1>
                            <button
                                onClick={toggleLocale}
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium transition"
                            >
                                {locale === 'en' ? t('common.switchToArabic', locale) : t('common.switchToEnglish', locale)}
                            </button>
                        </div>
                        <p className="text-black mt-2">
                            {t('verify.enterVerificationCode', locale)}
                        </p>
                    </div>

                    <div className="p-6 space-y-4">

                        {userName && (
                            <p className="text-gray-600 text-center">
                                Hi, <span className="font-semibold">{userName}</span>
                            </p>
                        )}

                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center">
                            <p className="text-sm text-blue-700">
                                <strong>{t('verify.forTesting', locale)}</strong>
                                <span className="font-bold ml-1">123456</span>
                            </p>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1 text-center">
                                {t('verify.verificationCode', locale)}
                            </label>
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => {
                                    const value = e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 6);
                                    setCode(value);
                                }}
                                placeholder="••••••"
                                maxLength={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                    text-center text-xl tracking-widest
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className={`${locale === 'ar' ? 'text-left' : 'text-right'} text-xs text-gray-500 mt-1`}>
                                {code.length}/6 {t('verify.digitsLabel', locale)}
                            </p>
                        </div>

                        <button
                            onClick={handleVerify}
                            disabled={isLoading || code.length !== 6}
                            className={`w-full py-3 rounded-lg font-medium text-white transition
                                ${isLoading || code.length !== 6
                                    ? "bg-blue-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                }`}
                        >
                            {isLoading ? t('verify.verifying', locale) : t('verify.verifyButton', locale)}
                        </button>

                        <div className="text-center text-sm text-gray-600 space-y-2">
                            <button
                                type="button"
                                disabled={isLoading}
                                className="text-blue-600 hover:underline"
                            >
                                {t('verify.resendCode', locale)}
                            </button>

                            <div className="border-t pt-3">
                                <button
                                    type="button"
                                    onClick={() => router.push("/auth/register")}
                                    className="hover:text-gray-800"
                                >
                                    {t('verify.backToRegister', locale)}
                                </button>
                                <span className="mx-2 text-gray-400">•</span>
                                <button
                                    type="button"
                                    onClick={() => router.push("/auth/login")}
                                    className="hover:text-gray-800"
                                >
                                    {t('verify.goToLogin', locale)}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
