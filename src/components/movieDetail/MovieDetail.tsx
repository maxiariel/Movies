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
  Loading,
  ProgressBar,
  Wrapper,
} from "./StyledMovieDetail";

interface IProgressBarProps {
  percentage: number;
}

interface IPropsContext{
  APIKey: string
}

export default function MovieDetail() {
  const { id } = useParams<string>();
  const { APIKey }: IPropsContext = useContext(MovieContext);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [id]);

  if (!movie) {
    return <Loading>Loading...</Loading>;
  }

  const progressBar = ({ percentage }: IProgressBarProps) => {
    return (
      <Bar>
        <ProgressBar percentage={percentage}>
          <div>{percentage} %</div>
        </ProgressBar>
      </Bar>
    );
  };

  const voteAverage = parseFloat((parseFloat(movie?.vote_average) * 10).toFixed(2));
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
              Punctuation {progressBar({ percentage: voteAverage })}
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
