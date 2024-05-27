import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-zinc-100 py-4 sm:px-6 px-0 '>
            <div className='flex flex-col sm:flex-row mx-auto max-w-6xl justify-between'>
                <Link to="/">
                    <h1 className='capitalize font-bold italic text-center'>auth app</h1>
                </Link>
                <ul className='mt-6 sm:mt-0 cursor-pointer capitalize flex flex-col sm:flex-row sm:gap-3 text-center'>
                    <Link to="/">
                        <li className='py-2 px-4 hover:bg-orange-200' >home</li>
                    </Link>
                    <Link to="/about">
                        <li className='py-2 px-4 hover:bg-orange-200' >about</li>
                    </Link>
                    <Link to="/sign-in">
                        <li className='py-2 px-4 hover:bg-orange-200' >sign in</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header