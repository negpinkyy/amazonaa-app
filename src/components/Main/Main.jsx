import React from 'react';
import { AiFillStar } from "react-icons/ai";
import data from '.././data'

function Main() {
    return (
        <>
        <div className='flex flex-wrap p-1'>
            {
                data.products.map(product =>(
                    <div key={product._id} className='rounded-lg p-5 w-64 border-solid border-2 border-gray-900-gray bg-gray-200 m-5'>
                    <a href={`/products./${product.id}`}>
                        <img src={product.image} alt={product.name} className='w-48 rounded-lg'/>
                    </a>
                    <div>
                        <a href={`/products./${product.id}`} className='hover:text-orange-500'>
                            <h1 className='text-lg p-3 font-bold'>
                             {product.name}
                            </h1>
                        </a>
      
                        <div className='flex flex-wrap'>
                            <span className=' hover:text-orange'>
                                < AiFillStar/>
                            </span>
                            <span>
                                < AiFillStar/>
                            </span>
                            <span>
                                < AiFillStar/>
                            </span>
                            <span>
                                < AiFillStar/>
                            </span>
                            <span>
                                < AiFillStar/>
                            </span>
                        </div>
                        <div>
                            <h2 className='text-3xl p-3'>
                               ${product.price}
                            </h2>
                        </div>
                    </div>
                </div>
                ))
            }
         
        </div>
        </>
    )
}

export default Main
