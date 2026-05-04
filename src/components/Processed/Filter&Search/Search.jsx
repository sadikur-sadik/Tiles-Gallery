import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';

const Search = ({setSearch}) => {
  const [inp, setInp] = useState('');

  const handleSearch = () => {
    setSearch(inp)
  }
  return (
 
      <div className='col-span-1 md:col-span-8 lg:col-span-9 flex flex-row items-center gap-0'>
        <div className='relative w-full md:w-4/5'>
          <input value={inp} onChange={(e)=>setInp(e.target.value)}
            type="text"
            placeholder='Search Tiles (e.g. Ceramics, Marble)'
            className='border border-gray-200 p-2 md:rounded-none rounded-l-md  w-full focus:outline-blue-800'
          />
        </div>
        <button onClick={handleSearch} className=' py-3 bg-blue-800 rounded-r-md hover:bg-transparent border w-1/5 border-blue-800 hover:text-blue-800 flex justify-center items-center text-white px-6'>
          <ImSearch/>
        </button>
      </div>
  );
};

export default Search;