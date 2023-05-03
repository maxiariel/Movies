import styled from "styled-components";

export const Wrapper = styled.div`
  width: 25%;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  height: 500px;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 40%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10px;
  }
  @media (max-width: 420px) {
    width: 80%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

export const ContentTitle = styled.div`
  width: 80%;
  max-width: 80%;
  height: 10vh;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #e3e3e3;
  & > a {
    text-decoration: none;
    text-align: center;
    color: #494949;
  }
`;

export const Title = styled.h3`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.1rem;
  transition: font-size 1s ease;
  :hover {
    font-size: 1.15rem;
  }
  @media (max-width: 1019px) {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.03rem;
    :hover {
      font-size: 1.05rem;
    }
  }
`;

export const CardImage = styled.div`
  border-radius: 10px;
  width: 85%;
  height: 75%;
  margin: 0 auto;
  padding-top: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: box-shadow 1s ease;
  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  }
`;
