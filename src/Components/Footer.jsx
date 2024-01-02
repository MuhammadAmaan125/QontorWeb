import React from 'react'

function Footer() {
  return (
    <>
    <footer class="text-white body-font bg-black">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
   
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left  order-first">
    
      <div class="lg:w-[33%] md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-[#f36f21] tracking-widest text-lg mb-3">Useful links</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Submit your paper</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Shop Books & Journals
</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Open access</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">View all products</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Elsevier Connect</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-[33%] md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-[#f36f21] tracking-widest text-lg mb-3">Support</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Resource center</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Customer support</a>
          </li>
         
        </nav>
      </div>
      <div class="lg:w-[33%] md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-[#f36f21]  tracking-widest text-lg mb-3">About</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px] ">About Elsevier</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Careers</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Newsroom</a>
          </li>
          <li>
            <a class="text-white hover:ml-1 duration-300 transition-all ease-in-out text-[14px]">Advertising, reprints & supplements</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div class="container mx-auto py-4 px-5 flex flex-wrap items-center flex-col sm:flex-row">
     <img src="data:image/png;base64,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" alt="" className='w-25 h-12 object-cover' />
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="#f36f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="#f36f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="#f36f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="#f36f21" stroke="#f36f21" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    
    </>
  )
}

export default Footer