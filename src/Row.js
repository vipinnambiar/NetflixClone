import React,{useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {

    //Declare a state variable movies and set its value to Undefined
   const [movies,setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
          //  console.log(request)
             setMovies(request.data.results)
            return request;  
        }
        fetchData();
    },[fetchUrl])
  console.log(movies)


    return (
        <div className="row">
        <h2> {title} </h2>
        
        <div className="row__posters">
           {movies.map(movie => (
               <img className="row__poster"
               src= {`${baseURL}${movie.poster_path}`} alt={movie.name}/>
           ))}
            </div> 
        </div> 
    ) 
}

export default Row