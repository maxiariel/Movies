import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import { IMovie } from "../../types";
import {
  BackgroundCard,
  Bar,
  ContentCard,
  ContentImg,
  ContentInfo,
  ContentTitle,
  Description,
  Image,
  ProgressBar,
  Wrapper,
} from "./StyledMovieDetail";

interface IProgressBarProps {
  porcentage: number;
}

export default function MovieDetail() {
  const { id }: any = useParams();
  const { APIKey }: any = useContext(MovieContext);
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    const idMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`
      );
      const data = await response.json();
      setMovie(data);
    };

    idMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const progressBar = ({ porcentage }: IProgressBarProps) => {
    return (
      <Bar>
        <ProgressBar porcentage={porcentage}>
          <div>{porcentage} %</div>
        </ProgressBar>
      </Bar>
    );
  };

  const voteAverage = parseFloat(movie?.vote_average) * 10;

  console.log(movie?.vote_average);
  return (
    <BackgroundCard>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <Wrapper>
        <ContentTitle>
          <h3>{movie?.title}</h3>
        </ContentTitle>
        <ContentCard>
          <ContentImg>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
            />
          </ContentImg>
          <ContentInfo>
            <Description>
              Overview: <span>{movie?.overview}</span>
            </Description>
            <Description>
              Punctuation {progressBar({ porcentage: voteAverage })}
            </Description>
            <Description>
              Votes: <span>{movie?.vote_count} Votes</span>
            </Description>
            <Description>
              Release date: <span>{movie?.release_date}</span>
            </Description>
          </ContentInfo>
        </ContentCard>
      </Wrapper>
    </BackgroundCard>
  );
}
