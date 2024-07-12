import pic1 from "../assets/pic1.webp";

export default function LandingPage() {
  return (
    <>
      {/* <div className="bg-gradient-to-r  from-gray-200 via-gray-100 to-gray-200 transition text-center justify-center rounded-xl  items-center h-full">
        <div className="mx-auto max-w-7xl h-full pb-9 sm:px-6 text-center justify-center items-center lg:px-8">
          <div className="relative isolate text-center justify-center items-center overflow-hidden px-6 pt-10 sm:rounded-3xl sm:px-10 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="  text-black justify-center items-center mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold  tracking-tight text-black sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our Products today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-black-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#products"
                  className="rounded-md bg-red-600 text-white text-sm btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-100 hover:text-red-600 focus-visible:outline-white"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Doosraa */}

      <section class="bg-gradient-to-r myfont from-gray-200 via-gray-100 h-full to-gray-200 transition text-center justify-center rounded-xl   items-center ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center  mt-8 lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Boost your productivity.
          </h1>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Start using our Products today.
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 ">
            Here at Resnarts we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#products"
              class="inline-flex justify-center items-center py-3 px-5 text-base btn font-medium text-center border text-white rounded-lg bg-red-600 border-red-600  hover:bg-gray-200 hover:text-red-700  hover:border hover:border-red-600 "
            >
              Our Products
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#footer"
              class="py-3 px-5 sm:ms-4 text-sm  font-semibold border-gray-700 border  hover:bg-red-00 rounded-lg text-black hover:bg-gray-700 hover:text-white btn  "
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
