// import React from 'react'
// declare module 'react' {
//   interface CSSProperties {
//     WebkitTextStroke?: string;
//     textStroke?: string;
//   }
// }

// export default function ProductDetails() {

//     const background = "/background.jpeg";
//     const verticalmobile = "/3dverticalmobile.png";

//     return (
//         <>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

//                 body {
//                     font-family: 'Poppins', sans-serif;
//                 }
//             `}</style>

//             <div className='relative w-full h-[193px] overflow-hidden'>
//                 <img
//                     src={background}
//                     alt="Background for Product Details"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />


//                 <div className='absolute inset-0 flex items-center justify-center'>
//                     <div className='relative text-center px-4'>
//                         {/* طبقة التظليل الكبيرة - تظهر Product Details على الكمبيوتر و T-shirt على الموبايل */}
//                         <div className='absolute w-[628px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
//                             <h2 
//                                 className='font-bold text-transparent whitespace-nowrap hidden md:block' 
//                                 style={{
//                                     fontSize: '80px',
//                                     lineHeight: '120px',                                    
//                                     WebkitTextStroke: '1px rgba(0, 0, 0, 0.05)',
//                                     textStroke: '1px rgba(0, 0, 0, 0.05)'
//                                 }}>
//                                 Product Details
//                             </h2>
//                             <h2 
//                                 className='font-bold text-transparent whitespace-nowrap block md:hidden' 
//                                 style={{
//                                     fontSize: '35px',
//                                     lineHeight: '120px',                                    
//                                     WebkitTextStroke: '1px rgba(0, 0, 0, 0.05)',
//                                     textStroke: '1px rgba(0, 0, 0, 0.05)'
//                                 }}>
//                                 T-shirt
//                             </h2>
//                         </div>

//                         {/* النص الرئيسي - تظهر Product Details على الكمبيوتر و T-shirt على الموبايل */}
//                         <h1 
//                             className='font-semibold text-[#020202] relative z-10 hidden md:block'
//                             style={{
//                                 fontSize: '32px',
//                                 width:'247px',
//                                 lineHeight: '48px'
//                             }}>
//                             Product Details
//                         </h1>
//                         <h1 
//                             className='font-semibold text-[#020202] relative z-10 block md:hidden'
//                             style={{
//                                 fontSize: '20px',
//                                 width:'71px',
//                                 lineHeight: '30px'
//                             }}>
//                             T-shirt
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from 'react'

declare module 'react' {
    interface CSSProperties {
        WebkitTextStroke?: string;
        textStroke?: string;
    }
}

export default function ProductDetails() {
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

            {/* نسخة الكمبيوتر - الخلفية الأساسية */}
            <div className='relative w-full h-[193px] overflow-hidden hidden md:block'>
                <img
                    src={background}
                    alt="Background for Product Details"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='relative text-center px-4'>
                        {/* طبقة التظليل الكبيرة */}
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
                                Product Details
                            </h2>
                        </div>

                        {/* النص الرئيسي */}
                        <h1
                            className='font-semibold text-[#020202] relative z-10'
                            style={{
                                fontSize: '32px',
                                fontFamily: 'Poppins',
                                width: '247px',
                                lineHeight: '48px'
                            }}>
                            Product Details
                        </h1>
                    </div>
                </div>
            </div>

            {/* نسخة الموبايل - مع الخلفية verticalmobile */}
            <div className='relative w-full h-[193px] overflow-hidden block md:hidden'>
                <img
                    src={verticalmobile}
                    alt="Mobile background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='relative text-center px-4'>
                        {/* طبقة التظليل الكبيرة للموبايل */}
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
                                T-shirt
                            </h2>
                        </div>

                        {/* النص الرئيسي للموبايل */}
                        <h1
                            className='font-semibold text-[#020202] relative z-10'
                            style={{
                                fontSize: '20px',
                                fontFamily: 'Poppins',
                                width: '71px',
                                lineHeight: '30px'
                            }}>
                            T-shirt
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}