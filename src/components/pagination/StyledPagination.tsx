import styled from "styled-components";

interface PageButtonProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${({ isActive }) => (isActive ? "#2a69dd" : "#fff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0 5px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#2a69dd" : "#ccc")};
    color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const PaginationArrowButton = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0 5px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #2a69dd;
    color: #fff;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const PaginationLabel = styled.span`
  margin: 0 10px;
  font-size: 14px;
`;
