"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  { id: 1, name: "Item 1", category: "Dresses", price: 900, oldPrice: 1300, rating: 4.5, reviews: 2910, image: "/pro1.png", colors: ["#000000", "#ffffff", "#c4a69f"] },
  { id: 2, name: "Item 2", category: "Dresses", price: 900, oldPrice: 1300, rating: 4.5, reviews: 2910, image: "/pro2.png", colors: ["#f0f0f0", "#c4a69f", "#000000"] },
  { id: 3, name: "Item 3", category: "Dresses", price: 900, oldPrice: null, rating: 4.5, reviews: 2910, image: "/pro3.png", colors: ["#6b4f2b", "#c4a69f", "#000000"] },
  { id: 4, name: "Item 4", category: "Dresses", price: 900, oldPrice: null, rating: 4.5, reviews: 2910, image: "/pro3.png", colors: ["#6b4f2b", "#c4a69f", "#000000"] },
  { id: 5, name: "Item 5", category: "Dresses", price: 900, oldPrice: null, rating: 4.5, reviews: 2910, image: "/pro3.png", colors: ["#6b4f2b", "#c4a69f", "#000000"] },
  { id: 6, name: "Item 6", category: "Dresses", price: 900, oldPrice: null, rating: 4.5, reviews: 2910, image: "/pro3.png", colors: ["#6b4f2b", "#c4a69f", "#000000"] },
];

export default function SimilarItems() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <div className="w-full mt-6 mb-10 ">
      <h2 className="text-lg font-semibold mb-4 border-b-2 border-gray-300 inline-block pb-1">
        Similar Items
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {products.map((product, idx) => (
            <div key={idx} className="min-w-[25%] p-2">
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-2">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={160}
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer">
                    ❤️
                  </div>
                  {product.oldPrice && (
                    <div className="absolute top-2 left-2 bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded">
                      25% OFF
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">{product.category}</p>
                  <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mt-1 text-yellow-500 text-xs">
                    <span>⭐ {product.rating}</span>
                    <span className="ml-1 text-gray-400">({product.reviews})</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-semibold">AED {product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-xs">
                        AED {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex mt-2 gap-1">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        style={{ backgroundColor: color }}
                        className="w-4 h-4 rounded-full border border-gray-300"
                      ></span>
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-gray-500 text-xs ml-1">
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

      {/* Pagination arrows below */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`p-2 rounded-full shadow ${currentPage === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-[#BE968E]"}`}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={`p-2 rounded-full shadow ${currentPage === totalPages - 1 ? "bg-gray-200 cursor-not-allowed" : "bg-[#BE968E]"}`}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
