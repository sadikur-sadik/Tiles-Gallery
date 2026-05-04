export const AllTilesData = async () =>{

  const res = await fetch('https://tiles-json-server.onrender.com/data',{cache:'force-cache'});
  return  res.json();
}