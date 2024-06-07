import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
function App() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetch("https://movies.slideworks.cc/movies")
      .then(async (res) => {
        return await res.json();
      })
      .then((data) => {
        setMovies(data.data);
      })
      .catch((erro) => console.error(erro));
  }, []);
  console.log(movies);
  return (
    <>
      <Navbar />

      <h1>{movies[5].title}</h1>
    </>
  );
}

export default App;
