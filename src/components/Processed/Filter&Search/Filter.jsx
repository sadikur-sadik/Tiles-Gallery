import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Filter = ({filter , setFilter}) => {


  return (
      <div className="dropdown dropdown-bottom dropdown-end md:dropdown-center col-span-1 md:col-span-4 lg:col-span-3 w-full">
        <div
          tabIndex={0}
          role="button"
          className="btn w-full bg-white border border-gray-200 rounded-md text-gray-500 font-medium flex justify-between items-center hover:bg-gray-50"
        >
          <span>{filter}</span>
          <IoIosArrowDown />
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-full md:w-52 p-2 shadow-xl border border-gray-100"
        >
          <li onClick={()=>setFilter("All")}><a className="hover:bg-blue-50">All</a></li>
          <li onClick={()=>setFilter("Ceramic")}><a className="hover:bg-blue-50">Ceramic</a></li>
          <li onClick={()=>setFilter("Stone")}><a className="hover:bg-blue-50">Stone</a></li>
          <li onClick={()=>setFilter("Terracotta")}><a className="hover:bg-blue-50">Terracotta</a></li>
          <li onClick={()=>setFilter("Porcelain")}><a className="hover:bg-blue-50">Porcelain</a></li>
          <li onClick={()=>setFilter("Glass")}><a className="hover:bg-blue-50">Glass</a></li>
          <li onClick={()=>setFilter("Cement")}><a className="hover:bg-blue-50">Cement</a></li>
        </ul>
      </div>

  );
};

export default Filter;