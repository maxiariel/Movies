import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

export const Card = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  border: 1px solid #e3e3e3;
  margin: 1rem;
  max-height: 35vh;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 40%;
    max-height: 40%;
  }
  @media (max-width: 470px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

export const ContentImg = styled.div`
  width: 15%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  :hover {
    background-color: black;
    opacity: 0.95;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
  }
`;

export const ContentText = styled.div`
  width: 85%;
  flex-grow: 1;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 100%;
  overflow: hidden;

  & > a {
    text-decoration: none;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: #494949;
  transition: font-size 1s ease;
  :hover {
    font-size: 1.35rem;
  }
`;

export const Overview = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 700;
  max-height: calc(100% - 2.5rem);
  width: 100%;
  overflow-wrap: break-word;
  overflow: hidden;

  & > span {
    font-size: 1rem;
    font-style: italic;
    font-weight: normal;
    overflow-wrap: break-word;
  }
`;
