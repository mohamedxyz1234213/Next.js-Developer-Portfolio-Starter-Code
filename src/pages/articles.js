import AnimatedText from '@/components/animatedText'
import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import articleimg from "../../public/images/articles/pagination component in reactjs.jpg";
import articleimg1 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from 'framer-motion'
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import article4 from "../../public/images/articles/form Validation in reactjs using custom react hook.png"
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png"
import TransitionEffect from '@/components/TransitionEffect'




const Framerimage = motion(Image);

const Movingimg =({title ,img , link }) =>{

  const x =useMotionValue(0);
  const y =useMotionValue(0);
  const imgRef =useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display="inline-block";
    x.set(event.pageX);
    y.set(-10);

  }

  function handleMouseLeave(event) {
    imgRef.current.style.display="none";
    x.set(0);
    y.set(0);

  }



return(
  <Link href={link} target="_blank"  onMouseMove={handleMouse}   onMouseLeave={handleMouseLeave}>

  <h2 className='capitalize text-xl font-semibold hover:underline'>
    {title}
  </h2>

  <Framerimage style={{x:x, y:y }} 
  initial={{opacity:0}}
  whileInView={{opacity:1 , transition:{duration:0.2}}}
  ref={imgRef} src={img} alt={title} className=' z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>

  </Link>
)

}




const Article = ({ img , title ,date, link}) =>{

return(
  <motion.li 
  
  initial={{y:200}}
  whileInView={{y:0 , transition:{duration:0.5 , ease:"easeInOut"}}}
  viewport={{once:true}}

  className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center *:justify-between bg-light text-dark first:mt-0
   border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
   sm:flex-col
   '>

    <Movingimg title={title}  img={img} link={link}/>

    <span className="text-primary font-semibold ml-48 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm md:ml-0">{date}</span>

  </motion.li>
)


}



const FeaturedArticles =({img , title ,time ,summary ,link}) =>{
    return(
        <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>

          <div  className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl '/>

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg inline-block ' >

          <Framerimage src={img} alt={title} className='w-full h-auto ' whileHover={{scale:1.05}} transition={{duration:0.2}} priority
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw , 50vw"/>

            </Link>

            <Link href={link} target="_blank">
            <h2 className='capitalize text-2xl  mt-32 font-bold my-2 hover:underline xs:text-lg md:mt-2 '>
                {title}
            </h2>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
            </Link>
        </li>
    )
}





const articles = () => {
  return (
    <>
    <Head>
             <title>
                Mohamed elfouly / Articles page
            </title>
              <meta name="description" content='any description' />
  </Head>
  <TransitionEffect/>

  <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
    <Layout className='pt-16'> 
        <AnimatedText text=" Words Can Change The World! " className='mb-16  lg:!text-7xl sm:!mb-10 sm:!ext-6xl xs:!text-4xl'>

        </AnimatedText>

        <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>

        <FeaturedArticles
        title="Build A Custom Pagination Component In Reactjs From Scratch"
        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
        time="9 min read"
         link="/"
         img={articleimg}
      
        
        />


<FeaturedArticles
        title="Build A Custom Pagination Component In Reactjs From Scratch"
        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
        time="9 min read"
         link="/"
         img={articleimg1}
      
        
        />

        </ul>

        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All articles</h2>

        <ul>

          <Article 

          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
          img={article3}
          date="July 2005"
          link="/"
          
          
          />

<Article 

title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
img={article4}
date="July 2005"
link="/"


/>

<Article 

          title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
          img={article3}
          date="July 2005"
          link="/"
          
          
          />

<Article 

title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
img={article5}
date="July 2005"
link="/"


/>
<Article 

title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
img={article5}
date="July 2005"
link="/"


/>

<Article 

title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
img={article3}
date="July 2005"
link="/"


/>

<Article 

title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
img={article3}
date="July 2005"
link="/"


/>

        </ul>


    </Layout>
  </main>
    </>
    
  )
}

export default articles

