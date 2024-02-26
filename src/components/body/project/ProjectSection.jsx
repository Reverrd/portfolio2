
import { ArrowForward } from '@mui/icons-material'
import './project.scss'
export default function ProjectSection() {
    const projects = [
        {
            id:1,
            image: './assets/vocalCentric.png',
            title:'Vocal Centric',
            desc:'This app is about connecting different choir groups together, I built it with React js/vite ',
            url:'http://landingpage-sage-pi.vercel.app',
        },
        {
            id:2,
            image: './assets/vocalCentric.png',
            title:'Vocal Centric',
            desc:'This app is about connecting different choir groups together',
            url:'http://landingpage-sage-pi.vercel.app', 
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
        <div  className="flex gap-4 justify-center -4  px-16 flex-wrap items-center ">
            {
                projects.map((project)=>{
                return (
                    <a className='bg-white  rounded-xl flex flex-col  max-h-fit box-border sm:w-9/12 md:w-5/12 lg:w-4/12' key={project.id} href={project.url} target='_blank' rel='noopener noreferrer'>
                        
                        
                        <img className='rounded-xl h-2/3' src={project.image} alt="" />
                        <div className='pb-2.5 px-3 font-bold '>{project.title}</div>
                        <div className='pb-4 px-3'>{project.desc}</div>
                        <div className='flex items-center px-3 pb-5 cursor-pointer'>
                            <div className='font-medium'>
                            See more
                            </div> 
                            <span><ArrowForward /></span>
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
