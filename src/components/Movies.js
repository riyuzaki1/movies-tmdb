import React,{useState,useEffect} from 'react';
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import Pagination from './Pagination';



function Movies() {

  const [movies,setMovies]= useState([]);

  const [pagenum,setPage]=useState(1);
  const [hover,setHover]=useState('');
  const [favourites,setFavourites]=useState([]);

  
  
  function nextPage(){
    setPage(pagenum+1);
    
  }
  function prevPage(){
    if(pagenum===1){
      return setPage;
    }
    setPage(pagenum-1);
    return setPage;
  }
  
  
 

  useEffect(function(){
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=86fc0a679e7570452372e0aec51d7ae0&page=${pagenum}`).then((res)=>{
      setMovies(res.data.results);
      let oldFav = localStorage.getItem("imdb")
      oldFav = JSON.parse(oldFav)||[]
      setFavourites([...oldFav])
     
    })
  },[pagenum]);
  
  function add(movie){
    let newArray=[...favourites,movie];
    setFavourites([...newArray]);
    // console.log(newArray)
    localStorage.setItem("imdb",JSON.stringify(newArray))
    
    
  }

  function remove(movie){
    let Array= favourites.filter((favourite)=>{return !(favourite.id===movie.id)})
    setFavourites([...Array]);
    // console.log([...Array]);
    localStorage.setItem("imdb",JSON.stringify(Array))
  }
  
  return <div className="">
  <div className=' mb-8 '>
  <div className="mt-8 mb-4 font-bold text-2xl text-center font-mono ">Trending Movies</div>
  
<div className='flex justify-center'>
   {movies.length===0?<ThreeDots 
height="80" 
width="80" 
radius="9"
color="#000" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />:<div className='flex flex-wrap justify-center'>
 {
  movies.map((movie)=>{
   return(
   
    <div key={movie.id}
    onMouseEnter={()=>{ setHover(movie.id);
                         }
                        } 
       onMouseLeave={()=>{setHover()}}
        className={`bg-[url(https://image.tmdb.org/t/p/original//${movie.poster_path})]
         md:h-[32vh] md:w-[250px] h-[25vh] w-[105px] bg-center bg-cover mt-5 rounded-xl flex items-end mx-3 
    hover:scale-110 ease-out duration-300 relative`}>
    
    {hover===movie.id&&<>{
      !favourites.find((favourite)=>{return favourite.id === movie.id})?<div  onClick={()=>{add(movie)}} className='absolute top-2 left-2 p-2 bg-black rounded-3xl md:text-xl cursor-pointer '>🧡</div>
    :<div onClick={()=>{remove(movie)}} className='absolute top-2 left-2 p-2 bg-black rounded-3xl md:text-xl cursor-pointer '>❌</div>
    }</>}
    
 
<div className=' w-full bg-black bg-opacity-50 text-white md:text-[1rem] text-[.85rem] justify-center   rounded-b-xl p-1 text-center'>
 {movie.title}
  </div>

</div>
   )
  })
 }
 
 </div>}
    </div>


</div>
  
  <Pagination nextPage={nextPage} prevPage={prevPage} pagenum={pagenum}/>
 
  </div>
}


export default Movies;
