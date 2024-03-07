import { useState, useEffect } from 'react'
import { KeyboardDoubleArrowUp } from '@mui/icons-material'
import Typewriter from 'typewriter-effect'
import './body.scss'


export default function Hero() {
 
  const[isScrolled, setIsScrolled] = useState(false)
  useEffect(()=>{
  const handleScroll = ()=>{
    window.scrollY >100 ?
    setIsScrolled(true) : 
    setIsScrolled(false)
    
  }
  window.addEventListener('scroll', handleScroll)

  return ()=>{
    window.removeEventListener('scroll', handleScroll)
  }
},[])
  const handleClick = (target)=>{
    const id = `${target}`;
    const element = document.getElementById(id)
    element ? element.scrollIntoView({
      behavior:'smooth',
      block:'start'
    }): null
  }
  return (
    <>
    <div id="home" className="h-screen w-full  flex items-center justify-center relative">
    <div className=" flex xxs:flex-col md:flex-row items-center w-full h-full ">
      <div className="leftPart flex relative w-full h-full items-center justify-center xxs:justify-center xxs:pt-40">
        <div className="box w-72 h-72 rounded-rounded-circle bg-slate-500 absolute">
        <div className="image  ">
            <img className='absolute bottom-0 '  src="./assets/Myself.jpg" alt="" />
        </div>
        </div>
      </div>
      <div className='rightPart flex flex-col items-center xxs:pt-10 xxs:justify-center'>
        <div className='text-black font-medium'>
          hello 🙂, My name is Promise
        </div>
        <div  className='text-black md:text-4xl xxs:text-3xl font-bold text-center   '>
            A Frontend Developer<br/><span className='md:text-3xl xxs:text-2xl'> specialized in</span> <span className='font-semibold text-blue-900 md:text-3xl xxs:text-2xl' ><Typewriter
            options={{
              strings:["JavaScript","Typescript", "React js", "Next js","SCSS", "TailwindCSS"],
              autoStart:true,
              loop:true,
              delay:80
            }}
            /> </span>
        </div>
        </div>
    </div> 
    {isScrolled &&(
     <div
    
     onClick={()=>handleClick('home')} className='rounded-full border-4 fixed top-1/3 right-0 mr-5 cursor-pointer mix-blend-luminosity '>
      <KeyboardDoubleArrowUp id='arrow up' className='text-white text-xl!'  />
     </div>)}
    </div>
    </>
  )
}
