import { Link } from "react-router-dom";
import { IMovie } from "../../types";
import { CardImage, Wrapper, Image, ContentTitle, Title } from "./StyledCard";

export default function MovieCard({ poster_path, title, id }: IMovie) {
  return (
    <Wrapper>
      <ContentTitle>
        <Link to={`/${id}`}>
          <Title> {title} </Title>
        </Link>
      </ContentTitle>
      <CardImage>
        <Link to={`/${id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </Link>
      </CardImage>
    </Wrapper>
  );
}
