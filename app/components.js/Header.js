import Image from "next/image";
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    Bars3Icon
} from '@heroicons/react/24/solid';
import { signIn, signOut} from "next-auth/react";
import { auth } from "@/auth";

async function Header() {

    const session = await auth();

    return (
        <header>
            {/*the top header*/}
            <div className="flex items-center bg-[#131921] p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow md:flex-grow-0 px-4">
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        alt="amazon logo"
                        style={{ objectFit: 'contain' }}
                        className="cursor-pointer "
                    />
                </div>
                {/**this is the search bar */}
                <div className="bg-yellow-400 hover:bg-yellow-500 hidden md:flex items-center h-10 rounded-md flex-grow cursor-pointer">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <MagnifyingGlassIcon className="h-12 p-4" />
                </div>
                {/**right hand side of the top header */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">

                    <div onClick={!session ? signIn : signOut} className="link">
                        <p className="hover:underline">{session ? `Hello ${session?.user.name}` : 'Sign In'}</p>
                        <p className="downPTag">Account & Lists</p>
                    </div>

                    <div className="link hidden md:block">
                        <p className='hover:underline'>Returns</p>
                        <p className="downPTag">& Orders</p>
                    </div>
                    <div className="relative flex items-center link">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center items-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="md:h-12 h-8" />
                        <p className="hidden md:flex mt-2 downPTag">Basket</p>
                    </div>
                </div>
            </div>

            {/**the bottom header */}
            <div className="flex items-center bg-[#232f3e] space-x-5 p-2 pl-6 text-white text-sm">
                <p className="link flex items-center">
                    <Bars3Icon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Foods & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header;