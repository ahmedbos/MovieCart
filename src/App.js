import {useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import MovieList from './movielist.js';
import AddMovie from './AddMovies.js';
import NavBar from './NavBar.js';

function App() {
  const [word,setWord]=useState("")
  const [rating,setRating]=useState(1)
  const [movies, setMovies] = useState([
    {title:'Avengers',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
                            ,rate:'5',description:'very good' }
    ,{title:'Batman',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    ,rate:'3',description:'very good'}
    ,{title:'Superman',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    ,rate:'4',description:'very good'},{title:'Avengers',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    ,rate:'2',description:'very good'}
  ]);
  
  const handleAdd = (newMovie)=>{
    setMovies([...movies,newMovie]);
  }
const getData=(keyword)=>{
  setWord(keyword)}
  const dataRate=(rate)=>{
    setRating(rate)
  }



  return (
    
    <div className="App">
      <NavBar getData={getData} dataRate={dataRate}/>
      <AddMovie handleAdd={handleAdd}/>
       <MovieList movies={movies.filter((movie)=> movie.rate>= rating && movie.title.toLowerCase().includes(word.trim().toLowerCase()))} />
      
    </div>
  );
}

export default App;
