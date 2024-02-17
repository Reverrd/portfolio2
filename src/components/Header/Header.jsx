
import { Close, GitHub, LinkedIn, Menu, Twitter } from '@mui/icons-material'
import { useEffect, useState } from 'react';
export default function Header() {
  
  
  const [isClicked, setIsClicked]= useState(false)

  // useEffect(()=>{
  //   const handleClickOutside = (event)=>{
  //     isClicked && !event.target.closest('.clickedMenu') ?
  //     setIsClicked(false):null
  //   }
  
  // document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [isClicked]);
  
  const menuIcon = document.getElementById('menu')
 
    const menuClick = ()=>{
     setIsClicked(true)
     menuIcon
    }

    const closeClick = ()=>{
      setIsClicked(false)
    }
  const handleClick = (anchor)=>{
    const id = `${anchor}`;
    const element = document.getElementById(id);
    element? element.scrollIntoView({
      behavior:'smooth',
      block:'start',
    }): null;
  }

  const clickedMenu = 
    
      isClicked && (
        <>
        <div className='clickedMenu absolute bg-gray-900 bg-opacity-50 w-screen h-screen z-30 right-0 top-0 '>
        </div>
        <div className=' text-2xl  w-5/12 bg-white flex flex-col absolute top-12 right-0 text-black z-50'>
        <div
        onClick={closeClick} className='flex justify-end pb-6'><Close className='text-lg! cursor-pointer'/></div>
        <div onClick={()=>handleClick('project')}  className='cursor-pointer pb-5 pl-4'>Project</div>
        <div onClick={()=>handleClick('contact')} className='cursor-pointer pb-5 pl-4' >Contact Me</div>
        <div className='pb-5 pl-4'>Resume</div>
      </div>
      </>
      )
    
    const socials = [
        {
          id:1,
          icon: <GitHub />,
          url:'http://github.com/Reverrd'
        },
        {
          id:2,
          icon: <LinkedIn />,
          url:'http://linkedin.com/in/promise-obioma' 
        },
        {
            id:3,
            icon: <Twitter />,
            url:'http://twitter.com' 
        }
      ]
  return (
    <>
    <div id='headContainer' className=" bg-slate-950  h-12 sticky top-0 z-20 bottom-3/4 ">
    <div id="headWrapper" className='flex text-white justify-between items-center h-12 px-10 relative  '>
    <div className='flex '>
      {
        socials.map((social)=>{
            return(
            <div className='mr-5 hover:cursor-pointer' key={social.id} href={social.url}>
                {social.icon}
            </div>
        )}

        )
      }
      
    </div>
    <div  className='right hover:cursor-pointer'>
      <span onClick={()=>handleClick('project')} className='ml-5 lg:inline md:inline sm:hidden xxs:hidden'>Projects</span>
      <span onClick={()=>handleClick('contact')} className='ml-5 lg:inline md:inline sm:hidden xxs:hidden'>Contact Me</span>
      <span className='ml-5 lg:inline md:inline sm:hidden xxs: hidden '>Resume</span>
      <span 
      value={menuIcon}
      onClick={isClicked?closeClick:menuClick} 
      id='menu' className=' ml-5 lg:hidden md:hidden z-60'>{isClicked ?null : <Menu />}</span>
     
    </div>
   {clickedMenu}
   
    </div>
    </div>
   
    </>
  )
}
