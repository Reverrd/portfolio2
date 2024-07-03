
import { ArrowForward } from '@mui/icons-material'
import './project.scss'
export default function ProjectSection() {
    const projects = [
        {
            id:1,
            image: './assets/vocalCentric.png',
            title:'Vocal Centric',
            desc:'This app is about connecting different choir groups together, I built it with React js/vite ',
            url:'https://vocalcentric.com',
        },
        {
            id:2,
            image: './assets/vocalCentric.png',
            title:'Taskify',
            desc:'Taskify is your ultimate productivity companion designed to streamline your task management process with ease and efficiency',
            url:'http://github.com/DaScOrPiO/Taskify-web', 
        },
        {
            id:3,
            image: './assets/vocalCentric.png',
            title:'Vocal Centric',
            desc:'This app is about connecting different choir groups together',
            url:'http://landingpage-sage-pi.vercel.app', 
        },
        {
            id:4,
            image: './assets/vocalCentric.png',
            title:'Vocal Centric',
            desc:'This app is about connecting different choir groups together',
            url:'http://landingpage-sage-pi.vercel.app', 
        }
    ]
  return (
    <>
      <div id='project' className="bg-green-900 h-fit">
        <div className="projectWrapper px-5 pb-5">
        <h1 className=" text-slate-100 text-2xl font-medium pb-10 sm:text-2xl">
            Featured Projects
        </h1>
        <div  className="flex gap-4 justify-center -4  sm:px-16 xxs:px-5 flex-wrap items-center   ">
            {
                projects.map((project)=>{
                return (
                    <a className='bg-white    xxs:w-[100%] sm:w-[50%] lg:w-[20%] h-[40vh]  ' key={project.id} href={project.url} target='_blank' rel='noopener noreferrer'>
                       <div className=' relative h-full'> 
                            <div className=' image-container absolute  w-full h-[40vh] '> 
                                    <img className='   w-full h-full' src={project.image} alt="" />
                            </div>
                            <div >
                                    <div className='pb-2.5 px-3 font-bold '>{project.title}</div>
                                    <div className='pb-4 px-3'>{project.desc}</div>
                                    <div className='flex items-center px-3 pb-5 cursor-pointer'>
                                        <div className='font-medium'>
                                        See more
                                        </div> 
                                        <span><ArrowForward /></span>
                                    </div>
                            </div>
                        
                        </div> 

                    </a>
                )
                })
            }
        </div>
        </div>
      </div>
    </>
  )
}
