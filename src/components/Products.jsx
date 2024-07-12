import React from "react";
import Product from "./Product";
import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.webp";

export default function Products() {
  return (
    <>
      <section class=" bg-gradient-to-r  from-gray-200 via-gray-100 to-gray-200 h-full rounded-xl mb-auto mt-[5px] max-w-[1000px] mx-auto sm:px-6 lg:px-8  sm:py-8 lg:py-6 " id="products">
        <div className="mx-auto text-bold text-3xl py-5 px-5 myfont max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Our Products
          </h2>
        </div>
        <Product pic={pic1}></Product>
        <Product pic={pic2}></Product>
        <Product pic={pic3}></Product>
      </section>
    </>
  );
}
