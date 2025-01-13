import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { createSearchParams, useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react"
import {callAPI} from "../utils/CallApi"



const Search = () => {
    const [suggestions,setSuggestions] = useState(null);
    const [searchTerm,setSearchTerm] = useState("");
    const [category,setCategory] = useState("All")

    const navigate = useNavigate();

    const getSuggestions = () => {
        callAPI(`data/suggestions.json`)
        .then((suggestionResults) => {
            setSuggestions(suggestionResults);
        });
    }

    const onHandleSubmit = (e) => {
      e.preventDefault();


      navigate({
        pathname: "search",
        search: `${
            createSearchParams({
                category: `${category}`,
                searchTerm:`${searchTerm}`
            })
        }`
      })
      setSearchTerm("");
      setCategory("All");
    };
    

    useEffect(()=>{
        getSuggestions();
    },[])
    
  return (
    <div className='flex grow relative items-center'>
    <div className="w-[100%]">
        <div className='flex items-center h-10 bg-amazon-yellow rounded'>
            <select onChange={(e)=> setCategory(e.target.value)} className='text-black p-2 bg-gray-300 border text-xs xl:text-sm' >
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>
            <input className='flex grow items-center h-[100%] rounded-l text-black' type="text" value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)} />
            <button onClick={onHandleSubmit} className='w-[45px]'>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
            </button>
        </div>
        {suggestions &&
            <div className='bg-white text-black w-full z-40 absolute'>
                {
                    suggestions.filter((suggestion) => {
                        const currentSearchTeam = searchTerm.toLowerCase();
                        const title = suggestion.title.toLowerCase();
                        return (
                            currentSearchTeam &&
                            title.startsWith(currentSearchTeam) &&
                            title !== currentSearchTeam
                        )
                    }).slice(0,10)
                    .map((suggestion) => (
                        <div className='cursor-pointer' key={suggestion.id}  onClick={()=> setSearchTerm(suggestion.title)}>
                            {suggestion.title   }
                        </div>
                    ))
                }
            </div>
        }
    </div>
</div>
  )
}

export default Search
