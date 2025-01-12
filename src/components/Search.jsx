import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
    
  return (
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
  )
}

export default Search
