import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';

const Search = ({setSearch}) => {
  const [inp, setInp] = useState('');

  const handleSearch = () => {
    setSearch(inp)
  }
  return (
 
      <div className='col-span-1 md:col-span-8 lg:col-span-9 flex flex-col sm:flex-row items-center gap-3'>
        <div className='relative w-full md:w-4/5'>
          <input value={inp} onChange={(e)=>setInp(e.target.value)}
            type="text"
            placeholder='Search Tiles (e.g. Ceramics, Marble)'
            className='border border-gray-200 p-2 rounded-md w-full focus:outline-blue-800'
          />
        </div>
        <button onClick={handleSearch} className='btn bg-blue-800 hover:bg-blue-900 text-white w-full sm:w-auto md:w-1/5 flex items-center justify-center gap-2 px-6'>
          <span className="text-sm font-bold">SEARCH</span>
          <ImSearch/>
        </button>
      </div>
  );
};

export default Search;