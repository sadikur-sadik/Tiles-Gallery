export const AllTilesData = async () =>{

  const res = await fetch('https://tiles-gallery-pi.vercel.app/data.json')
  return  res.json();
}