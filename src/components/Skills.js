import React from 'react' 
import {motion} from "framer-motion"



const Skill =({Name , x , y})=>{

return(

    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
     shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
     lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent md:bg-transparent
     xs:text-dark xs:dark:text-light xs:font-bold'

whileHover={{scale:1.05}}

initial={{x:0,y:0}}
whileInView={{ x:x ,y:y, transition:{duration:1.5} }}
viewport={{once:true}}
>
   {Name}
</motion.div>
)

}




const Skills = () => {
  return (
<>
<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
    Skills
</h2>

<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] md:h-[70vh ] 
lg:bg-circularLightLg lg:dark:bg-circularDarkLg
md:bg-circularLightMd md:dark:bg-circularDarkMd
sm:bg-circularLightm sm:dark:bg-circularDarkSm
'>

<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
cursor-pointer dark:text-dark dark:bg-light   
lg:p-8 md:p-16 xs:text-xs xs:p-4
'
whileHover={{scale:1.05}}
>
   Web
</motion.div>


< Skill Name="CSS" x="-20vw" y="3vw"/>
< Skill Name="HTML" x="0vw" y="-11vw"/>
< Skill Name="JAVASCRIPT" x="21vw" y="2vw"/>
< Skill Name="C++" x="-30vw" y="-10vw"/>
< Skill Name="REACTJS" x="30vw" y="-10vw"/>
< Skill Name="TAILWIND" x="18vw" y="15vw"/>
< Skill Name="PYTHON" x="-20vw" y="15vw"/>
< Skill Name="FIGMA" x="0vw" y="-18vw"/>





</div>

</>

  )
}

export default Skills