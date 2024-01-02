import React, { useState } from 'react'



function Navbar() {




  
const [about,setabout]=useState(false)  
const [services,setservices]=useState(false)
const [community,setcommunity]=useState(false)
const [resources,setresources]=useState(false)
const [contact,setcontact]=useState(false)

const handleabout = (e) => {
  setabout(prevAbout => !prevAbout);
if(about==true){
  setcommunity(false)
  setcontact(false)
  setresources(false)
  setservices(false)
}

};
const handleservices = (e) => {
  setservices(prevAbout => !prevAbout);
  if(services==true){
    setcommunity(false)
    setcontact(false)
    setresources(false)
    setabout(false)
  }

};
const handlecommunity = (e) => {
  setcommunity(prevAbout => !prevAbout);
  if(community==true){
    setabout(false)
    setcontact(false)
    setresources(false)
    setservices(false)
  }

};
const handleresources = (e) => {
  setresources(prevAbout => !prevAbout);
  if(resources==true){
    setcommunity(false)
    setcontact(false)
    setabout(false)
    setservices(false)
  }


};
const handlecontact = (e) => {
  setcontact(prevAbout => !prevAbout);
  if(contact==true){
    setcommunity(false)
    setabout(false)
    setresources(false)
    setservices(false)
  }

};

  return (
<>


{/* Navbar Layout */}

<div className=' md:block  border-b'>

<div className="bg-black flex-wrap   md:flex text-white text-xs  p-3 px-10">
<p className='hidden lg:flex'>We'd appreciate your feedback on this new experience. </p>
<span className='text-orange-400 '>Tell us what you think</span> 
</div>

{/* navbar main layout  */}

<div className=" overflow-hidden lg:justify-center flex md:justify-between  p-3 items-center ">
<div className='lg:w-[15%] w-full '>
<img
src='data:image/png;base64,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'
alt='logo'
className='lg:w-36 w-32 mx-2'
/>
</div>

<div className='md:w-[60%] lg:block hidden '>
<ul className='flex text-[14px]  space-x-7  float-right  mr-5  cursor-pointer'>
  <li onClick={(e)=>handleabout(e)} className='hover:text-blue-700  relative hover:underline duration-300' >About Us
  </li>
  <li onClick={(e)=>handleservices(e)} className='hover:text-blue-700 hover:underline duration-300'>Services</li>
  <li onClick={(e)=>handlecommunity(e)} className='hover:text-blue-700 hover:underline duration-300'>Community</li>
  <li onClick={(e)=>handleresources(e)} className='hover:text-blue-700 hover:underline duration-300'>Resources</li>
  <li onClick={(e)=>handlecontact(e)} className='hover:text-blue-700 hover:underline duration-300'>Contact Us</li>

</ul>
</div>




<div className='flex lg:w-[25%] w-[55%] items-center   '>
<div className='bg-[#0056d6] rounded-lg p-3 text-[15px] text-center  justify-center duration-300 hover:bg-[#003dd6] lg:flex hidden'>
<button className=' text-white outline-none flex flex-nowrap leading-none'>Publish with us</button>
</div>

<div className='flex lg:gap-3 gap-4  p-3 float-right'>
<svg fill="none" height="22" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g stroke="#2a353d" stroke-linejoin="round" stroke-width="1.5"><path d="m17.5 17.5 4.5 4.5" stroke-linecap="round"/><path d="m20 11c0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9 4.9706 0 9-4.0294 9-9z" stroke='black' /></g></svg>
<svg height="24" preserveAspectRatio="xMinYMin" viewBox="-3 -4 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-13.038-14.077a.962.962 0 0 1 0-1.923h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77h-9.345a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39l-1.442 5.768a1.923 1.923 0 0 1 -1.866 1.457h-7.512a3.846 3.846 0 0 1 -3.755-3.012l-1.254-5.642z"/></svg>
<svg fill="none" height="22" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m3 12h19"/><path d="m12 2.2019c2.4744 2.52508 4 5.98336 4 9.798 0 3.8146-1.5256 7.2729-4 9.7979"/><path d="m12 2.2019c-2.47437 2.52508-4 5.98336-4 9.798 0 3.8146 1.52563 7.2729 4 9.7979"/></g></svg>
<svg width="22" height="22" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
    fill="currentColor"
  />
</svg>

<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
className='lg:hidden block w-5 h-5'

><path d="m496 384h-336v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16h-80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16h-336c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-208v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16h-208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
</div>



</div>

</div>

{/* navbar main layout end  */}


</div>



<div className={` ${about  ? ' lg:block focus:block  hidden  ' : ' hidden '}  w-32 h-80 justify-center items-center bg-white absolute top-28 bottom-0 right-0 left-[525px] z-50 p-5`}> 



<div className='flex flex-col gap-5'>
  <h1 className='font-bold text-lg' >
About Us 
</h1>
  <ul className='space-y-8'>
    <li>
Our Story
</li>
    <li>Our Team
</li>
    <li>Our Values
</li>
    <li>Our Technology</li>
  </ul>
</div>











</div>

<div className={` ${services  ? ' lg:block focus:block  hidden  ' : ' hidden '}  w-full h-96 bg-white absolute top-28 bottom-0 right-0 left-0 z-50 p-5`}> 



<div className='grid grid-cols-5 gap-10'>

<div className='flex flex-col gap-5'>
  <h1 className='font-bold text-lg' >For Researchers</h1>
  <ul className='space-y-8'>
    <li>Open Access Publishing</li>
    <li>Research Tools & Resources</li>
    <li>Professional Development</li>
    <li>Impact Amplification</li>
  </ul>
</div>

<div className='flex flex-col gap-5'>
  <h1 className='font-bold text-lg' >For Publishers 
</h1>
  <ul className='space-y-8'>
    <li>Journal Management Platform

</li>
    <li>Analytics & Reporting
</li>
    <li>Global Reach & Impact
</li>
    <li>Collaboration & Support</li>
  </ul>
</div>

<div className='flex flex-col gap-5'>
  <h1 className='font-bold text-lg' >For Knowledge Seekers 
</h1>
  <ul className='space-y-8'>
    <li>Article Discovery
</li>
    <li>Personalized Research Assistant
</li>
    <li>News & Events
</li>
    <li>Open Access Initiatives</li>
  </ul>
</div>

<div className='flex flex-col gap-5'>
  <h1 className='font-bold text-lg' >Journals & Books </h1>
  <ul className='space-y-8'>
    <li>Journals

</li>
    <li>Books
</li>
    <li>Browse by Subject</li>

  </ul>
</div>

<div className='flex flex-col gap-5'>
  <h1 className='font-bold text-lg' >Affiliate</h1>
  <ul className='space-y-8'>
    <li>Manuscript Submission</li>
    <li>Peer Review Process
</li>
    <li>Editorial Support</li>
<li>Marketing & Outreach</li>
  </ul>
</div>


</div> 


</div>




    </>
  )
}

export default Navbar














 