import React from 'react'

function Navbar() {
    return (
        <>
            <div className='flex flex-wrap justify-between content-center bg-blue-900 text-white p-2'>

                <div>
                    <a href='amazone' className='text-3xl hover:text-orange-500 font-bold '>Amazone </a>
                </div>

                <div className='flex justify-between'>
                    <a href='/cart' className='hover:text-orange-500'>Cart</a>
                    <a href='/signin' className='hover:text-orange-500'>Signin</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
