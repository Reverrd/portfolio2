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
        <div className='text-white navPop text-2xl  w-5/12 xsm:w-10/12 h-screen  flex flex-col items-center absolute top-12 right-0  z-50'>
         <div className='close border-b flex justify-center'>
        <div
        onClick={closeClick} className=' pb-16  '><Close className='text-lg! cursor-pointer'/></div>
        </div> 
         <div className='project flex border-b justify-center py-6 hover:bg-cyan-700'>
        <div onClick={()=>handleClick('project')}  className='   cursor-pointer   '>Project</div>
        </div> 
        <div className='contact flex border-b justify-center py-6 hover:bg-cyan-700'> 
        <div onClick={()=>handleClick('contact')} className='  cursor-pointer ' >Contact Me</div>
        </div>
        <div className='resume flex border-b justify-center py-6 hover:bg-cyan-700'>
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
      <span onClick={()=>handleClick('project')} className='ml-5 lg:inline md:inline sm:hidden xxs:hidden'>Projects</span>
      <span onClick={()=>handleClick('contact')} className='ml-5 lg:inline md:inline sm:hidden xxs:hidden'>Contact Me</span>
      <span className='ml-5 lg:inline md:inline sm:hidden xxs: hidden '>Resume</span>
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
