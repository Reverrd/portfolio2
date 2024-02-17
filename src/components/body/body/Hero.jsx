import { useState, useEffect } from 'react'
import { KeyboardDoubleArrowUp } from '@mui/icons-material'
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
    <div id="home" className="h-screen w-full bg-cyan-800 flex items-center justify-center relative">
    <div className="w-3/4  flex flex-col items-center ">
        <div className="image">
            <img className='bg-slate-500 ' src="./assets/Myself.jpg" alt="" />
        </div>
        <div className='text-white'>
          hello 🙂, I am Promise
        </div>
        <div className='text-slate-100 text-4xl font-medium text-center '>
            A Frontend Developer<br/> specialized in React
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
