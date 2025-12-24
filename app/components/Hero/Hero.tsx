// 'use client';
// import React, { useState } from 'react';

// export default function ProductDetails() {
//     const [quantity, setQuantity] = useState(1);
//     const [selectedColor, setSelectedColor] = useState('blue');
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const bagadd = '/bag-add.png';
//     const love2 = '/love2.png';
//     const shoppingbag2 = '/shoppingbag2.png';
//     const young1 = '/young1.png';
//     const hoodie = '/hoodie.png';
//     const hoodie2 = '/hoodie2.png';
//     const arrow = '/arrow.png';

//     const images = [young1, hoodie, hoodie2];

//     const colors = [
//         { name: 'red', code: '#EF4444' },
//         { name: 'blue', code: '#93C5FD' },
//         { name: 'olive', code: '#84817A' },
//         { name: 'lightblue', code: '#BFDBFE' },
//         { name: 'gray', code: '#6B7280' }
//     ];

//     const handlePrevImage = () => {
//         setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     };

//     const handleNextImage = () => {
//         setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     };

//     const increaseQuantity = () => setQuantity(prev => prev + 1);
//     const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

//     return (
//         <div className="min-h-screen bg-white p-8">
//             <div className="px-4 py-4 md:px-8 lg:px-8 mb-8 rounded-xl" style={{ backgroundColor: '#ECECEC66' }}>        <div className="flex items-center gap-2 text-[16px]">
//                 <span className="text-[#020202]">Home</span>
//                 <span className="text-[#020202]"><img src={arrow} alt="" /></span>
//                 <span className="text-[#020202]">Our Category</span>
//                 <span className="text-[#020202]"><img src={arrow} alt="" /></span>
//                 <span className="text-[#8A8A8A]">Product Details</span>
//             </div>
//             </div>
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex flex-col lg:flex-row gap-[5]">
//                     {/* Left Side - Images */}
//                     <div className="w-full lg:w-1/2">
//                         {/* Main Image */}
//                         <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl overflow-hidden mb-6" style={{ width: '524px', height: '565px', maxWidth: '100%' }}>
//                             <div className='absolute bottom-0 top-16 left-0 right-0 flex justify-center items-center'>
//                                 <img
//                                     src={images[currentImageIndex]}
//                                     alt="Product"
//                                     className='m-auto top-0 object-contain '
//                                 />
//                             </div>
//                             {/* Navigation Buttons */}
//                             <button
//                                 onClick={handlePrevImage}
//                                 className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition"
//                             >
//                                 <span className="text-gray-600 text-2xl font-light">‹</span>
//                             </button>
//                             <button
//                                 onClick={handleNextImage}
//                                 className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition"
//                                 style={{ backgroundColor: '#BE968E' }}
//                                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A87E76'}
//                                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#BE968E'}
//                             >
//                                 <span className="text-white text-2xl font-light">›</span>
//                             </button>


//                             {/* Progress Dots */}
//                             <div className="absolute top-4 left-0 right-0 px-4">
//                                 <div className="flex gap-1 w-full">
//                                     {images.map((_, index) => (
//                                         <button
//                                             key={index}
//                                             onClick={() => setCurrentImageIndex(index)}
//                                             className={`h-1 rounded-full transition-all duration-300 flex-1 ${index === currentImageIndex ? 'bg-white' : 'bg-white/40'
//                                                 }`}
//                                         ></button>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex gap-4">
//                             {images.map((img, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setCurrentImageIndex(index)}
//                                     className={`w-32 h-32 bg-gradient-to-b from-gray-100 to-gray-50 rounded-2xl overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-blue-400' : ''
//                                         }`}
//                                 >
//                                     <img
//                                         src={img}
//                                         alt={`Thumbnail ${index + 1}`}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </button>
//                             ))}
//                             <div className="w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center text-white text-2xl font-semibold">
//                                 +2
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Side - Product Details */}
//                     <div className="w-full lg:w-1/2">
//                         {/* Header with Badge and Actions */}
//                         <div className="flex items-start justify-between mb-6">
//                             <span className="px-4 py-1.5 bg-white border border-[#BE968E] rounded-full text-sm text-[#BE968E] font-medium">
//                                 T-Shirt
//                             </span>
//                             <div className="flex gap-3">
//                                 <button className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
//                                     <img src={shoppingbag2} alt="Shopping Bag" className="w-5 h-5" />
//                                 </button>
//                                 <button className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
//                                     <img src={love2} alt="Favorite" className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Product Title */}
//                         <h1 className="text-[24px] font-500 text-gray-900 mb-4 leading-tight">
//                             J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
//                         </h1>

//                         {/* Price */}
//                         <div className="flex items-baseline gap-3 mb-1">
//                             <span className="text-4xl font-bold text-gray-900">$300.00</span>
//                             <span className="text-xl text-gray-400 line-through">$360.00</span>
//                         </div>
//                         <p className="text-sm text-gray-500 mb-6">This price is exclusive of taxes.</p>

//                         {/* Description */}
//                         <p className="text-gray-600 mb-8 leading-relaxed">
//                             Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
//                         </p>

//                         {/* Type Dropdown */}
//                         <div className="mb-6">
//                             <div className="relative">
//                                 <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none text-gray-900">
//                                     <option>Cotton</option>
//                                     <option>Polyester</option>
//                                     <option>Blend</option>
//                                 </select>
//                                 <label className="absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium text-gray-700">
//                                     Type
//                                 </label>
//                                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
//                                     ▼
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Size Dropdown */}
//                         <div className="mb-8">
//                             <div className="relative">
//                                 <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none text-gray-900">
//                                     <option>2Xl</option>
//                                     <option>XL</option>
//                                     <option>L</option>
//                                     <option>M</option>
//                                     <option>S</option>
//                                 </select>
//                                 <label className="absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium text-gray-700">
//                                     Size
//                                 </label>
//                                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
//                                     ▼
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Colors */}
//                         <div className="mb-8">
//                             <label className="block text-sm font-semibold text-gray-900 mb-4">Colors</label>
//                             <div className="flex gap-3">
//                                 {colors.map((color) => (
//                                     <button
//                                         key={color.name}
//                                         onClick={() => setSelectedColor(color.name)}
//                                         className={`relative w-14 h-14 rounded-full transition-all ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
//                                             }`}
//                                         style={{ backgroundColor: color.code }}
//                                     >
//                                         {color.name === 'blue' && selectedColor === 'blue' && (
//                                             <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-700 whitespace-nowrap font-medium">
//                                                 Blue
//                                             </span>
//                                         )}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quantity Section */}
//                         <div className="mb-4">
//                             <div className="flex items-center gap-2 mb-3">
//                                 <span className="text-sm font-semibold text-gray-900">Quantity</span>
//                                 <span className="text-xs text-gray-500">($300.00 for Piece)</span>
//                             </div>
//                         </div>

//                         {/* Quantity Controls and Add to Cart */}
//                         <div className="flex items-center gap-4">
//                             <div className="flex items-center bg-white border border-gray-200 rounded-xl">
//                                 <button
//                                     onClick={decreaseQuantity}
//                                     className="px-5 py-3 text-gray-600 hover:bg-gray-50 text-lg"
//                                 >
//                                     −
//                                 </button>
//                                 <span className="px-6 py-3 font-semibold text-gray-900 text-lg">
//                                     {quantity.toString().padStart(2, '0')}
//                                 </span>
//                                 <button
//                                     onClick={increaseQuantity}
//                                     className="px-5 py-3 text-gray-600 hover:bg-gray-50 text-lg"
//                                 >
//                                     +
//                                 </button>
//                             </div>

//                             <span className="text-2xl font-bold text-gray-900">
//                                 ${(300 * quantity).toFixed(2)}
//                             </span>

//                             <button className="flex-1 px-6 py-3.5 text-white rounded-xl font-medium transition flex items-center justify-center gap-2"
//                                 style={{ backgroundColor: '#BE968E' }}
//                                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A87E76'}
//                                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#BE968E'}
//                             >
//                                 <span>Add To Cart</span>
//                                 <img src={shoppingbag2} alt="Cart" className="w-5 h-5 brightness-0 invert" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
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
        <div className="min-h-screen bg-white md:p-8 p-3">
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
                    {/* Left Side - Images */}
                    <div className="w-full lg:w-1/2">
                        {/* Main Image */}
                        <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl overflow-hidden mb-4 md:mb-6 h-64 sm:h-80 md:h-96 lg:h-[565px]">
                            <div className='absolute inset-0 flex justify-center items-center pt-8 md:pt-16'>
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Product"
                                    className='object-contain max-h-full'
                                />
                            </div>
                            {/* Navigation Buttons */}
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

                            {/* Progress Dots */}
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

                        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl md:rounded-2xl overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-blue-400' : ''
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-semibold">
                                +2
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                        {/* Header with Badge and Actions */}
                        <div className="flex items-start justify-between mb-4 md:mb-6">
                            <span className="px-3 md:px-4 py-1 md:py-1.5 bg-white border border-[#BE968E] rounded-full text-xs md:text-sm text-[#BE968E] font-medium">
                                T-Shirt
                            </span>
                            <div className="flex gap-2 md:gap-3">
                                <button className="w-[32px] h-[32px] md:w-11 md:h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
                                    <img src={bagadd} alt="Shopping Bag" className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                                <button className="w-[32px] h-[32px] md:w-11 md:h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
                                    <img src={love2} alt="Favorite" className="w-4 h-4 md:w-5 md:h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Product Title */}
                        <h1 className="text-[16px] sm:text-xl md:text-2xl font-500 text-gray-900 mb-3 md:mb-4 leading-tight">
                            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
                        </h1>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 md:gap-3 mb-1">
                            <span className="text-[20px] sm:text-3xl md:text-[20px] font-bold text-gray-900">$300.00</span>
                            <span className="text-[16px] sm:text-xl md:text-[16px] text-gray-400 line-through">$360.00</span>
                        </div>
                        <p className="text-xs md:text-[12px] text-gray-500 mb-4 md:mb-6">This price is exclusive of taxes.</p>

                        {/* Description */}
                        <p className="text-[12px] md:text-[14px] text-gray-600 mb-6 md:mb-8 leading-relaxed">
                            Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
                        </p>

                        {/* Type Dropdown */}
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

                        {/* Size Dropdown */}
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

                        {/* Colors */}
                        <div className="mb-6 md:mb-8">
                            <label className="block text-[20px] font-semibold text-gray-900 mb-3 md:mb-4">Colors</label>
                            <div className="flex gap-2 md:gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full transition-all ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                                            }`}
                                        style={{ backgroundColor: color.code }}
                                    >
                                        {color.name === 'blue' && selectedColor === 'blue' && (
                                            <span className="absolute -bottom-6 md:-bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-700 whitespace-nowrap font-medium">
                                                Blue
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Section */}
                        <div className="mb-3 md:mb-4">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-sm font-semibold text-gray-900">Quantity</span>
                                <span className="text-xs text-gray-500">($300.00 for Piece)</span>
                            </div>
                        </div>

                        {/* Quantity Controls and Add to Cart */}
                        <div className="flex flex-row sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                            <div className="flex items-center justify-between sm:justify-start bg-white border border-gray-200 rounded-xl">
                                <button
                                    onClick={decreaseQuantity}
                                    className="px-4 md:px-5 py-2.5 md:py-3 text-gray-600 hover:bg-gray-50 text-lg"
                                >
                                    −
                                </button>
                                <span className="px-4 md:px-6 py-2.5 md:py-3 font-semibold text-gray-900 text-lg">
                                    {quantity.toString().padStart(2, '0')}
                                </span>
                                <button
                                    onClick={increaseQuantity}
                                    className="px-4 md:px-5 py-2.5 md:py-3 text-gray-600 hover:bg-gray-50 text-lg"
                                >
                                    +
                                </button>
                            </div>

                            <span className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                                ${(300 * quantity).toFixed(2)}
                            </span>
                                <div>
                            <button className="flex-1 px-4 md:px-6 py-3 md:py-3.5 text-white rounded-xl font-medium transition flex items-center justify-center gap-2 text-sm md:text-base"
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