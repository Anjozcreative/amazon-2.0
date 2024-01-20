
import { useSession } from "next-auth/react";


 function CheckoutBtn () {

    const session = useSession()

  return (
    <button className={`button mt-2 text-nowrap ${!session && 'from-gray-200 bg-gray-200 text-gray-200 cursor-not-allowed'}`}
    disabled={!session}
    >
        {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
    </button>
  )
}

export default CheckoutBtn;