import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IMovie } from "../../types";
import { Card, ContentImg, ContentText, Image, Overview, Title, Wrapper } from "./StyledSearchResult";

export default function SearchResults() {
  const location = useLocation();
  const result = location.state;

  return (
    <Wrapper>
      {result?.map((value: IMovie) => {
        const imgBackdrop = `https://image.tmdb.org/t/p/w500${value.poster_path}`;
        return (
          <Card key={value.id}>
            <ContentImg>
              <Link to={`/${value.id}`}>
              {imgBackdrop ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${value.poster_path} `}
                  alt={value.title}
                />
              ) : (
                <Image
                  src={`https://image.tmdb.org/t/p/w94${value.poster_path}`}
                  alt={value.title}
                />
              )}
              </Link>
            </ContentImg>
            <ContentText>
            <Link to={`/${value.id}`}>
              <Title>{value.title}</Title>
              </Link>
            <Overview>
              Overview: <span>{value.overview}</span>
            </Overview> 
            </ContentText>
           
          </Card>
        );
      })}
    </Wrapper>
  );
}
