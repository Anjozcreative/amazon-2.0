'use client'
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../basketSlice";
import CheckoutProduct from "../components.js/CheckoutProduct";
import CheckoutBtn from "../components.js/CheckoutBtn";

function Checkout() {

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/**Left section */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            style={{ objectFit: 'contain' }}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">{items.length === 0
              ? 'Your Shopping Basket is empty'
              : 'Shopping Basket'}</h1>

            {items.map(({ id,
              title,
              price,
              rating,
              description,
              category,
              image,
              isPrimeEnabled }, i) => (
              <CheckoutProduct
                key={i}
                id={id}
                title={title}
                rating={rating}
                price={price}
                description={description}
                category={category}
                image={image}
                isPrimeEnabled={isPrimeEnabled}
              />
            ))}
          </div>
        </div>

        {/**right side section */}
        <div className="flex flex-col bg-white p-10 shadow-md lg:mt-5">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">Subtotal ({items.length} items):
              <span className="font-bold">
                {' '}${total}
              </span>
              </h2>

              <CheckoutBtn />
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout;