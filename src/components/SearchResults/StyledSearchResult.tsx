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
  flex-direction: row;
  border: 1px solid #e3e3e3;
  margin: 1rem;
  height: 35vh;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const ContentImg = styled.div`
  width: 15%;
  height: 100%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ContentText = styled.div`
  width: 85%;
  flex-grow: 1;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &> a{
    text-decoration:none;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: #494949;
`;

export const Overview = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 700;

  & > span {
    font-size: 1rem;
    font-style: italic;
    font-weight: normal;
  }
`;
