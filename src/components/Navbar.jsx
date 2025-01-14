import { Bars3Icon } from '@heroicons/react/24/outline'
import {  ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Search} from './'


const Navbar = () => {
    const cart = useSelector((state)=> state.cart.productsNumber);
  return (
    <header className='min-w-[1000px] '>
        <div className='flex bg-amazon text-white'>
            {/* Left */}
            <div className='flex items-center m-4'>
              <Link to={"/"}>  <img className='h-[30px] w-[100px] m-2'  src={"/images/amazon.png"} alt="" /></Link>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Deliver to</div>
                    <div className='text-sm xl:text-base font-bold'>Turkey</div>
                </div>
            </div>
            {/* Middle */}
                <Search/>
            {/* Right */}
            <div className='flex items-center m-4'>

                <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Hello, sign in</div>
                        <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                </div>

                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>

                <Link to={"/checkout"}>
                    <div className='flex pr-3 pl-3'>
                        <ShoppingCartIcon className='h-[48px]' />
                        <div className='relative'>
                            <div className='absolute right-[9px] font-bold m-2  text-orange-500'>
                                {cart}
                            </div>
                        </div>
                        <div className='mt-7 text-xs xl:text-sm font-bold'>
                            Cart
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className='flex bg-amazon-light_blue text-white space-x-6 text-xs xl:text-sm p-2 pl-6'>
            <div className='flex justify-center items-center font-bold'><Bars3Icon className=' font-bold h-[24px]'/>All</div>
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default Navbar
