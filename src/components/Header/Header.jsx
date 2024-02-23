import { useState } from 'react';
import { Close, GitHub, LinkedIn, Menu, Twitter } from '@mui/icons-material'
import './header.scss'
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
  
  // const menuIcon = document.getElementById('menu')
 
    const menuClick = ()=>{
     setIsClicked(true)
    //  menuIcon
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
        <div className='clickedNav text-white navPop text-2xl   h-screen  flex flex-col items-center absolute top-12 right-0  z-50 '>
         <div onClick={closeClick}  className='close border-b border-slate-600 flex justify-center hover:bg-red-600 active:bg-red-500 py-8'>
        <div
        className=''><Close className='text-lg! cursor-pointer'/></div>
        </div> 
         <div onClick={()=>handleClick('project')} className='project flex border-b border-slate-600 justify-center py-6 hover:bg-cyan-700 active:bg-cyan-600'>
        <div   className='   cursor-pointer   '>Project</div>
        </div> 
        <div onClick={()=>handleClick('contact')} className='contact flex border-b border-slate-600 justify-center py-6 hover:bg-cyan-700 active:bg-cyan-600'> 
        <div  className='  cursor-pointer ' >Contact Me</div>
        </div>
        <div className='resume flex border-b border-slate-600 justify-center py-6 hover:bg-cyan-700 active:bg-cyan-600'>
        <div className='cursor-pointer'>Resume</div>
        </div> 
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
            url:'http://twitter.com/PromiseObioma3' 
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
            <a className='mr-5 hover:cursor-pointer' key={social.id} href={social.url} target='_blank' rel='noopener noreferrer'>
                {social.icon}
            </a>
        )}

        )
      }
      
    </div>
    <div  className='right hover:cursor-pointer'>
      <span onClick={()=>handleClick('project')} className='ml-5 lg:inline md:inline xsm: hidden'>Projects</span>
      <span onClick={()=>handleClick('contact')} className='ml-5 lg:inline md:inline xsm: hidden'>Contact Me</span>
      <span className='ml-5 lg:inline md:inline xsm: hidden '>Resume</span> 
      <span 
      // value={menuIcon}
      onClick={isClicked?closeClick:menuClick} 
      id='menu' className=' ml-5 lg:hidden md:hidden z-60'>{isClicked ?null : <Menu />}</span>
     
    </div>
   {clickedMenu}
   
    </div>
    </div>
   
    </>
  )
}
