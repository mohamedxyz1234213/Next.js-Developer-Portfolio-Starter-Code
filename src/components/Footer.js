import React from 'react'
import Layout from './layout'
import Link from 'next/link'


 const Footer = () => {
return (

    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-light dark:border-light sm:text-base '>

        <div className='py-8 flex items-center justify-between mx-6  lg:flex-col lg:py-6 ' >
            <span clas>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center lg:py-2'>
            Build by &nbsp; <Link href="/" className='underline underline-offset-2'>MOHAMED ELFOULY</Link>
            </div>
            <Link href="/">say hello</Link>
        </div>
    </footer>
)

}
export default Footer