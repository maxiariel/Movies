export interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  original_language: string;
  vote_average: string;
  vote_count: number;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface IContext {
  movies: IMovie[];
  totalPages: number;
  currentPage: number;
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
  APIKey: string;
}
