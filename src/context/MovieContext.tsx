import { useState, useEffect } from "react";
import { createContext } from "react";
import { IMovie } from "../types";

export const MovieContext = createContext({});

interface IProps {
  children: React.ReactNode;
}

export default function MovieProvider({ children }: IProps) {
  const [movies, setMovies] = useState<IMovie[]>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPages] = useState<number>(1);

  const APIKey = "98578ae8262d0e585ef78f73074e6bb5";

  const getMovie = async () => {
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
  }, [currentPage]);

  return (
    <MovieContext.Provider
      value={{ movies, totalPages, currentPage, setCurrentPages, APIKey }}
    >
      {children}
    </MovieContext.Provider>
  );
}
