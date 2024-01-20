'use client'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../basketSlice'

const CheckoutProduct = ({ id,
    title,
    price,
    rating,
    description,
    category,
    image,
    isPrimeEnabled }) => {

    const dispatch = useDispatch()

    const addItemToBasket = () => {

        const product = {
            title,
            price,
            rating,
            description,
            category,
            image,
            isPrimeEnabled
        }
        //push into redux
        dispatch(addToBasket(product));
    }


    const removeItemFromBasket = () => {

        //remove item from redux
        dispatch(removeFromBasket({ id }));


    }
    return (
        <div className='grid grid-cols-5'>
            <Image
                src={image}
                height={200}
                width={200}
                style={{ objectFit: 'contain' }}
            />

            {/**Middle */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon className="h-5 text-yellow-500" />
                        ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <p>${price}</p>

                {isPrimeEnabled && (
                    <div className="flex items-center space-x-2">
                        <img className="w-12" src="https://wareiq-prelogin.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/08/07123120/SOA_July_2_Get_your_prime_badge._SL1280_FMjpg_-685x381.jpg" alt="prime delivery" />
                        <p className="text-xs text-gray-500 ">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>


            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button'>Add to Basket</button>
                <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct