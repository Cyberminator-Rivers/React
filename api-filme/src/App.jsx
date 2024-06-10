import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";

function App() {
  const [movies, setMovies] = useState();

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

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <main>
      <Navbar />

      <div className="content">
        {movies ? (
          <Hero
            title={movies[6]?.title}
            producers={movies[6]?.crew}
            img={movies[6]?.image_url}
            rating={movies[6]?.rating}
          />
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default App;
