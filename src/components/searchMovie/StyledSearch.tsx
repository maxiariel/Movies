import styled from "styled-components";

export const Wrapper = styled.div`
  height: 14vh;
  background-color: #ff8d2c;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Input = styled.input`
  width: 60%;
  height: 5vh;
  border-radius: 20px;
  font-size: 1.03rem;
  font-family: cursive;
  margin-left: 10px;
  border-style: solid;
  border-color: #e3e3e3;
  :focus {
    outline: none;
    border-color: #e3e3e3;
    border-style: solid;
    background-color: #fafafa;
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  width: 13%;
  margin-left: 10px;
  height: 6vh;
  border-radius: 20px;
  cursor: pointer;
  border-style: solid;
  color: white;
  background-color: #7da4e3;
  font-size: 1.15rem;
  border-color: #7da4e3;
  :hover {
    background-color: #7aa0e0;
    transition: 0.5s;
  }
`;
