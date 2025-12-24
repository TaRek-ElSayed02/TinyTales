import React from 'react'
declare module 'react' {
  interface CSSProperties {
    WebkitTextStroke?: string;
    textStroke?: string;
  }
}

export default function ProductDetails() {
    const background = "/background.jpeg";
    
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                
                body {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <div className='relative w-full h-[193px] overflow-hidden'>
                <img
                    src={background}
                    alt="Background for Product Details"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                

                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='relative text-center px-4'>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                            <h2 
                                className='font-bold text-transparent whitespace-nowrap' 
                                style={{
                                    fontSize: '80px',
                                    lineHeight: '120px',
                                    WebkitTextStroke: '1px rgba(0, 0, 0, 0.05)',
                                    textStroke: '1px rgba(0, 0, 0, 0.05)'
                                }}>
                                Product Details
                            </h2>
                        </div>
                        
                        <h1 
                            className='font-semibold text-[#020202] relative z-10'
                            style={{
                                fontSize: '32px',
                                lineHeight: '48px'
                            }}>
                            Product Details
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}