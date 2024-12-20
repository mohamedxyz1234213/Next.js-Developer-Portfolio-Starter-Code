import Link from 'next/link'
import React, { useState } from 'react'
import {MoonIcon, SunIcon, TwitterIcon} from "./icons"
import {LinkedInIcon} from "./icons"
import {PinterestIcon} from "./icons"
import {DribbbleIcon} from "./icons"
import {GithubIcon} from "./icons"
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { useRouter } from 'next/router'



const Customlink =({href, title , className=""}) => {
  const router =useRouter();
  return(
  
  <Link href={href} className={`${className} relative group ` } >
    {title}

    <span  className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 
    group-hover:w-full trasition-[width] ease duration-300 ${router.asPath===href ? "w-full" : "w-0"} dark:bg-light`}
    
    >

    &nbsp;

    </span>
  </Link>
)
    };

    const CustomMobilelink =({href, title , className="",toggle}) => {
       const router =useRouter();
       
       const handleClick=()=>{
        toggle();
        router.push(href)
       }


      return(
      
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2` } onClick={handleClick} >
        {title}
    
        <span  className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 
        group-hover:w-full trasition-[width] ease duration-300 ${router.asPath===href ? "w-full" : "w-0"} dark:bg-dark`}
        
        >
    
        &nbsp;
    
        </span>
      </button>
    )
        };



const Navbar=() => {


  const [mode, setMode]  = useThemeSwitcher();

  const [isOpen , setIsOpen] =useState(false)

  const handleClick =()=>{
    setIsOpen(!isOpen)
  }
  
    return(

   <header className='w-full px-32 py-7 font-medium flex item-center justify-between dark:text-light relative z-10 lg:px-16  md:px-12
   sm:px-8
   '>

    <button className=' flex-col justify-center items-center  hidden lg:flex' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out   h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
      <span className={`bg-dark dark:bg-light block  transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out   h-0.5 w-6 rounded-sm       ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}   `} ></span>

    </button>


    <div className='w-full flex justify-between items-center lg:hidden'>



    <nav>
    
    <Customlink href="/" title="Home" className="mr-4 relative  group" />
    <Customlink href="/about" title="About" className='mx-4 relative group'/>
    <Customlink href="/projects"title="Projects" className='mx-4 relative group'/> 
    <Customlink href="/articles" title="Articles"  className='ml-4 relative group'/>
 
    </nav>
       
    
       
 
       <nav className=' flex items-center justify-center flex-wrap '>
     
     <motion.a href="https://twitter.com"  target={"_blank"}  whileHover={{y:-2}} className='w-6 mr-3' whileTap={{scale:0.9}}><TwitterIcon/></motion.a>
     <motion.a href="https://twitter.com"  target={"_blank"} whileHover={{y:-2}}className='w-6 mx-3'  whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>
     <motion.a href="https://twitter.com"  target={"_blank"} whileHover={{y:-2}}className='w-6 mx-3'  whileTap={{scale:0.9}}><PinterestIcon/></motion.a>
     <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}}className='w-6 mx-3'  whileTap={{scale:0.9}}><DribbbleIcon/></motion.a>
     <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}}className='w-6 ml-3'  whileTap={{scale:0.9}}><GithubIcon/></motion.a>
   
       <button
       onClick={()=>    setMode(mode==="light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}> 
 {
   mode==="dark"? <SunIcon className="fill-dark "/>
   :<MoonIcon className={"fill-dark"}/>
 }
       </button>
     </nav>



    </div>

  
    {
      isOpen ?

<motion.div
initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
animate={{scale:1,opacity:1}}


className='min-w-[70vw]  flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 
     -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75  rounded-lg backdrop-blur-md py-32
    '>



    <nav className='flex items-center flex-col justify-center'>
    
    <CustomMobilelink href="/" title="Home" className=" relative  group"    toggle={handleClick}/>
    <CustomMobilelink href="/about" title="About" className=' relative group'  toggle={handleClick}/>
    <CustomMobilelink href="/projects"title="Projects" className=' relative group' toggle={handleClick} /> 
    <CustomMobilelink href="/articles" title="Articles"  className=' relative group'  toggle={handleClick}/>
 
    </nav>
        
    
       
 
       <nav className=' flex items-center justify-center flex-wrap mt-2 '>
     
     <motion.a href="https://twitter.com"  target={"_blank"}  whileHover={{y:-2}} className='w-6 mr-3 sm:mx-1' whileTap={{scale:0.9}}><TwitterIcon/></motion.a>
     <motion.a href="https://twitter.com"  target={"_blank"} whileHover={{y:-2}}className='w-6 mx-3 sm:mx-1'  whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>
     <motion.a href="https://twitter.com"  target={"_blank"} whileHover={{y:-2}}className='w-6 mx-3 sm:mx-1'  whileTap={{scale:0.9}}><PinterestIcon/></motion.a>
     <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}}className='w-6 mx-3 sm:mx-1'  whileTap={{scale:0.9}}><DribbbleIcon/></motion.a>
     <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}}className='w-6 ml-3 sm:mx-1'  whileTap={{scale:0.9}}><GithubIcon/></motion.a>
   
       <button
       onClick={()=>    setMode(mode==="light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}> 
 {
   mode==="dark"? <SunIcon className="fill-dark "/>
   :<MoonIcon className={"fill-dark"}/>
 }
       </button>
     </nav>



    </motion.div>


      :null
    }


   

    <div className='flex item-center justify-center mt-2 absolute left-[50%] top-2 translate-x-[-50%] ' >
            <Link href="/" 
            className='w-16 h-16 bg-dark text-light flex items-center justify-center
            rounded-full text-10x1 font-semibold border border-solid border-transparent dark:border-light'
           
             >MF</Link>
        </div>

   </header>




    )
}
export default Navbar