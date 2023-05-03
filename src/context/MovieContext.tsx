import { useState, useEffect } from "react";
import { createContext } from "react";
import { IMovie, IContext } from "../types";

interface IProps {
  children: React.ReactNode;
}

export const MovieContext = createContext<IContext>({
  movies: [],
  totalPages: 0,
  currentPage: 1,
  setCurrentPages: () => {},
  APIKey: "",
});

export default function MovieProvider({ children }: IProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPages] = useState<number>(1);

  const APIKey:string = process.env.REACT_APP_API_KEY ?? ""

  const getMovie = async () => {
    if(!APIKey){
      return console.log("Error")
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&page=${currentPage}`
    );
    const data = await response.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
    setCurrentPages(data.page);
  };

  useEffect(() => {
    getMovie();
// eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [currentPage]);

  const value: IContext = {
    movies,
    totalPages,
    currentPage,
    setCurrentPages,
    APIKey,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
      </MovieContext.Provider>
  );
}
