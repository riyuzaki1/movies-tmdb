import React, { useState,useEffect } from 'react'
import Pagination from './Pagination';

function Favourites() {

  let genreids = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
    27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
  }
  
   const [curGenre,setCurGenre]=useState("All Genres");
   const [favourites,setFavourites]=useState([]);
   const [genres,setGenres]=useState([]);
  

   useEffect(()=>{

    let genreids = {
      28: 'Action',
      12: 'Adventure',
      16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
      27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
    }
         let temp = favourites.map((movie)=> genreids[movie.genre_ids[0]])
        // console.log(temp)
         temp = new Set(temp)
        // console.log(temp)
        setGenres(["All Genres",...temp]);
       
   },[favourites])
   
   useEffect(function(){
      let oldFav = localStorage.getItem("imdb");
      oldFav = JSON.parse(oldFav)||[];
      setFavourites([...oldFav]);
   },[])

   function remove(movie){
   let newArray= favourites.filter((favMovie)=>{
      return !(favMovie.id===movie.id)
    })
    setFavourites(newArray);
    localStorage.setItem("imdb",JSON.stringify(newArray))
   }
   
   
   
  return<>
     <div className='flex flex-wrap my-3 mx-2  justify-center relative sm:space-x-4 space-x-1'>
    
     {genres.map((genre)=>{
       
       return <>
       <button className={curGenre===genre?
     'bg-gray-600  text-white text-xs sm:text-lg py-1 px-2 rounded-3xl my-2 font-bold border-2 border-solid'
     :'bg-gray-400 hover:bg-gray-600 text-white text-xs sm:text-lg py-1 px-2 rounded-3xl font-bold my-2 border-1 border-gray-700 border-solid'
     } onClick={()=>{setCurGenre(genre)}} >{genre}</button>
       </>
     })}
     </div>

     
     <div className='text-center  mt-2'>
     <input className='border border-4 text-center p-1 m-2' type="text" placeholder='Search' ></input>
     <input className='border border-4 text-center p-1 m-2' type="number" placeholder='Rows'></input>
     </div>
     
   
    <div className=" mb-5 overflow-hidden">
    
    <div className="flex flex-col m-2">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 min-w-full">
                <tr>
                  <th
                    scope="col"
                    className="pl-6 pr-2 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                   Movie Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                    <div className=' flex '>
                      <img   alt='button' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png' className=' mr-2 cursor-pointer'
                        
                      />
                      Rating
                      <img alt='button' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png'
                       
                        className='ml-2 mr-2' />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                    <div className='flex'>
                      <img alt='button' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png'
                        
                        className='mr-2' />
                      Popularity
                      <img alt='button' src='https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png' className='ml-2 mr-2'
                       
                      />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="pr-5 pl-7 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              
              {favourites.map((movie)=>{

                return <>
                <tr key={movie.id}>
                <td className="pl-6 pr-2 py-4 whitespace-nowrap">
              <div className="flex items-center">
                        <div className="flex-shrink-0 sm:h-[100px] sm:w-[180px]">
                          <img  className="hidden sm:block sm:h-[100px] sm:w-[180px]" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                        </div>
                        <div className="sm:ml-4">
                          <div key={movie.id} className="text-sm font-medium text-gray-900 font-bold">{movie.title}</div>  
                        </div>
                      </div>
                        
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div key={movie.id} className="text-sm text-gray-900 md:text-left md:ml-2 text-center">{movie.vote_average}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div key={movie.id} className="text-sm text-gray-900 md:text-left md:ml-2 text-center"> {movie.popularity}</div>
                      
                    </td>
                    <td className=" pl-7 pr-5 py-4 whitespace-nowrap">
                    <span key={movie.id} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        { genreids[movie.genre_ids[0]] }
                      </span>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap" >
                      <div key={movie.id} className="text-sm text-gray-900 md:text-left md:ml-2 text-center"> <span className="p-1 bg-gray-900 hover:bg-gray-500 text-white cursor-pointer rounded-md text-sm"  onClick={()=>{remove(movie)}} > ❌</span> </div>
                    </td>
                   </tr>
                </>
                     
              })}
                
              
              </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>

    </div>

     <div className='my-2'><Pagination/></div>
     
  </>
  
  
}

export default Favourites;