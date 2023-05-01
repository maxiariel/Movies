import styled from "styled-components";

interface IProgressBarProps{
  porcentage? : number;
}

export const BackgroundCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: black;
  opacity: 0.99;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.85;
    filter: blur(2px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid white;
  width: 90%;
  margin-top: 8%;
  margin-left: 5%;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgb(255 255 255 / 40%);
  background: black;
  opacity: 0.85;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContentImg = styled.div`
  width: 50%;
  height: 60vh;
  border-right: 1px solid white;
  border-top: 1px solid white;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom-left-radius: 10px;
`;
export const ContentTitle = styled.div`
  text-align: center;
  color: white;
`;

export const ContentInfo = styled.div`
  width: 50%;
  color: #ffffff;
  border-top: 1px solid white;
  padding:5px;
`;

export const Description = styled.p`
  font-size: 1.19rem;
  

  & > span{
    font-size: 1.09rem;
    font-style:oblique;
  }
`

export const Bar = styled.div`
width:100%;
height:20px;
background-color:#cccccc;
border-radius:10px;
`

export const ProgressBar = styled.div<IProgressBarProps>`
  height: 100%;
  background-color: #00be20;
  width: ${props => props.porcentage?.toString()}%;
  transition: width 0.5s ease-in-out;
  border-radius:10px;
  &>div{
    text-align: right;
    font-size: 1rem;
    font-style: italic;
    padding-right: 5px;
  }
  
`