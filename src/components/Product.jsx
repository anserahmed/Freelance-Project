import React from 'react'



export default function Product(props) {
  return (
    <div class="  gap-8 rounded-xl items-center pb-6 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
        {/* <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/> */}
        <img class="w-full rounded-lg" src={props.pic} alt="dashboard image"/>
        <div class="  md:mt-0">
            <h2 class="mb-4 mt-4 text-xl font-semibold tracking-tight font-extrabold myfont text-black">Product Heading.</h2>
            <p class="mb-6 mt-4 font-light text-gray-900 md:text-lg ">Our facial recognition system (FRS) is an advanced, automated, and adaptive solution designed to detect and recognize faces from a pre-encoded face database. It seamlessly handles various types of input data, including real-time video feeds, archived videos, images, and digital photographs, ensuring robust performance across different scenarios. </p>
            <a href="#" class="inline-flex items-center  hover:text-black text-red-600   focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm text-center">
                View Product
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
  )
}
