"use client";
import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n';

export default function Footer() {
    const { locale } = useLanguage();
    const kid = "/kids-photography.png"
    const lightlogo = "/lightlogo.png"
    const linkedin = "/linkedin.png"
    const face = "/face.png"
    const telegram = "/telegram.png"
    const x = "/x.png"
    const whatsapp = "/whatsapp.png"
    const insta = "/insta.png"
    const mail = "/mail.png"
    const phone = "/phone.png"
    const loc = "/loc.png"

    return (
        <div className="relative w-full h-[auti] md:h-[323px] overflow-hidden ">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${kid})` }}
            >
                <div className="absolute inset-0 bg-black/72"></div>
            </div>

            <div className="relative z-10 text-white h-full">
                <div className="max-w-full md:max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="md:hidden py-8 h-full overflow-y-auto">
                        <div className="mb-6">
                            <img src={lightlogo} alt="TinyTales" className="w-16 mb-3" />
                            <p className="text-xs text-gray-300 leading-relaxed">
                                {t('footer.description', locale)}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">{t('footer.contactUs', locale)}</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-base"><img src={phone} alt="" /></span>
                                    <span className="text-xs">+87 01928491</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-base"><img src={mail} alt="" /></span>
                                    <span className="text-xs">Named@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-base"><img src={loc} alt="" /></span>
                                    <span className="text-xs">381, cairo, egypt</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">{t('footer.letUsHelp', locale)}</h3>
                            <ul className="space-y-1.5 text-xs text-gray-300">
                                <li>{t('footer.myAccount', locale)}</li>
                                <li>{t('navbar.faqs', locale)}</li>
                                <li>{t('footer.contactUs', locale)}</li>
                                <li>{t('footer.categories', locale)}</li>
                                <li>{t('footer.allProducts', locale)}</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">{t('footer.sendEmail', locale)}</h3>
                            <div className="flex gap-2  mb-6 bg-white rounded-lg p-2">
                                <input
                                    type="email"
                                    placeholder={t('footer.emailPlaceholder', locale)}
                                    className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 text-xs outline-none"
                                />
                                <button className=" px-9 py-3 bg-[#BE968E] hover:bg-rose-400 rounded-lg text-white text-xs font-medium transition-colors">
                                    {t('footer.send', locale)}
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">{t('footer.followUs', locale)}</h3>
                            <div className="flex gap-3">
                                <img src={face} alt="Facebook" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={x} alt="Twitter" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={insta} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={linkedin} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                <img src={whatsapp} alt="whatsapp" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />

                                <img src={telegram} alt="Telegram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex py-8 h-full items-center">
                        <div className="w-full grid grid-cols-4 gap-8">
                            <div>
                                <img src={lightlogo} alt="TinyTales" className="w-20 mb-4" />
                                <p className="text-[14px] text-gray-300 leading-relaxed">
                                    {t('footer.description', locale)}
                                </p>
                            </div>

                            <div>
                                    <h3 className="text-[24px] font-semibold mb-4">{t('footer.letUsHelp', locale)}</h3>
                                    <ul className="space-y-2 text-[16px] text-gray-300">
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('footer.myAccount', locale)}</li>
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('navbar.faqs', locale)}</li>
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('footer.categories', locale)}</li>
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('footer.allProducts', locale)}</li>
                                    </ul>
                            </div>

                            <div>
                                <h3 className="text-[24px] font-semibold mb-4">{t('footer.policies', locale)}</h3>
                                    <ul className="space-y-2 text-[16px] text-gray-300  ">
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('footer.refundPolicy', locale)}</li>
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('navbar.aboutUs', locale)}</li>
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('footer.cancellationPolicy', locale)}</li>
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('footer.terms', locale)}</li>
                                        <li className="cursor-pointer hover:text-white transition-colors">{t('footer.privacy', locale)}</li>
                                    </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3">{t('footer.sendEmail', locale)}</h3>
                                <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 ">
                                    <input
                                        type="email"
                                        placeholder={t('footer.emailPlaceholder', locale)}
                                        className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 text-xs outline-none"
                                    />
                                    <button className="px-9 py-3 bg-[#BE968E] hover:bg-rose-400 rounded-lg text-white text-xs font-medium transition-colors">
                                        {t('footer.send', locale)}
                                    </button>
                                </div>

                                <h3 className="text-lg font-semibold mb-3">{t('footer.followUs', locale)}</h3>
                                <div className="flex gap-3">
                                    <img src={face} alt="Facebook" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={x} alt="Twitter" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={insta} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={linkedin} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                    <img src={whatsapp} alt="WhatsApp" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />

                                    <img src={telegram} alt="Telegram" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
