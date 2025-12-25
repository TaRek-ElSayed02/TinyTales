'use client';
import React, { useState } from 'react';

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('blue');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const bagadd = '/bag-add.png';
    const love2 = '/love2.png';
    const shoppingbag2 = '/shoppingbag2.png';
    const young1 = '/young1.png';
    const hoodie = '/hoodie.png';
    const hoodie2 = '/hoodie2.png';
    const arrow = '/arrow.png';

    const images = [young1, hoodie, hoodie2];
    
    // صور الـ thumbnails فقط (الهوديز)
    const thumbnailImages = [hoodie, hoodie2];

    const colors = [
        { name: 'red', code: '#EF4444' },
        { name: 'blue', code: '#93C5FD' },
        { name: 'olive', code: '#84817A' },
        { name: 'lightblue', code: '#BFDBFE' },
        { name: 'gray', code: '#6B7280' }
    ];

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    return (
        <div className=" bg-white md:p-8 p-3">
            <div className="px-4 py-4 md:px-8 lg:px-8 mb-4 md:mb-8 rounded-xl" style={{ backgroundColor: '#ECECEC66' }}>
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <span className="text-[#020202]">Home</span>
                    <span className="text-[#020202]"><img src={arrow} alt="" className="w-3 h-3" /></span>
                    <span className="text-[#020202]">Our Category</span>
                    <span className="text-[#020202]"><img src={arrow} alt="" className="w-3 h-3" /></span>
                    <span className="text-[#8A8A8A]">T-Shirt</span>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="w-full lg:w-1/2">
                        <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl overflow-hidden mb-4 md:mb-6 h-95 sm:h-80 md:h-96 lg:h-[565px] lg:w-[524px] ">
                            <div className='absolute inset-0 flex justify-center items-center pt-8 md:pt-16'>
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Product"
                                    className='object-contain max-h-full'
                                />
                            </div>
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition"
                            >
                                <span className="text-gray-600 text-xl md:text-2xl font-light">‹</span>
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition"
                                style={{ backgroundColor: '#BE968E' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A87E76'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#BE968E'}
                            >
                                <span className="text-white text-xl md:text-2xl font-light">›</span>
                            </button>

                            <div className="absolute top-4 left-0 right-0 px-4">
                                <div className="flex gap-1 w-full">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-1 rounded-full transition-all duration-300 flex-1 ${index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                                                }`}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-1 md:gap-4 overflow-x-auto pb-2 w-full lg:w-[524px]">
                            {thumbnailImages.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index + 1)} // +1 لأن الهوديز تبدأ من index 1 في المصفوفة الرئيسية
                                    className={`flex-1 h-31 sm:h-24 md:h-45.5 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl md:rounded-2xl overflow-hidden ${currentImageIndex === index + 1 ? 'ring-2 ring-blue-400' : ''
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                            <div className="flex-1 h-31 sm:h-24 md:h-45.5 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-semibold">
                                +2
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex flex-col">
                        <div className="flex items-start justify-between mb-4 md:mb-6">
                            <span className="px-5 md:px-4 py-2.5 md:py-1.5 bg-white border border-[#BE968E] rounded-full text-[14px] md:text-sm text-[#BE968E] md:font-medium font-[14px]">
                                T-Shirt
                            </span>
                            <div className="flex gap-2 md:gap-3">
                                <button className="w-[48px] h-[48px] md:w-11 md:h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
                                    <img src={bagadd} alt="Shopping Bag" className="w-8 h-8 md:w-5 md:h-5" />
                                </button>
                                <button className="w-[48px] h-[48px] md:w-11 md:h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
                                    <img src={love2} alt="Favorite" className="w-8 h-8 md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>

                        <h1 className="text-[16px] sm:text-xl md:text-2xl font-500 text-gray-900 mb-3 md:mb-4 leading-tight">
                            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
                        </h1>

                        <div className="flex items-baseline gap-2 md:gap-3 mb-1">
                            <span className="text-[20px] sm:text-3xl md:text-[20px] font-bold text-gray-900">$300.00</span>
                            <span className="text-[16px] sm:text-xl md:text-[16px] text-gray-400 line-through">$360.00</span>
                        </div>
                        <p className="text-xs md:text-[12px] text-gray-500 mb-4 md:mb-6">This price is exclusive of taxes.</p>

                        <p className="text-[12px] md:text-[14px] text-gray-600 mb-6 md:mb-8 leading-relaxed">
                            Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
                        </p>

                        <div className="mb-4 md:mb-6">
                            <div className="relative">
                                <select className="md:w-[50%] w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none text-gray-900 text-sm md:text-base">
                                    <option>Cotton</option>
                                    <option>Polyester</option>
                                    <option>Blend</option>
                                </select>
                                <label className="absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium text-gray-700">
                                    Type
                                </label>
                                <div className="absolute right-3 md:right-80 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <div className="relative">
                                <select className="md:w-[50%] w-full px-3 md:px-4 py-2.5 md:py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none text-gray-900 text-sm md:text-base">
                                    <option>2Xl</option>
                                    <option>XL</option>
                                    <option>L</option>
                                    <option>M</option>
                                    <option>S</option>
                                </select>
                                <label className="absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium text-gray-700">
                                    Size
                                </label>
                                <div className="absolute right-3 md:right-80 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                                    ▼
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <label className="block text-[20px] font-semibold text-gray-900 mb-3 md:mb-4">Colors</label>
                            <div className="flex gap-5 md:gap-6">
                                {colors.map((color) => (
                                    <div key={color.name} className="flex flex-col items-center">
                                        <button
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`relative w-7 h-7 md:w-[32px] md:h-[32px] rounded-full transition-all ${selectedColor === color.name ? 'ring-2 ring-offset-11 ring-[#020202]' : ''
                                                }`}
                                            style={{ backgroundColor: color.code }}
                                        >
                                        </button>
                                        {selectedColor === color.name && (
                                            <span className="mt-4 text-xs text-gray-700 whitespace-nowrap font-medium">
                                                {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-3 md:mb-4">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[20px] text-[#020202]">Quantity</span>
                                <span className="text-[16px] text-[#8A8A8A]">($300.00 for Piece)</span>
                            </div>
                        </div>

                        <div className="bottom-0 z-10 bg-white pt-4 pb-4 md:pt-6 md:pb-6 border-t border-gray-100 mt-auto">
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 w-full">
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="flex items-center justify-between bg-[#F5F5F5] border border-gray-200 rounded-xl flex-1 sm:flex-none">
                                        <button
                                            onClick={decreaseQuantity}
                                            className="bg-white px-4 py-2.5 ms-2 rounded-xl text-gray-600 hover:bg-gray-50 text-lg"
                                        >
                                            −
                                        </button>
                                        <span className="px-4 md:px-6 py-2.5 font-semibold text-gray-900 text-lg">
                                            {quantity.toString().padStart(2, '0')}
                                        </span>
                                        <button
                                            onClick={increaseQuantity}
                                            className="bg-white px-4 py-2.5 me-2 rounded-xl text-gray-600 hover:bg-gray-50 text-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <span className="md:text-xl text-[24px] text-gray-900 whitespace-nowrap">
                                        ${(300 * quantity).toFixed(2)}
                                    </span>
                                </div>

                                <button 
                                    className="sm:flex-1 md:flex-1 mt-3 px-4 md:px-6 py-5 md:py-4 text-white rounded-xl font-medium transition flex items-center justify-center gap-2 text-sm md:text-base"
                                    style={{ backgroundColor: '#BE968E' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A87E76'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#BE968E'}
                                >
                                    <span>Add To Cart</span>
                                    <img src={shoppingbag2} alt="Cart" className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}