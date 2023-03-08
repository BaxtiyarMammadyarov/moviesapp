import './App.css';
import Movies from './components/movies/Movies';
import { useEffect, useState } from "react";
function App() {

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("")
  const [res, setRes] = useState()

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${search ? search : 'random'}&apikey=278924d5`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovie(data.Search)
        setRes(data.Response)
      });
  }, [search]
  )
  console.log(res)
  return (
    <div className="App">
      <div className='searchCom'>
        <label htmlFor='search'></label>
        <input type='text' id='search' className='searchText' onChange={(e) => setSearch(e.target.value)} />
        {/* <input type='button' id='searchbtn' onClick={(e) => setSearch(e.target.value)} value="search"   className='searchBtn'/> */}
      </div>
      <div className='movie'>
        {
          res==="True" ?
            movie?.map(val => <Movies val={val} setSearch={setSearch} key={val.imdbID} />)
            : <img src='https://media.istockphoto.com/id/1335247217/pt/vetorial/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=9TMsDn9mlHkBoWsLRCGsDcQKVuzewZiDl1q_g6UtqyE=' />

        }

      </div>



    </div>
  );
}

export default App;
