'use client'

import React, { useState } from 'react';
import Filter from './Filter&Search/Filter';
import Search from './Filter&Search/Search';
import Card from '../Card/Card';

const Processed = ({ tiles }) => {

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const finalTiles = tiles.filter(tile => 
    filter == "All" 
    ? 
    tile = tile 
    : tile.category.toLowerCase() == filter.toLowerCase())
    .
    filter(tile =>
    tile.title.toLowerCase().includes(search.toLowerCase())
    || 
    tile.description.toLowerCase().includes(search.toLowerCase())
  )
  
  

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-12 my-4 gap-4 px-2'>

        <Search setSearch={setSearch}></Search>

        <Filter filter={filter} setFilter={setFilter}></Filter>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mb-10 justify-items-center">

        {finalTiles ? finalTiles.map((tile, i) => <Card key={i} tile={tile} />) : tiles.map((tile, i) => <Card key={i} tile={tile} />)}
      </div>

    </div>
  );
};

export default Processed;