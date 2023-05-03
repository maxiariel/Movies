import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
