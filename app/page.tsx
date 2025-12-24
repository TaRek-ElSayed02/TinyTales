import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";
import SimilarItems from "./components/SimilarItems/SimilarItems";

export default function Home() {
  return (
    <div className=" w-full min-h-screen">
      <div className="max-w-full md:max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <div>
        <ProductDetails />
      </div>
      <div className="max-w-full md:max-w-[1350px] mx-auto px-2 sm:px-6 lg:px-8">
        <Hero />
        <Reviews />
        <SimilarItems />
      </div>

    </div>

  );
}