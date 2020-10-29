import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import './App.css';

const MOVIE_API = process.env.REACT_APP_API_URL;
const SEARCH_API = process.env.REACT_APP_API_SEARCH;


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovies = (API) => {
    fetch(API)
      .then((res)=> res.json())
      .then((data)=> {
        setMovies(data.results);
      });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(search) {
      getMovies(SEARCH_API + search);
      setSearch('');
    }
  }

  const onClickSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(()=> {
    getMovies(MOVIE_API);
  }, []);

  return (
    <>
      <header>
        <form onSubmit={onSubmit}>
          <input onChange={onClickSearch} value={search}
            className='search' type='search'
          placeholder='search...' />
        </form>
      </header>
      <div className='movie-container'>
        { movies.length > 0 && movies.map(m => (
            <Movie key={m.id} {...m}  />
          ))
        }
      </div>
    </>
  );
}

export default App;
