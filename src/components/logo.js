import React from 'react'
import Link from 'next/link'



const Logo = () => {
    return(
        <div className='flex item-center justify-center mt-2 dark:border-light' >
            <Link href="/" 
            className='w-16 h-16 bg-dark border border-solid border-transparent dark:border-light flex items-center justify-center
            rounded-full text-2x1 font-bold '>MF</Link>
        </div>
    )
}
export default Logo