import React,{useState,useEffect} from 'react'
import axios from './axios';
import "./Row.css"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {

    //Declare a state variable movies and set its value to Undefined
   const [movies,setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request.data.results)
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
               <img className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
               key={movie.id} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
           ))}
            </div> 
        </div> 
    ) 
}

export default Row