import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
function Banner(){


    const [movie,setMovie]=useState({});
    useEffect(function(){
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=86fc0a679e7570452372e0aec51d7ae0&page=3").then((res)=>{
          setMovie(res.data.results[3]);
        })
      },[]);

    return <>
        
        <div className={`bg-[url(https://image.tmdb.org/t/p/original//${movie.backdrop_path})]  md:h-[70vh]  w-full h-[50vh]   bg-cover flex items-end  `} id="banner">
   <div className=" text-xl md:text-3xl text-white p-6 bg-gray-900 bg-opacity-50 w-full flex justify-center font-mono ">{movie.title}</div>
        </div>
    </>
}

export default Banner;