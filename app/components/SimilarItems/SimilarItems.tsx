'use client';
import React, { useState, useEffect } from "react";
import { useLanguage } from '../../contexts/LanguageContext';
import { t } from '../../i18n';
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    nameKey: 'similar.product1Name',
    categoryKey: 'similar.productCategoryDresses',
    price: 900,
    oldPrice: 1300,
    rating: 4.5,
    reviews: 2910,
    image: "/3.png",
    colors: ["#000000", "#ffffff", "#c4a69f"]
  },
  {
    id: 2,
    nameKey: 'similar.product2Name',
    categoryKey: 'similar.productCategoryDresses',
    price: 900,
    oldPrice: 1300,
    rating: 4.5,
    reviews: 2910,
    image: "/2.png",
    colors: ["#f0f0f0", "#c4a69f", "#000000"]
  },
  {
    id: 3,
    nameKey: 'similar.product3Name',
    categoryKey: 'similar.productCategoryDresses',
    price: 900,
    oldPrice: null,
    rating: 4.5,
    reviews: 2910,
    image: "/3.png",
    colors: ["#6b4f2b", "#c4a69f", "#000000"]
  },
  {
    id: 4,
    nameKey: 'similar.product4Name',
    categoryKey: 'similar.productCategoryDresses',
    price: 900,
    oldPrice: null,
    rating: 4.5,
    reviews: 2910,
    image: "/4.png",
    colors: ["#6b4f2b", "#c4a69f", "#000000"]
  },
  {
    id: 5,
    nameKey: 'similar.product5Name',
    categoryKey: 'similar.productCategoryDresses',
    price: 900,
    oldPrice: null,
    rating: 4.5,
    reviews: 2910,
    image: "/5.png",
    colors: ["#6b4f2b", "#c4a69f", "#000000"]
  }
];

export default function SimilarItems() {
  const { locale } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());

  const fav = "/love2.png";
  const favSolid = "/solidlove.png";
  const bagAdd = "/bag-add.png";
  const star = "/star.png";
  const bagRemove = "/bagremove.png";

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 2; 
    if (window.innerWidth < 768) return 2; 
    if (window.innerWidth < 1024) return 3;
    return 4; 
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isRtl = locale === 'ar';

  const productsToRender = products;
  const maxIndex = Math.max(0, productsToRender.length - itemsPerView);

  const handlePrev = () => {
    if (isRtl) {
      setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    } else {
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (isRtl) {
      setCurrentIndex(prev => Math.max(0, prev - 1));
    } else {
      setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    }
  };

  const toggleFavorite = (id:number) => {
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

  const toggleCart = (id:number) => {
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

  const calculateDiscount = (price:number, oldPrice:number) => {
    if (!oldPrice) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h3 className="text-[16px] md:text-[24px] font-semibold mb-6">
          <span className="underline decoration-[#BE968E] underline-offset-8 decoration-4">
            {t('similar.title', locale).slice(0,3)}
          </span>
          {t('similar.title', locale).slice(3)}
        </h3>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: isRtl 
                ? `translateX(${currentIndex * (100 / itemsPerView)}%)`
                : `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {productsToRender.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 pe-45 sm:px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white overflow-hidden mx-auto w-[175px] h-[344px] md:w-[288px] md:h-[384px]">
                  <div className="border border-gray-100 rounded-2xl overflow-hidden">
                    
                    <div className="relative px-2 sm:px-3 pt-2 sm:pt-3 bg-white">
                      <div className="flex justify-between items-start">
                        {product.oldPrice ? (
                          <div className="text-[#BE968E] border border-[#BE968E] rounded-lg text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1">
                            {calculateDiscount(product.price, product.oldPrice)}% {t('similar.off', locale)}
                          </div>
                        ) : (
                          <div></div>
                        )}
                        <div className="flex gap-1 sm:gap-2">
                          <button
                            onClick={() => toggleCart(product.id)}
                            className="bg-white border-1 border-[#BE968E] p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition"
                          >
                            <img
                              src={cart.has(product.id) ? bagRemove : bagAdd}
                              alt={cart.has(product.id) ? "Remove from cart" : "Add to cart"}
                              className="w-4 h-4 sm:w-5 sm:h-5"
                            />
                          </button>
                          <button
                            onClick={() => toggleFavorite(product.id)}
                            className="bg-white p-1.5 sm:p-2 border-1 border-[#BE968E] rounded-lg hover:bg-gray-50 transition"
                          >
                            <img
                              src={favorites.has(product.id) ? favSolid : fav}
                              alt={favorites.has(product.id) ? "Remove from favorites" : "Add to favorites"}
                              className="w-4 h-4 sm:w-5 sm:h-5"
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="px-0 pt-2 flex-1">
                      <div 
                        className="relative overflow-hidden h-[140px] sm:h-[200px]"
                      >
                        <img
                          src={product.image}
                          alt={product.nameKey}
                          className="w-full h-full object-contain px-2 sm:px-4"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div className="p-2 sm:p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[10px] sm:text-xs text-gray-500">{t(product.categoryKey as any, locale)}</p>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <span className="text-yellow-400 text-sm">
                          <img src={star} alt="Star rating" className="w-3 h-3 sm:w-4 sm:h-4" />
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium">{product.rating}</span>
                        <span className="text-[10px] sm:text-xs text-gray-400">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-[10px] sm:text-xs font-medium text-gray-900 mb-2 line-clamp-2" style={{ minHeight: '1.5rem' }}>
                      {t(product.nameKey as any, locale)}
                    </h3>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-sm sm:text-base font-bold text-gray-900">
                          AED {product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                            AED {product.oldPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-0.5 sm:gap-1 md:justify-end">
                        {product.colors.slice(0, 3).map((color, idx) => (
                          <div
                            key={idx}
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-200"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <span className="text-[10px] sm:text-xs text-gray-500 ml-1">
                            +{product.colors.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {productsToRender.length > itemsPerView && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={isRtl ? handleNext : handlePrev}
              disabled={isRtl ? currentIndex === 0 : currentIndex === 0}
              className={`p-3 rounded-full transition-all ${(isRtl ? currentIndex === 0 : currentIndex === 0)
                ? 'bg-gray-200 cursor-not-allowed opacity-50'
                : 'bg-[#BE968E] hover:bg-[#A87F78] text-white'
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={isRtl ? handlePrev : handleNext}
              disabled={isRtl ? currentIndex === maxIndex : currentIndex === maxIndex}
              className={`p-3 rounded-full transition-all ${(isRtl ? currentIndex === maxIndex : currentIndex === maxIndex)
                ? 'bg-gray-200 cursor-not-allowed opacity-50'
                : 'bg-[#BE968E] hover:bg-[#A87F78] text-white'
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}