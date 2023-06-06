import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    
    <div className='bg-[#3098F3] w-[100%] h-screen'>
     
   <div className='flex lg:flex-row  min-[320px]:flex-col justify-evenly min-[320px]:pt-[30px]   lg:pt-[100px]'> 
   
   <div className='lg:mt-[120px] lg:text-left min-[320px]:mb-10 min-[320px]:text-center   text-white font-font'>
<p className='min-[320px]:text-[25px] lg:text-[40px]'>Welcome !</p>
      <h1 className=' min-[320px]:text-[40px] lg:text-[64px] font-light leading-none'> 
        CodeVista Solutions
        
        </h1>
        <p className='min-[320px]:text-[20px] min-[320px]:mt-5 lg:text-[35px] font-bold text-[#FFCC00]'>
        Empowering Your Digital Future.
        </p>
        </div>
        <div className='min-[320px]:m-4 md:mx-auto lg:mx-0' >
          <Image src={'/o.png'
          }  height={520} width={520} alt=''/>
        </div>

   </div>
     
     
 </div>
        
    
    
    </>
  )
}
