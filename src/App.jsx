import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import Footer from "./components/footer/Footer";
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <Nav />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movies" element={<Movies />} />
          <Route path="/:movies/:id" element={<MovieInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
