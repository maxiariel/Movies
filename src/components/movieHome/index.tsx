import { useContext } from "react";
import { IMovie } from "../../types";
import Pagination from "../pagination/Pagination";
import { MovieContext } from "../../context/MovieContext";
import MovieCard from "../movieCard/MovieCard";
import SearchMovie from "../searchMovie/SearchMovie";
import { Wrapper } from "./StyledIndex";

interface IPropsContext{
  movies: IMovie[];
}

export default function MovieHome() {
  const { movies }:IPropsContext = useContext(MovieContext);
  return (
    <div>
      <SearchMovie />
      <Wrapper>
        {movies?.map((value: IMovie) => {
          return <MovieCard key={value.id} {...value} />;
        })}
      </Wrapper>

      <Pagination />
    </div>
  );
}
