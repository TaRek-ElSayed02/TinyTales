// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const products = [
//   { id: 1, name: "Item 1", category: "Dresses", price: 900, oldPrice: 1300, rating: 4.5, reviews: 2910, image: "/1.png", colors: ["#000000", "#ffffff", "#c4a69f"] },
//   { id: 2, name: "Item 2", category: "Dresses", price: 900, oldPrice: 1300, rating: 4.5, reviews: 2910, image: "/2.png", colors: ["#f0f0f0", "#c4a69f", "#000000"] },
//   { id: 3, name: "Item 3", category: "Dresses", price: 900, oldPrice: null, rating: 4.5, reviews: 2910, image: "/3.png", colors: ["#6b4f2b", "#c4a69f", "#000000"] },
//   { id: 4, name: "Item 4", category: "Dresses", price: 900, oldPrice: null, rating: 4.5, reviews: 2910, image: "/4.png", colors: ["#6b4f2b", "#c4a69f", "#000000"] },
//   { id: 5, name: "Item 5", category: "Dresses", price: 900, oldPrice: null, rating: 4.5, reviews: 2910, image: "/5.png", colors: ["#6b4f2b", "#c4a69f", "#000000"] },
// ];

// export default function SimilarItems() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 4;

//  const fav="/love2.png"
//  const favsolid="/solidlove.png"
//  const bagadd="/bag-add.png"
//  const bagremove="/bagremove.png"

//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const handlePrev = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNext = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
//   };

//   return (
//     <div className="w-full mt-6 mb-10 ">
//       <h2 className="text-lg font-semibold mb-4 border-b-2 border-gray-300 inline-block pb-1">
//         Similar Items
//       </h2>

//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentPage * 100}%)` }}
//         >
//           {products.map((product, idx) => (
//             <div key={idx} className="min-w-[25%] p-2">
//               <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-2">
//                 <div className="relative">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={200}
//                     height={160}
//                     className="object-cover rounded-lg"
//                   />
//                   <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer">
//                     ❤️
//                   </div>
//                   {product.oldPrice && (
//                     <div className="absolute top-2 left-2 bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded">
//                       25% OFF
//                     </div>
//                   )}
//                 </div>
//                 <div className="mt-2">
//                   <p className="text-xs text-gray-500">{product.category}</p>
//                   <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
//                   <div className="flex items-center mt-1 text-yellow-500 text-xs">
//                     <span>⭐ {product.rating}</span>
//                     <span className="ml-1 text-gray-400">({product.reviews})</span>
//                   </div>
//                   <div className="mt-1 flex items-center gap-2">
//                     <span className="font-semibold">AED {product.price}</span>
//                     {product.oldPrice && (
//                       <span className="text-gray-400 line-through text-xs">
//                         AED {product.oldPrice}
//                       </span>
//                     )}
//                   </div>
//                   <div className="flex mt-2 gap-1">
//                     {product.colors.map((color, idx) => (
//                       <span
//                         key={idx}
//                         style={{ backgroundColor: color }}
//                         className="w-4 h-4 rounded-full border border-gray-300"
//                       ></span>
//                     ))}
//                     {product.colors.length > 3 && (
//                       <span className="text-gray-500 text-xs ml-1">
//                         +{product.colors.length - 3}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination arrows below */}
//       <div className="flex justify-center mt-4 gap-4">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 0}
//           className={`p-2 rounded-full shadow ${currentPage === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-[#BE968E]"}`}
//         >
//           <FaChevronLeft />
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages - 1}
//           className={`p-2 rounded-full shadow ${currentPage === totalPages - 1 ? "bg-gray-200 cursor-not-allowed" : "bg-[#BE968E]"}`}
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { 
    id: 1, 
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello", 
    category: "Dresses", 
    price: 900, 
    oldPrice: 1300, 
    rating: 4.5, 
    reviews: 2910, 
    image: "/1.png", 
    colors: ["#000000", "#ffffff", "#c4a69f"] 
  },
  { 
    id: 2, 
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello", 
    category: "Dresses", 
    price: 900, 
    oldPrice: 1300, 
    rating: 4.5, 
    reviews: 2910, 
    image: "/2.png", 
    colors: ["#f0f0f0", "#c4a69f", "#000000"] 
  },
  { 
    id: 3, 
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello", 
    category: "Dresses", 
    price: 900, 
    oldPrice: null, 
    rating: 4.5, 
    reviews: 2910, 
    image: "/3.png", 
    colors: ["#6b4f2b", "#c4a69f", "#000000"] 
  },
  { 
    id: 4, 
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello", 
    category: "Dresses", 
    price: 900, 
    oldPrice: null, 
    rating: 4.5, 
    reviews: 2910, 
    image: "/4.png", 
    colors: ["#6b4f2b", "#c4a69f", "#000000"] 
  },
  { 
    id: 5, 
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello", 
    category: "Dresses", 
    price: 900, 
    oldPrice: null, 
    rating: 4.5, 
    reviews: 2910, 
    image: "/5.png", 
    colors: ["#6b4f2b", "#c4a69f", "#000000"] 
  }
];

export default function SimilarItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());

  const fav = "/love2.png";
  const favSolid = "/solidlove.png";
  const bagAdd = "/bag-add.png";
  const bagRemove = "/bagremove.png";

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  React.useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const toggleCart = (id) => {
    setCart(prev => {
      const newCart = new Set(prev);
      if (newCart.has(id)) {
        newCart.delete(id);
      } else {
        newCart.add(id);
      }
      return newCart;
    });
  };

  const calculateDiscount = (price, oldPrice) => {
    if (!oldPrice) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold inline-block border-b-2 border-gray-300 pb-2">
          Similar Items
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 mx-auto" style={{ width: '288px', height: '384px' }}>
                  {/* Image Container */}
                  <div className="relative bg-gray-100" style={{ height: '240px' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Top Actions */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      {product.oldPrice && (
                        <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          {calculateDiscount(product.price, product.oldPrice)}% OFF
                        </div>
                      )}
                      <div className="ml-auto flex gap-2">
                        <button 
                          onClick={() => toggleCart(product.id)}
                          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition"
                        >
                          <img 
                            src={cart.has(product.id) ? bagRemove : bagAdd} 
                            alt={cart.has(product.id) ? "Remove from cart" : "Add to cart"}
                            className="w-4 h-4"
                          />
                        </button>
                        <button 
                          onClick={() => toggleFavorite(product.id)}
                          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition"
                        >
                          <img 
                            src={favorites.has(product.id) ? favSolid : fav} 
                            alt={favorites.has(product.id) ? "Remove from favorites" : "Add to favorites"}
                            className="w-4 h-4"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-3" style={{ height: '144px' }}>
                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                    <h3 className="text-xs font-medium text-gray-900 mb-1 line-clamp-2" style={{ minHeight: '2rem' }}>
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-400">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base font-bold text-gray-900">
                        AED {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          AED {product.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* Colors */}
                    <div className="flex items-center gap-1">
                      {product.colors.slice(0, 3).map((color, idx) => (
                        <div
                          key={idx}
                          className="w-4 h-4 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500 ml-1">
                          +{product.colors.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        {products.length > itemsPerView && (
          <div className="hidden sm:block">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full shadow-lg transition-all ${
                currentIndex === 0
                  ? 'bg-gray-200 cursor-not-allowed opacity-50'
                  : 'bg-[#BE968E] hover:bg-[#A87F78] text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full shadow-lg transition-all ${
                currentIndex === maxIndex
                  ? 'bg-gray-200 cursor-not-allowed opacity-50'
                  : 'bg-[#BE968E] hover:bg-[#A87F78] text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation - Below carousel */}
      {products.length > itemsPerView && (
        <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full shadow-md transition-all ${
              currentIndex === 0
                ? 'bg-gray-200 cursor-not-allowed opacity-50'
                : 'bg-[#BE968E] hover:bg-[#A87F78] text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <span className="text-sm text-gray-600">
            {currentIndex + 1} / {maxIndex + 1}
          </span>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`p-3 rounded-full shadow-md transition-all ${
              currentIndex === maxIndex
                ? 'bg-gray-200 cursor-not-allowed opacity-50'
                : 'bg-[#BE968E] hover:bg-[#A87F78] text-white'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}