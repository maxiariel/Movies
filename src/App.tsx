import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import MovieHome from "./components/movieHome";
import MovieDetail from "./components/movieDetail/MovieDetail";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieHome />} />
          <Route path={`/:id`} element={<MovieDetail/>} />
          <Route path="/results" element={<SearchResults/>} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
