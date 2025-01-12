import { Bars3Icon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
  return (
    <header className='min-w-[1000px] '>
        <div className='flex bg-amazon text-white'>
            {/* Left */}
            <div className='flex items-center m-4'>
                <img className='h-[30px] w-[100px] m-2'  src={"/images/amazon.png"} alt="" />
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Deliver to</div>
                    <div className='text-sm xl:text-base font-bold'>Turkey</div>
                </div>
            </div>
            {/* Middle */}
            <div className='flex grow relative items-center'>
                <div className="w-[100%]">
                    <div className='flex items-center h-10 bg-amazon-yellow rounded'>
                        <select className='text-black p-2 bg-gray-300 border text-xs xl:text-sm' >
                            <option>All</option>
                            <option>Deals</option>
                            <option>Amazon</option>
                            <option>Fashion</option>
                            <option>Computers</option>
                            <option>Home</option>
                            <option>Mobiles</option>
                        </select>
                        <input className='flex grow items-center h-[100%] rounded-l text-black' type="text" />
                        <button className='w-[45px]'>
                            <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
                        </button>
                    </div>
                </div>
            </div>
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

                <div className='flex pr-3 pl-3'>
                    <ShoppingCartIcon className='h-[48px]' />
                    <div className='mt-7 text-xs xl:text-sm font-bold'>
                        Cart
                    </div>
                </div>

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
