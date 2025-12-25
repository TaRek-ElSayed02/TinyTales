
'use client';
import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n';

declare module 'react' {
    interface CSSProperties {
        WebkitTextStroke?: string;
        textStroke?: string;
    }
}

export default function ProductDetails() {
    const { locale } = useLanguage();
    const background = "/background.jpeg";
    const verticalmobile = "/3dverticalmobile.png";

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

            <div className='relative w-full h-[193px] overflow-hidden hidden md:block'>
                <img
                   
                    src={background}
                    alt={t('product.title', locale)}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='relative text-center px-4'>
                        <div className='absolute w-[628px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                            <h2
                                className='font-bold text-transparent whitespace-nowrap'
                                style={{
                                    fontSize: '80px',
                                    lineHeight: '120px',
                                    fontFamily: 'Poppins',
                                    WebkitTextStroke: '1px rgba(0, 0, 0, 0.05)',
                                    textStroke: '1px rgba(0, 0, 0, 0.05)'
                                }}>
                                {t('product.sectionHeading', locale)}
                            </h2>
                        </div>

                        <h1
                            className='font-semibold text-[#020202] relative z-10'
                            style={{
                                fontSize: '32px',
                                fontFamily: 'Poppins',
                                width: '247px',
                                lineHeight: '48px'
                            }}>
                            {t('product.sectionHeading', locale)}
                        </h1>
                    </div>
                </div>
            </div>

            <div className='relative w-full h-[193px] overflow-hidden block md:hidden'>
                <img
                    src={verticalmobile}
                    alt={t('product.breadcrumbItem', locale)}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='relative text-center px-4'>
                        <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                            <h2
                                className='font-bold text-transparent whitespace-nowrap'
                                style={{
                                    fontSize: '29px',
                                    lineHeight: '60px',
                                    fontFamily: 'Poppins',
                                    WebkitTextStroke: '1px rgba(0, 0, 0, 0.05)',
                                    textStroke: '1px rgba(0, 0, 0, 0.05)'
                                }}>
                                {t('product.breadcrumbItem', locale)}
                            </h2>
                        </div>

                        <h1
                            className='font-semibold text-[#020202] relative z-10'
                            style={{
                                fontSize: '20px',
                                fontFamily: 'Poppins',
                                width: '71px',
                                lineHeight: '30px'
                            }}>
                            {t('product.breadcrumbItem', locale)}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}