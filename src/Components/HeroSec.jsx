import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';














function HeroSec() {





    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 2000,  // Set the autoplay speed in milliseconds (e.g., 3000 ms = 3 seconds)
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
         ]
      };



      const images = [
        'https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?w=740&t=st=1701015383~exp=1701015983~hmac=1b7a5ccd688fa45cec7b308f1f3f7cf2cb6c1a9ff6e5bc26ce4a4b7c2c508bd1',
        'https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?w=740&t=st=1701015413~exp=1701016013~hmac=f011f1ae542a8fbb57541f2eb459f056a371515d433a90ac31463819a72585c7',
        'https://img.freepik.com/free-photo/books-stack-with-dark-background_23-2148898287.jpg?w=740&t=st=1701015447~exp=1701016047~hmac=8463e743ca05d01ef46ed2542e7d749d5021c455fe84155d19f18084c9fbf6a2',
        // Add more image URLs as needed
      ];

      
      useEffect(() => {
        import('slick-carousel/slick/slick.css');
        import('slick-carousel/slick/slick-theme.css');
      }, []);





  return (
    <>

<div className='relative'>
<img src="https://images.ctfassets.net/o78em1y1w4i4/ZrvEoqhJGDwTNZ3h91tcP/d8ca36316f7a520f9ac977137c2c1c87/header-background-desktop.webp?fm=webp&w=2048&q=25"
 className='md:h-[650px] h-[950px]  w-full'  alt="" />


<div className='absolute flex md:flex-row flex-col  w-full  lg:p-24 p-6  top-0 bottom-0'> 

<div className='md:w-1/2 w-full ' >
<h1 className='lg:text-7xl md:text-6xl text-3xl text-white'>For the benefit  <span className='text-[#ff4203]'> <br />of society</span></h1>
<p className='text-white mt-3 md:text-2xl text-base flex-wrap'>We help researchers and healthcare professionals advance science and improve healthcare outcomes.</p>
</div>


<div className='md:w-1/2 w-[100%] overflow-hidden '>
<Slider className='rounded-xl' {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-[90%]  gap-2  ">
            <img src={image} alt={`Slide ${index + 1}`} className="w-[95%] h-96 object-cover rounded-xl" />
          </div>
        ))}
      </Slider>
</div>
</div>

 
  
  <div class="absolute w-full bottom-0 right-0 left-0 container px-5 py-10 mx-auto">
  <h1 className='mb-4 text-white'>I Want to...</h1>

    
    <div class="flex flex-wrap bg-[#0003] rounded-lg  -m-2">


      <div class="p-2 lg:w-1/5 md:w-1/2 w-full">
        <div class="h-full flex items-center   rounded-lg">
          <img alt="team" class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.ctfassets.net/o78em1y1w4i4/6rW0QJoLHXXlihNjd2p8xH/6aa99c9a890f6c66e611bc25f2e07045/icon-publish.svg"/>
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">Publish with Quantum</h2>
          </div>
        </div>
      </div>


      <div class="p-2 lg:w-1/5 md:w-1/2 w-full">
        <div class="h-full flex items-center    rounded-lg">
          <img alt="team" class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.ctfassets.net/o78em1y1w4i4/2xXJ4cjwb8VlmR3oBk1iXI/831fd8531a316936da537611c5f8c51a/icon-find-journal.svg"/>
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">Find a journal article</h2>
          </div>
        </div>
      </div>


      <div class="p-2 lg:w-1/5 md:w-1/2 w-full">
        <div class="h-full flex items-center    rounded-lg">
          <img alt="team" class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.ctfassets.net/o78em1y1w4i4/4FWjwbNNXp7fEeR5oaEBqf/8691a9f766ce0788a0a4e38ba92b0c90/icon-discover-products.svg"/>
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">Discover products</h2>
          </div>
        </div>
      </div>



      <div class="p-2 lg:w-1/5 md:w-1/2 w-full">
        <div class="h-full flex items-center   rounded-lg">
          <img alt="team" class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.ctfassets.net/o78em1y1w4i4/4uYbKu0nDbjtBdwctcqMHT/78273731e863dac14235639238cdc8e2/icon-shop-books.svg"/>
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">Shop books & journals</h2>
          </div>
        </div>
      </div>



      <div class="p-2 lg:w-1/5 md:w-1/2 w-full">
        <div class="h-full flex items-center   rounded-lg">
          <img alt="team" class="w-12 h-11 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="      https://images.ctfassets.net/o78em1y1w4i4/5P70GacJvamuTGS8I2mKKS/1c3d968e6220685c9a0c9a488baf70d7/icon-find-job.svg
"/>
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">Find a job</h2>
          </div>
        </div>
      </div>







  
      
    </div>
  </div>

      









</div>






      
    </>
  )
}

export default HeroSec
