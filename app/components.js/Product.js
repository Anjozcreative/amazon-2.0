'use client'
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
import { useEffect, useState } from "react"

const max_rating = 5;
const min_rating = 1;

function Product({ id, title, price, description, category, image }) {

    const [rating, setRating] = useState(5);
    const [isPrimeEnabled, setIsPrimeEnabled] = useState(5);


    useEffect(() => {
        setRating(
            Math.floor(Math.random() * (max_rating - min_rating + 1)) +
            min_rating
        );
        setIsPrimeEnabled(Math.random() < 0.5);
    }, []);


    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 italic text-gray-400 my-3">{category}</p>

            <div className="flex justify-center mb-5">
                <Image className="text-center" src={image} width={200} height={200} style={{ objectFit: 'contain' }} />
            </div>

            <h4>{title}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <p>${price}</p>
            </div>

            {isPrimeEnabled && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://wareiq-prelogin.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/08/07123120/SOA_July_2_Get_your_prime_badge._SL1280_FMjpg_-685x381.jpg" alt="prime delivery" />
                    <p className="text-xs text-gray-500 ">FREE Next-day Delivery</p>
                </div>
            )}

            <button className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product