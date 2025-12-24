import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails/ProductDetails";

export default function Home() {
  return (
    <div className=" w-full min-h-screen">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <div>
        <ProductDetails />
      </div>
    </div>
    
  );
}